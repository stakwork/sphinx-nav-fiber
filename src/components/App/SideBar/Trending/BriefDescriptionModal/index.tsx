import { FC } from 'react'
import styled from 'styled-components'
import { BaseModal } from '~/components/Modal'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useModal } from '~/stores/useModalStore'

type Props = {
  text: string
  onClose: () => void
}

export const BriefDescription: FC<Props> = ({ text, onClose }) => {
  const { close } = useModal('briefDescription')

  const handleClose = () => {
    onClose()
    close()
  }

  return (
    <BaseModal id="briefDescription" kind="regular" onClose={handleClose} preventOutsideClose>
      <Flex py={16}>
        <StyledText>{text}</StyledText>
      </Flex>
    </BaseModal>
  )
}

const StyledText = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
`
