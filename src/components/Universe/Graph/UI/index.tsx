import { memo } from 'react'
import { Content } from './Content'
import { NodeControls } from './NodeControls'
import { Panel } from './Panel'
import { DetailsPanel } from './Panel/DetailsPanel'
import { Tooltip } from './Panel/Tooltip'

export const NodeGUI = memo(() => (
  <>
    <NodeControls />
    <Content />
    <Panel />
    <DetailsPanel />
    <Tooltip />
  </>
))

NodeGUI.displayName = 'NodeGUI'
