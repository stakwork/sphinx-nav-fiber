import { FC, useCallback, useEffect } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import { BaseModal } from '~/components/Modal'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useModal } from '~/stores/useModalStore'

type Props = {
  text: string
  onClose: () => void
  topic: string
}

export const BriefDescription: FC<Props> = ({ text, onClose, topic }) => {
  const { close } = useModal('briefDescription')

  const handleClose = useCallback(() => {
    onClose()
    close()
  }, [onClose, close])

  useEffect(() => {
    window.addEventListener('keydown', handleClose)

    return () => {
      window.removeEventListener('keydown', handleClose)
    }
  }, [handleClose])

  return (
    <BaseModal id="briefDescription" kind="regular" onClose={handleClose}>
      <Title>{topic}</Title>
      <ScrollableContent>
        <Flex>
          <StyledText>
            <Markdown>{text}</Markdown>
          </StyledText>
        </Flex>
      </ScrollableContent>
    </BaseModal>
  )
}

const ScrollableContent = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
`

const StyledText = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`

const Title = styled(Text)`
  font-weight: 600;
  font-size: 20px;
`
