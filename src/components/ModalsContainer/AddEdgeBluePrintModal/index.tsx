import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'
import styled from 'styled-components'

export type FormData = {
  topic: string
}

const ModalWrapper = styled.div`
  z-index: 21000;
  position: relative;
`

export const AddEdgeBluePrintModal = () => {
  const { close } = useModal('addEdgeToBluePrint')

  return (
    <ModalWrapper>
      <BaseModal id="addEdgeToBluePrint" kind="small" onClose={close} preventOutsideClose>
        <Body />
      </BaseModal>
    </ModalWrapper>
  )
}
