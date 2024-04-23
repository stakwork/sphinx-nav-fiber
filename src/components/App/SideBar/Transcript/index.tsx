import { Button } from '@mui/material'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import CopyIcon from '~/components/Icons/CopyIcon'
import NotesIcon from '~/components/Icons/NotesIcon'
import { Flex } from '~/components/common/Flex'
import { getFullTranscript } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import CheckIcon from '../../../Icons/CheckIcon'

type TranscriptProps = {
  stateless?: boolean
  node: NodeExtended | null
}

const MoreText = styled.span`
  color: ${colors.white};
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  text-align: right;

  &:hover {
    color: ${colors.GRAY3};
  }
`

export const Transcript = ({ stateless, node }: TranscriptProps) => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [s.transcriptIsOpen, s.setTranscriptOpen])

  const [isCopied, setIsCopied] = useState(false)

  const [fullTranscript, setFullTranscript] = useState('')
  const [showFullTranscript, setShowFullTranscript] = useState(false)

  if (!stateless && !transcriptIsOpen) {
    return null
  }

  const loadFullTranscript = async () => {
    try {
      const response = await getFullTranscript(node?.ref_id)

      setFullTranscript(response.data.text)
    } catch (error) {
      console.error('Error fetching full transcript', error)
    }
  }

  const handleCopy = async () => {
    if (fullTranscript === '') {
      const response = await getFullTranscript(node?.ref_id)

      copyNodeText(response.data.text)
    } else {
      copyNodeText(fullTranscript)
    }

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  const handleMoreClick = async () => {
    if (!showFullTranscript) {
      await loadFullTranscript()

      setShowFullTranscript(true)
    } else {
      setShowFullTranscript(false)
    }
  }

  const copyNodeText = (text: string | undefined) => {
    if (text === undefined) {
      return
    }

    navigator.clipboard.writeText(text)
    setIsCopied(true)
  }

  return (
    <Flex grow={1} shrink={1}>
      <Header>
        {stateless && (
          <Heading>
            <div className="icon">
              <NotesIcon />
            </div>
            <div className="title">Transcript</div>
          </Heading>
        )}

        {node?.text ? (
          <>
            {!isCopied ? (
              <Button endIcon={<CopyIcon />} onPointerDown={() => handleCopy()} size="small" variant="outlined">
                Copy
              </Button>
            ) : (
              <CopiedButton align="center" direction="row" justify="flex-start">
                <div className="icon">
                  <CheckIcon />
                </div>
                <div className="text">Copied</div>
              </CopiedButton>
            )}
          </>
        ) : (
          <div />
        )}

        {!stateless && (
          <CloseButton
            onClick={() => {
              setTranscriptOpen(false)
            }}
          >
            <MdClose fontSize={35} />
          </CloseButton>
        )}
      </Header>
      <Box>
        {showFullTranscript ? fullTranscript : `${node?.text?.substring(0, 100)}`}
        <MoreText onClick={handleMoreClick}>... {showFullTranscript ? 'show less' : 'more'}</MoreText>
      </Box>
    </Flex>
  )
}

const Heading = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
})`
  .icon {
    font-size: 16px;
    color: ${colors.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${colors.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`

const Header = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  margin-bottom: 18px;
`

const CloseButton = styled(Flex).attrs({})`
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${colors.lightBlue500};
  }
`

const Box = styled(Flex)`
  color: ${colors.white};
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`

const CopiedButton = styled(Flex)`
  color: ${colors.SECONDARY_BLUE};
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  height: 28px;
  padding: 0 20px;
  .text {
    margin-left: 5px;
  }

  .icon {
    font-size: 12px;
  }
`
