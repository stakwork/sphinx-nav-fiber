import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { SourcesView } from './SourcesView'

export const SourcesTableModal = () => {
  const { close } = useModal('sourcesTable')

  return (
    <BaseModal background="BG1" id="sourcesTable" kind="large" noWrap onClose={close}>
      <SourcesView />
    </BaseModal>
  )
}
