import Button from '@mui/material/Button'
import clsx from 'clsx'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from 'styled-components'
import { StyledMarkdown } from '~/components/App/SideBar/AiSummary/utils/AiSummaryHighlight/markdown'
import { Booster } from '~/components/Booster'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { Text as MarkdownText, Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import AiPauseIcon from '~/components/Icons/AiPauseIcon'
import AiPlayIcon from '~/components/Icons/AiPlayIcon'
import LinkIcon from '~/components/Icons/LinkIcon'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Link, Node } from '~/types'
import { colors } from '~/utils/colors'
import { BoostAmt } from '../../../Helper/BoostAmt'

interface EdgeWithTargetNode extends Link<string> {
  target_node?: Node
  properties?: {
    sequence?: number
    [key: string]: unknown
  }
}

export const Default = () => {
  const selectedNode = useSelectedNode()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { currentPlayingAudio, setCurrentPlayingAudio } = useAppStore((s) => s)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sequencedNodes, setSequencedNodes] = useState<Node[]>([])
  const [boostAmount, setBoostAmount] = useState<number>(selectedNode?.properties?.boost || 0)

  const getIndexByType = useSchemaStore((s) => s.getIndexByType)
  const { playingNode } = usePlayerStore((s) => s)

  useEffect(() => {
    setBoostAmount(selectedNode?.properties?.boost || 0)
  }, [selectedNode])

  useEffect(() => {
    const fetchSequencedNodes = async () => {
      if (selectedNode?.ref_id) {
        const response = await fetchNodeEdges(selectedNode.ref_id, 0, 100, {
          sortBy: 'sequence',
          includeProperties: true,
          includeContent: true,
          depth: 1,
          useSubGraph: true,
        })

        if (response) {
          const nodesWithSequence = response.edges
            ?.filter((edge: EdgeWithTargetNode) => edge.properties?.sequence !== undefined)
            .map((edge: EdgeWithTargetNode) => ({
              node: edge.target,
              sequence: edge.properties?.sequence as number,
            }))
            .sort((a, b) => a.sequence - b.sequence)
            .map((i) => response.nodes.find((n) => n.ref_id === i.node))

          const filteredNodes = nodesWithSequence.filter((i) => !!i)

          setSequencedNodes(filteredNodes as Node[])
        }
      }
    }

    fetchSequencedNodes()
  }, [selectedNode?.ref_id])

  useEffect(() => {
    const audioElement = audioRef.current

    const onAudioPlaybackComplete = () => {
      setCurrentPlayingAudio(null)
      setIsPlaying(false)
    }

    if (audioElement) {
      audioElement.addEventListener('ended', onAudioPlaybackComplete)
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', onAudioPlaybackComplete)
      }
    }
  }, [setCurrentPlayingAudio, isPlaying])

  useEffect(() => {
    setIsPlaying(false)
  }, [selectedNode])

  const togglePlay = () => {
    if (currentPlayingAudio?.current && currentPlayingAudio.current !== audioRef.current) {
      currentPlayingAudio.current.pause()
      setCurrentPlayingAudio(null)
    }

    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setCurrentPlayingAudio(audioRef)
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setCurrentPlayingAudio(null)
        setIsPlaying(false)
      }
    }
  }

  if (!selectedNode) {
    return null
  }

  const hasImage = !playingNode?.ref_id && !!selectedNode.properties?.image_url
  const hasAudio = !!selectedNode.properties?.audio_EN
  const customKeys = selectedNode.properties || {}
  const sourceLink = selectedNode.properties?.source_link
  const pubkey = selectedNode.properties?.pubkey

  const getNodeContent = (node: Node) => {
    const keyProp = getIndexByType(node.node_type)

    return keyProp ? node.properties?.[keyProp] : node.label
  }

  return (
    <StyledContainer>
      {hasImage && (
        <StyledImageWrapper>
          <img
            alt="img_a11y"
            onError={(e) => {
              e.currentTarget.src = 'generic_placeholder_img.png'
              e.currentTarget.className = 'default-img'
            }}
            src={selectedNode.properties?.image_url}
          />
        </StyledImageWrapper>
      )}

      <StyledContent grow={1} justify="flex-start" pt={hasImage ? 0 : 8} shrink={1}>
        <Flex ml={24} mt={20} style={{ width: 'fit-content', flexDirection: 'row', alignItems: 'center' }}>
          <TypeBadge type={selectedNode.node_type || ''} />
          {sourceLink && (
            <StyledLinkIcon
              href={`${sourceLink}${(sourceLink as string).includes('?') ? '&' : '?'}open=system`}
              target="_blank"
            >
              <LinkIcon />
            </StyledLinkIcon>
          )}
        </Flex>

        <StyledWrapper>
          {Object.entries(customKeys)
            .filter(([key]) => key !== 'media_url' && key !== 'link' && key !== 'pubkey')
            .map(([key, value]) => (
              <NodeDetail
                key={key}
                hasAudio={hasAudio}
                isPlaying={isPlaying}
                label={formatLabel(key)}
                togglePlay={togglePlay}
                value={key === 'date' && value ? moment(value * 1000).format('MMMM Do YYYY') : value}
              />
            ))}
        </StyledWrapper>

        {sequencedNodes.length > 0 && (
          <StyledSequenceWrapper>
            {sequencedNodes.map((item, index) => (
              <React.Fragment key={`${item.ref_id}`}>
                <Text>{getNodeContent(item)}</Text>
                {index < sequencedNodes.length - 1 && <StyledLineBreak />}
              </React.Fragment>
            ))}
          </StyledSequenceWrapper>
        )}

        {pubkey && (
          <Flex direction="row" justify="space-between" pt={14} px={24}>
            <BoostAmt amt={boostAmount} />
            <Booster
              content={selectedNode}
              count={boostAmount}
              refId={selectedNode.ref_id}
              updateCount={setBoostAmount}
            />
          </Flex>
        )}
      </StyledContent>

      {hasAudio && selectedNode.properties?.audio_EN && (
        <StyledAudio ref={audioRef} src={selectedNode.properties.audio_EN}>
          <track kind="captions" />
        </StyledAudio>
      )}
    </StyledContainer>
  )
}

const formatLabel = (label: string) => label.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

type Props = { label: string; value: unknown; hasAudio: boolean; isPlaying: boolean; togglePlay: () => void }

const NodeDetail = ({ label, value, hasAudio, isPlaying, togglePlay }: Props) => {
  const isLong = (value as string).length > 140
  const searchTerm = useAppStore((s) => s.currentSearch)

  const markdownComponents: Components = {
    text: ({ children }) => (
      <MarkdownText>{searchTerm ? highlightSearchTerm(String(children), searchTerm) : children}</MarkdownText>
    ),
  }

  if (!value || label === 'Audio EN' || label === 'Source Link' || label === 'Image Url') {
    return null
  }

  const isCode = label === 'Frame' || label === 'Code' || label === 'Body'

  return (
    <>
      <StyledDetail className={clsx('node-detail', { 'node-detail__long': isLong || isCode })}>
        <Text className="node-detail__label">
          {label}
          {label === 'Text' && hasAudio && (
            <AudioButton onClick={togglePlay}>{isPlaying ? <AiPauseIcon /> : <AiPlayIcon />}</AudioButton>
          )}
        </Text>
        {!isCode ? (
          <Text className="node-detail__value">
            <StyledMarkdown components={markdownComponents}>{String(value)}</StyledMarkdown>
          </Text>
        ) : (
          <SyntaxHighlighter language="javascript" style={okaidia}>
            {String(value)}
          </SyntaxHighlighter>
        )}
      </StyledDetail>
      <StyledDivider />
    </>
  )
}

const StyledContent = styled(Flex)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`

const StyledWrapper = styled(Flex)`
  padding: 4px 24px;
`

const StyledImageWrapper = styled(Flex)`
  width: 100%;
  height: 240px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .default-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    border-radius: 2px;
  }
`

const StyledDetail = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: Barlow;
  padding: 12px 0;
  font-size: 14px;
  line-height: 22px;

  &.node-detail {
    .node-detail__label {
      min-width: 116px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }

    .node-detail__value {
      font-weight: 400;
      word-wrap: normal;
      word-break: break-word;
    }

    &__long {
      flex-direction: column;
    }
  }
`

const StyledDivider = styled(Divider)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`

const StyledContainer = styled(Flex)`
  flex-direction: column;
  height: 100%;
`

const AudioButton = styled(Button)`
  &&.MuiButton-root {
    background-color: ${colors.COLLAPSE_BUTTON};
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0px;
    width: 27px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
    left: 84%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 29px;
    height: 12px;
    color: white;
  }
`

const StyledAudio = styled.audio`
  display: none;
`

const StyledLinkIcon = styled.a`
  margin-left: 6px;
  color: ${colors.GRAY6};
  margin-top: 4px;

  svg {
    width: 1.3em;
    height: 1.3em;
  }
`

const StyledSequenceWrapper = styled(Flex)`
  padding: 16px 24px;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`

const StyledLineBreak = styled.div`
  width: 100%;
  height: 1px;
  margin: 2px 0;
`
