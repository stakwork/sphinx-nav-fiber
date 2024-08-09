import { lazy } from 'react'
import { useSomeModalIsOpen } from '~/stores/useModalStore'

const LazySettingsModal = lazy(() =>
  import('../SettingsModal').then(({ SettingsModal }) => ({ default: SettingsModal })),
)

const LazyAddContentModal = lazy(() =>
  import('../AddContentModal').then(({ AddContentModal }) => ({ default: AddContentModal })),
)

const LazyAddItemModal = lazy(() => import('../AddItemModal').then(({ AddItemModal }) => ({ default: AddItemModal })))

const LazySourcesTableModal = lazy(() =>
  import('../SourcesTableModal').then(({ SourcesTableModal }) => ({ default: SourcesTableModal })),
)

const LazyEditNodeNameModal = lazy(() =>
  import('./EditNodeNameModal').then(({ EditNodeNameModal }) => ({ default: EditNodeNameModal })),
)

const LazyRemoveNodeModal = lazy(() =>
  import('./RemoveNodeModal').then(({ RemoveNodeModal }) => ({ default: RemoveNodeModal })),
)

const LazyAddNodeEdgeModal = lazy(() =>
  import('./AddNodeEdgeModal').then(({ AddNodeEdgeModal }) => ({ default: AddNodeEdgeModal })),
)

const LazyMergeNodeModal = lazy(() =>
  import('./MergeTopicModal').then(({ MergeNodeModal }) => ({ default: MergeNodeModal })),
)

const LazyChangeNodeTypeModal = lazy(() =>
  import('./ChangeNodeTypeModal').then(({ ChangeNodeTypeModal }) => ({ default: ChangeNodeTypeModal })),
)

const LazyBlueprintModal = lazy(() =>
  import('./BlueprintModal').then(({ BlueprintModal }) => ({ default: BlueprintModal })),
)

const LazyUserFeedBackModal = lazy(() =>
  import('./UserFeedBackModal').then(({ UserFeedBackModal }) => ({ default: UserFeedBackModal })),
)

export const ModalsContainer = () => {
  const someModalIsOpen = useSomeModalIsOpen()

  return someModalIsOpen || true ? (
    <>
      <LazyAddItemModal />
      <LazyAddContentModal />
      <LazySettingsModal />
      <LazyEditNodeNameModal />
      <LazyRemoveNodeModal />
      <LazySourcesTableModal />
      <LazyAddNodeEdgeModal />
      <LazyChangeNodeTypeModal />
      <LazyBlueprintModal />
      <LazyMergeNodeModal />
      <LazyUserFeedBackModal />
    </>
  ) : null
}
