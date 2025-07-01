import { Html } from '@react-three/drei'
import { useMemo } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ChevronRightIcon from '~/components/Icons/ChevronRightIcon'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useRootNodesStore } from '~/stores/useRootNodesStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { Node } from '~/types'
import { colors, videoTimeToSeconds } from '~/utils'
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

    if (selectedGroup.node_type === 'Chapter') {
      const { dataInitial } = useDataStore.getState()

      if (selectedGroup.properties?.timestamp) {
        const chapterNodeTime = videoTimeToSeconds(selectedGroup.properties?.timestamp)

        return dataInitial?.nodes.filter((node) => node.start && node.start <= chapterNodeTime) || []
      }

      return []
    }

    return nodes.filter((node) =>
      links.some((link) => link.source === selectedGroup.ref_id && link.target === node.ref_id),
    )
  }, [rootStoreData, selectedGroup])

  const clickHandler = (e: React.MouseEvent, node: Node) => {
    e.stopPropagation()

    handleNodeClick(node)
  }

  return (
    <mesh>
      <Html style={{ perspective: '500px' }}>
        {!selectedGroup ? (
          <StyledIconButtonRight color="primary" onClick={() => setActiveView('graph')}>
            <ChevronRightIcon />
          </StyledIconButtonRight>
        ) : null}

        <Wrapper
          onWheel={(e) => {
            e.stopPropagation()
          }}
        >
          {selectedGroup ? (
            <>
              <Heading align="flex-start" direction="row" justify="flex-start">
                <StyledIconButton color="primary" onClick={onClose}>
                  <ChevronLeftIcon />
                </StyledIconButton>
                <span>{selectedGroup.properties?.name}</span>
              </Heading>
            </>
          ) : null}
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
                onClick={(e) => clickHandler(e, node)}
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
  max-height: 400px;
  overflow: auto;
  transform-style: preserve-3d;
  transform: rotateY(25deg);
`

const StyledIconButton = styled(Flex)`
  color: white;
  font-size: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
  background-color: ${colors.DROPDOWN_BG};
  border-radius: 4px;
  margin-right: 4px;
`

const StyledIconButtonRight = styled(Flex)`
  color: white;
  font-size: 30px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`

const Heading = styled(Flex)`
  position: sticky;
  left: 20px;
  right: 4px;
`
