import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'

export type FormData = {
  name: string
}

export const EditNodeNameModal = () => {
  const { close } = useModal('editNodeName')

  return (
    <BaseModal id="editNodeName" kind="large" onClose={close} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}
