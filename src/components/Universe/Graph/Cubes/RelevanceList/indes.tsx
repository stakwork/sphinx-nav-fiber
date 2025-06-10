import { Billboard, Html } from '@react-three/drei'
import { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { Episode } from '~/components/App/SideBar/Relevance/Episode'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNodeRelativeIds } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { NodeExtended } from '~/types'
import { formatDescription } from '~/utils/formatDescription'
import { saveConsumedContent } from '~/utils/relayHelper'
import { adaptTweetNode } from '~/utils/twitterAdapter'
import { SelectedNodeView } from '../../../../App/SideBar/SelectedNodeView/index'
import { nodeSize } from '../constants'

export const RelevanceList = () => {
  const selectedNode = useGraphStore((s) => s.selectedNode)
  const selectedNodeType = useGraphStore((s) => s.selectedNodeType)
  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp)
  const simulation = useSimulationStore((s) => s.simulation)
  const setRelevanceSelected = useAppStore((s) => s.setRelevanceSelected)
  const selectedNodeRelativeIds = useSelectedNodeRelativeIds()
  const { navigateToNode } = useNodeNavigation()

  const centerPos = useMemo(
    () => [selectedNode?.x || 0, selectedNode?.y || 0, selectedNode?.z || 0] as [number, number, number],
    [selectedNode?.x, selectedNode?.y, selectedNode?.z],
  )

  const nodesData = simulation?.nodes() || []
  const nodes = nodesData

  const childNodes = nodes
    .filter((f: NodeExtended) => selectedNodeRelativeIds.includes(f?.ref_id || ''))
    .filter((i: NodeExtended) => i.node_type === selectedNodeType)

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      saveConsumedContent(node)
      setSelectedTimestamp(node)
      setRelevanceSelected(true)
      navigateToNode(node.ref_id)
    },
    [setSelectedTimestamp, setRelevanceSelected, navigateToNode],
  )

  return (
    <Billboard position={centerPos}>
      <group position={[nodeSize * 5, 0, 0]}>
        <Html distanceFactor={100} sprite transform>
          {selectedNodeType ? (
            <List
              onScroll={(e) => {
                console.log(e)
                e.stopPropagation()
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              {(childNodes ?? []).map((n: NodeExtended) => {
                const adaptedNode = adaptTweetNode(n)

                const {
                  image_url: imageUrl,
                  date,
                  boost,
                  show_title: showTitle,
                  node_type: nodeType,
                  text,
                  source_link: sourceLink,
                  name,
                  verified = false,
                  twitter_handle: twitterHandle,
                } = adaptedNode || {}

                return nodeType ? (
                  <Episode
                    key={adaptedNode.ref_id}
                    boostCount={boost || 0}
                    date={date || 0}
                    imageUrl={imageUrl || ''}
                    name={name || ''}
                    node={n}
                    onClick={() => {
                      handleNodeClick(n)
                    }}
                    showTitle={formatDescription(showTitle)}
                    sourceLink={sourceLink}
                    text={text || ''}
                    twitterHandle={twitterHandle}
                    type={nodeType}
                    verified={verified}
                  />
                ) : null
              })}
            </List>
          ) : (
            <Wrapper
              onScroll={(e) => {
                console.log(e)
                e.stopPropagation()
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              <SelectedNodeView />
            </Wrapper>
          )}
        </Html>
      </group>
    </Billboard>
  )
}

const List = styled.ul`
  color: #fff;
  background: rgba(0, 0, 0, 1);
  width: 390px;
  padding: 12px;
  border-radius: 8px;
  border: 12px solid #15161c;
  list-style: none;
  /* perspective: 800px; */
  backface-visibility: hidden;
  max-height: 400px;
  overflow: auto;
  padding: 0;
`

const Wrapper = styled.div`
  color: #fff;
  background: rgba(0, 0, 0, 1);
  width: 390px;
  padding: 12px;
  border-radius: 8px;
  border: 12px solid #15161c;
  list-style: none;
  height: 400px;
  overflow: auto;
  cursor: initial;
`
