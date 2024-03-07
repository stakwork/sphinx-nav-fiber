import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { SettingsView } from './SettingsView'

export const SettingsModal = () => {
  const { close } = useModal('settings')

  return (
    <BaseModal background="BG1" id="settings" noWrap onClose={close}>
      <SettingsView onClose={close} />
    </BaseModal>
  )
}
