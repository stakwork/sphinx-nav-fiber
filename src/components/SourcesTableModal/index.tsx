import { BaseModal } from '~/components/Modal'
import { useModal } from '~/stores/useModalStore'
import { SourcesView } from './SourcesView'

export const SourcesTableModal = () => {
  const { close } = useModal('sourcesTable')
  const { visible } = useModal('addContent')

  return visible ? null : (
    <BaseModal background="BG1" id="sourcesTable" kind="large" noWrap onClose={close} preventOutsideClose>
      <SourcesView />
    </BaseModal>
  )
}
