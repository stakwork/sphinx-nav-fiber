import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import GlobeIcon from '~/components/Icons/GlobeIcon'
import LinkIcon from '~/components/Icons/LinkIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils'

export const Document = () => {
  const [playing, setPlaying] = useState(false)
  const selectedNode = useSelectedNode()
  const hasSourceLink = !!selectedNode?.source_link

  const audioRef = useRef<HTMLVideoElement>(null)

  const searchTerm = useAppStore((s) => s.currentSearch)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    e.currentTarget.blur()
    setPlaying(!playing)
  }

  useEffect(() => {
    if (playing) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [playing])

  return (
    <Flex
      align="flex-start"
      basis="100%"
      direction="column"
      grow={1}
      justify="center"
      pt={hasSourceLink ? 62 : 0}
      shrink={1}
    >
      {hasSourceLink && (
        <StyledHeader>
          <GlobeIcon color={colors.GRAY6} />
          <StyledLinkText>{selectedNode?.source_link}</StyledLinkText>
          <StyledLink
            href={`${selectedNode?.source_link}?open=system`}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
          >
            <LinkIcon />
          </StyledLink>
        </StyledHeader>
      )}
      {selectedNode?.audio?.length ? (
        <Flex justify="flex-start" p={12}>
          <Button onClick={(e) => handleClick(e)} startIcon={playing ? <PauseIcon /> : <PlayIcon />}>
            {playing ? 'Pause' : 'Play'}
          </Button>
          <StyledAudio ref={audioRef} src={selectedNode.audio[0]?.link || ''}>
            <track kind="captions" />
          </StyledAudio>
        </Flex>
      ) : null}
      <StyledContent grow={1} justify="flex-start" p={12} shrink={1}>
        <Text color="primaryText1" kind="regular">
          {highlightSearchTerm(selectedNode?.text || '', searchTerm)}
        </Text>
      </StyledContent>
    </Flex>
  )
}

const StyledHeader = styled(Flex)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.BG2};
  gap: 5px;
  color: ${colors.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${colors.GRAY6};
  }
`

const StyledLink = styled.a`
  color: ${colors.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`

const StyledContent = styled(Flex)`
  overflow: auto;
`

const StyledLinkText = styled(Text)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const StyledAudio = styled.audio`
  height: 0;
  width: 0;
`
