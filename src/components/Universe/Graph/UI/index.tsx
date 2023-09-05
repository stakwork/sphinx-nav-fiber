import { memo } from 'react'
import { NodeControls } from './NodeControls'

export const NodeDetailsPanel = memo(() => (
  <>
    <NodeControls />
  </>
))

NodeDetailsPanel.displayName = 'NodeDetailsPanel'
