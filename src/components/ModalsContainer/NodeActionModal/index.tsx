import { BaseModal, ModalKind } from '~/components/Modal'
import { Body } from '~/components/ModalsContainer/NodeActionModal/Body'
import { useModal } from '~/stores/useModalStore'

export type FormData = {
  nodeType: string
  budget: string
} & Partial<{ [k: string]: string }>

export const NodeActionModal = () => {
  const { close } = useModal('nodeAction')

  const handleClose = () => {
    close()
  }

  const modalKind: ModalKind = 'small'

  return (
    <BaseModal id="nodeAction" kind={modalKind} onClose={handleClose} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}
