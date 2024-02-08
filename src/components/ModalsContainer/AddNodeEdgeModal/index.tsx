import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { Body } from './Body'

export type FormData = {
  topic: string
}

export const AddNodeEdgeModal = () => {
  const { close } = useModal('addEdgeToNode')

  return (
    <BaseModal id="addEdgeToNode" kind="large" onClose={close} preventOutsideClose>
      <Body />
    </BaseModal>
  )
}
