import { memo } from 'react'
import { Content } from './Content'
import { NodeControls } from './NodeControls'
import { Panel } from './Panel'
import { DetailsPanel } from './Panel/DetailsPanel'

export const NodeGUI = memo(() => {
  return (
    <>
      <NodeControls />
      <Content />
      <Panel />
      <DetailsPanel />
    </>
  )
})

NodeGUI.displayName = 'NodeGUI'
