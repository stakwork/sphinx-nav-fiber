import { lazy } from 'react'

const LazySettingsModal = lazy(() =>
  import('../SettingsModal').then(({ SettingsModal }) => ({ default: SettingsModal })),
)

const LazyClaimsModal = lazy(() => import('./ClaimsModal').then(({ ClaimsModal }) => ({ default: ClaimsModal })))

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

const LazyCreateBountyModal = lazy(() =>
  import('./CreateBountyModal').then(({ CreateBountyModal }) => ({ default: CreateBountyModal })),
)

const LazyOnboardingModal = lazy(() =>
  import('./OnboardingFlow').then(({ OnboardingModal }) => ({ default: OnboardingModal })),
)

const LazyBriefDescriptionModal = lazy(() =>
  import('./BriefDescriptionModal').then(({ BriefDescription }) => ({ default: BriefDescription })),
)

const LazyNodeActionModal = lazy(() =>
  import('./NodeActionModal').then(({ NodeActionModal }) => ({ default: NodeActionModal })),
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
    <LazyBlueprintModal />
    <LazyMergeNodeModal />
    <LazyUserFeedBackModal />
    <LazyCreateBountyModal />
    <LazyOnboardingModal />
    <LazyBriefDescriptionModal />
    <LazyNodeActionModal />
    <LazyClaimsModal />
  </>
)
