import { BaseModal, ModalKind } from '~/components/Modal'
import { Body } from '~/components/ModalsContainer/NodeActionModal/Body'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'

export type FormData = {
  nodeType: string
  budget: string
} & Partial<{ [k: string]: string }>

export const NodeActionModal = () => {
  const { close } = useModal('nodeAction')
  const { removeSelectedActionDetail } = useSchemaStore((s) => s)

  const handleClose = () => {
    removeSelectedActionDetail()
    close()
  }

  const modalKind: ModalKind = 'small'

  return (
    <BaseModal id="nodeAction" kind={modalKind} onClose={handleClose} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}
