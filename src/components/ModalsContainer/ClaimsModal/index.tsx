import { BaseModal, ModalKind } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'

export const ClaimsModal = () => {
  const { close, visible } = useModal('claim')

  const handleClose = () => {
    close()
  }

  const modalKind: ModalKind = 'full'

  return (
    <BaseModal id="claim" kind={modalKind} onClose={handleClose} preventOutsideClose>
      {visible && <Body />}
    </BaseModal>
  )
}
