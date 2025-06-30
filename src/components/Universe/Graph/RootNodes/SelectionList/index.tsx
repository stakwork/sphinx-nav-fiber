import { Html } from '@react-three/drei'
import { useMemo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import CancelIcon from '~/components/Icons/CancelIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import { useGraphStore } from '~/stores/useGraphStore'
import { useRootNodesStore } from '~/stores/useRootNodesStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Node } from '~/types'
import { Common } from '../Node/Common'
import { User } from '../Node/User'

type Props = {
  selectedGroup: Node | null
  onClose: () => void
  handleNodeClick: (node: Node) => void
}

export const SelectionList = ({ onClose, selectedGroup, handleNodeClick }: Props) => {
  const { getNodeKeysByType } = useSchemaStore((s) => s)
  const setHoveredNode = useGraphStore((s) => s.setHoveredNode)
  const setActiveView = useRootNodesStore((s) => s.setActiveView)
  const rootStoreData = useRootNodesStore((s) => s.rootStoreData)

  const renderNodes = useMemo(() => {
    const { nodes, links } = rootStoreData || { nodes: [], links: [] }

    if (!selectedGroup) {
      return nodes.filter((node) => node.node_type.endsWith('-root'))
    }

    return nodes.filter((node) =>
      links.some((link) => link.source === selectedGroup.ref_id && link.target === node.ref_id),
    )
  }, [rootStoreData, selectedGroup])

  return (
    <mesh>
      <Html>
        <Wrapper
          onScroll={(e) => {
            console.log(e)
            e.stopPropagation()
          }}
          onWheel={(e) => e.stopPropagation()}
        >
          <Heading align="center" direction="row" justify="space-between">
            {selectedGroup ? (
              <>
                <span>{selectedGroup.properties?.name}</span>
                <StyledIconButton color="primary" onClick={onClose}>
                  <CancelIcon />
                </StyledIconButton>
              </>
            ) : (
              <StyledIconButtonLarge color="primary" onClick={() => setActiveView('graph')}>
                <NodesIcon />
              </StyledIconButtonLarge>
            )}
          </Heading>
          {renderNodes.map((node) => {
            const keyProperty = getNodeKeysByType(node.node_type) || ''
            const nodeType = node.node_type
            const imageUrl = node?.properties?.image_url || ''
            const name = keyProperty && node?.properties ? String(node?.properties[keyProperty] || '') : node.name || ''
            const truncatedName = name.length > 100 ? `${name.slice(0, 100)}...` : name
            const isRoot = node.node_type.endsWith('-root')

            return (
              <Flex
                key={node.ref_id}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ cursor: 'pointer' }}
              >
                {['User', 'Person'].includes(nodeType) ? (
                  <User imageUrl={imageUrl} name={truncatedName} />
                ) : (
                  <Common isRoot={!!isRoot} name={truncatedName} radius={isRoot ? 60 : 90} />
                )}
              </Flex>
            )
          })}
        </Wrapper>
      </Html>
    </mesh>
  )
}

const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  /* background-color: rgba(163, 40, 40, 0.368); */
  color: white;
  gap: 16px;
  padding: 10px;
  max-height: 600px;
  overflow: auto;
  /* transform: rotateY(45deg);
  perspective: 1000px; */
`

const StyledIconButton = styled(Flex)`
  color: white;
  font-size: 30px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  cursor: pointer;
`

const StyledIconButtonLarge = styled(StyledIconButton)`
  color: white;
  font-size: 30px;
  width: 60px;
  height: 60px;
  position: static;
  right: 0;
  top: 0;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
`

const Heading = styled(Flex)`
  position: relative;
`
