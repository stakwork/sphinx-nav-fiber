import { lazy } from 'react'

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

export const ModalsContainer = () => (
  <>
    <LazyAddItemModal />
    <LazyAddContentModal />
    <LazySettingsModal />
    <LazyEditNodeNameModal />
    <LazyRemoveNodeModal />
    <LazySourcesTableModal />
    <LazyAddNodeEdgeModal />
    <LazyChangeNodeTypeModal />
    <LazyMergeNodeModal />
  </>
)
