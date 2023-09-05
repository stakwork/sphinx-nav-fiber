import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'

const copyNodeText = (text: string | undefined) => {
  if (text === undefined) {
    return
  }

  navigator.clipboard.writeText(text)

  const copyButton = document.querySelector('.copy-button')

  if (copyButton) {
    copyButton.classList.add('copied')

    setTimeout(() => {
      copyButton.classList.remove('copied')
    }, 1000)
  }
}

type TranscriptProps = {
  stateless?: boolean
  node: NodeExtended | null
}

export const Transcript = ({ stateless, node }: TranscriptProps) => {
  const [transcriptIsOpen, setTranscriptOpen] = useAppStore((s) => [s.transcriptIsOpen, s.setTranscriptOpen])

  if (!stateless && !transcriptIsOpen) {
    return null
  }

  return (
    <Wrapper style={{ left: MENU_WIDTH }}>
      <Flex align="center" direction="row" justify="space-between">
        {stateless && <Text kind="heading">Transcript</Text>}

        {node?.text ? (
          <CopyButton className="copy-button" onPointerDown={() => copyNodeText(node?.text)}>
            Copy
          </CopyButton>
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
      </Flex>

      <Box>{node?.text ? `"${node?.text}"` : '...'}</Box>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  display: flex;
  overflow: scroll;
`

const CloseButton = styled(Flex).attrs({})`
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${colors.lightBlue500};
  }
`

const CopyButton = styled(Flex)`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 200px;
  background: ${colors.BUTTON1};
  color: var(--Primary-Text, #fff);
  text-align: center;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  & + & {
    margin-left: 8px;
  }

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }

  &:active {
    background: ${colors.BUTTON1_PRESS};
    color: ${colors.GRAY6};
  }
`

const Box = styled(Flex)`
  color: ${colors.white};
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-style: italic;
`
