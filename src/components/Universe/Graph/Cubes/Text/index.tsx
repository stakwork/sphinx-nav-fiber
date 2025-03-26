/* eslint-disable no-bitwise */
import { Billboard, Svg } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect, useRef, useState } from 'react'
import { Group, Mesh, MeshBasicMaterial, Texture, TextureLoader, Vector3 } from 'three'
import { Icons } from '~/components/Icons'
import { useTraceUpdate } from '~/hooks/useTraceUpdate'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { generatePalette } from '~/utils/palleteGenerator'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { removeLeadingMentions } from '~/utils/removeLeadingMentions'
import { truncateText } from '~/utils/truncateText'
import { nodeBackground, nodeSize } from '../constants'
import { TextWithBackground } from './TextWithBackgound'

type Props = {
  node: NodeExtended
  color: string
  hide?: boolean
  ignoreDistance: boolean
  scale: number
}

const nodeMatchesFollowerFilter = (targetNode: NodeExtended, value: string | null): boolean => {
  if (!value) {
    return true
  }

  if (targetNode.node_type !== 'User') {
    return true
  }

  const followers = targetNode.properties?.followers

  if (followers === undefined) {
    return true
  }

  switch (value) {
    case 'lt_1000':
      return followers < 1000
    case '1000_10000':
      return followers >= 1000 && followers <= 10000
    case 'gt_10000':
      return followers > 10000
    default:
      return true
  }
}

export const TextNode = memo(
  (props: Props) => {
    const { node, hide, ignoreDistance, color, scale } = props
    const svgRef = useRef<Mesh | null>(null)
    const nodeRef = useRef<Mesh | null>(null)
    const nodePositionRef = useRef(new Vector3())
    const [texture, setTexture] = useState<Texture | null>(null)
    const backgroundRef = useRef<Group | null>(null)

    useTraceUpdate(props)

    const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)
    const keyProperty = getNodeKeysByType(node.node_type) || ''

    const sanitizedNodeName =
      keyProperty && node?.properties
        ? removeLeadingMentions(removeEmojis(String(node?.properties[keyProperty] || '')))
        : removeLeadingMentions(node.name || '')

    useEffect(() => {
      if (!node?.properties?.image_url) {
        return
      }

      const loader = new TextureLoader()

      loader.load(node.properties.image_url, setTexture, undefined, () =>
        console.error(`Failed to load texture: ${node?.properties?.image_url}`),
      )
    }, [node?.properties?.image_url])

    const secondaryColor = normalizedSchemasByType[node.node_type]?.secondary_color
    const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon
    const nodeColor = secondaryColor ?? color
    const Icon = primaryIcon ? Icons[primaryIcon] : null
    const iconName = Icon ? primaryIcon : 'NodesIcon'

    useFrame(({ camera }) => {
      if (!nodeRef.current || !backgroundRef.current) {
        return
      }

      const {
        selectedNode,
        hoveredNode,
        activeEdge,
        searchQuery,
        selectedNodeTypes,
        selectedLinkTypes,
        hoveredNodeSiblings,
        followersFilter,
      } = useGraphStore.getState()

      const { nodesNormalized } = useDataStore.getState()

      const selectedNodeNormalized = selectedNode ? nodesNormalized.get(selectedNode?.ref_id) : null

      const selectedNodeSiblings = selectedNodeNormalized
        ? [...(selectedNodeNormalized?.targets || []), ...(selectedNodeNormalized.sources || [])]
        : []

      const checkDistance = () => {
        const nodePosition = nodePositionRef.current.setFromMatrixPosition(nodeRef.current!.matrixWorld)

        if (nodeRef.current) {
          nodeRef.current.visible = ignoreDistance ? true : nodePosition.distanceTo(camera.position) < 1500
        }
      }

      if (searchQuery.length < 3 && !selectedNodeTypes.length && !selectedLinkTypes.length && !selectedNode) {
        checkDistance()
      } else {
        nodeRef.current.visible = false
      }

      const isHovered = node.ref_id === hoveredNode?.ref_id
      const isSelected = node.ref_id === selectedNode?.ref_id
      const isHoveredSibling = hoveredNodeSiblings.includes(node.ref_id)
      const isSelectedSibling = selectedNodeSiblings.includes(node.ref_id)

      const highlight = isHovered || isSelected || isHoveredSibling || isSelectedSibling

      if (highlight) {
        const bg = backgroundRef.current.getObjectByName('background') as Mesh

        if (bg) {
          ;(bg.material as THREE.MeshStandardMaterial).color.set(primaryColor || nodeBackground)
        }

        nodeRef.current.scale.set(scale * 1.1, scale * 1.1, scale * 1.1)
      } else {
        const bg = backgroundRef.current.getObjectByName('background') as Mesh

        if (bg) {
          ;(bg.material as THREE.MeshStandardMaterial).color.set(nodeBackground)
        }

        nodeRef.current.scale.set(scale, scale, scale)
      }

      const isActive =
        (highlight ||
          activeEdge?.target === node.ref_id ||
          activeEdge?.source === node.ref_id ||
          (searchQuery && sanitizedNodeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
          selectedNodeTypes.includes(node.node_type) ||
          node.edgeTypes?.some((i) => selectedLinkTypes.includes(i))) &&
        nodeMatchesFollowerFilter(node, followersFilter)

      if (isActive) {
        if (nodeRef.current && !nodeRef.current.visible) {
          nodeRef.current.visible = true
        }
      }
    })

    return (
      <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
        <mesh ref={nodeRef} name={node.ref_id} position={[0, 0, 1]} scale={scale} userData={node} visible={!hide}>
          {node?.properties?.image_url && texture ? (
            <>
              <planeGeometry args={[nodeSize - 2, nodeSize - 2]} />
              <meshBasicMaterial map={texture} />
            </>
          ) : (
            <Svg
              ref={svgRef}
              name="svg"
              onUpdate={(svg) => {
                svg.traverse((child) => {
                  if (child instanceof Mesh) {
                    // eslint-disable-next-line no-param-reassign
                    child.material = new MeshBasicMaterial({
                      color: generatePalette(nodeColor, 3, 10)[3],
                    })
                  }
                })
              }}
              position={[-nodeSize / 4, nodeSize / 4, 1]}
              src={`/svg-icons/${iconName}.svg`}
              userData={node}
            />
          )}

          {sanitizedNodeName && (
            <TextWithBackground ref={backgroundRef} id={node.ref_id} text={truncateText(sanitizedNodeName, 20)} />
          )}
        </mesh>
      </Billboard>
    )
  },
  (prevProps, nextProps) =>
    prevProps.hide === nextProps.hide &&
    prevProps.scale === nextProps.scale &&
    prevProps.ignoreDistance === nextProps.ignoreDistance &&
    prevProps.node.ref_id === nextProps.node.ref_id &&
    prevProps.scale === nextProps.scale,
)

TextNode.displayName = 'TextNode'
