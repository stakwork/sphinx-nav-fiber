import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { SettingsView } from './SettingsView'

export const SettingsModal = () => {
  const { close } = useModal('settings')
  const { visible } = useModal('addItem')

  return visible ? null : (
    <BaseModal background="BG1" id="settings" noWrap onClose={close} preventOutsideClose>
      <SettingsView onClose={close} />
    </BaseModal>
  )
}
