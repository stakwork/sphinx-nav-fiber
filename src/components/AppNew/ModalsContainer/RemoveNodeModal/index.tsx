import { BaseModal } from '~/components/Modal'
import { Body } from './Body'

export type FormData = {
  name: string
}

export const RemoveNodeModal = () => (
  <BaseModal id="removeNode" kind="small" preventOutsideClose>
    <Body />
  </BaseModal>
)
