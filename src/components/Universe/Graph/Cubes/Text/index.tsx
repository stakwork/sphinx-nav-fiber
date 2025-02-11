/* eslint-disable no-bitwise */
import { Billboard, Svg } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { Icons } from '~/components/Icons'
import { useTraceUpdate } from '~/hooks/useTraceUpdate'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { generatePalette } from '~/utils/palleteGenerator'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { truncateText } from '~/utils/truncateText'
import { TextWithBackground } from './TextWithBackgound'

type Props = {
  node: NodeExtended
  color: string
  hide?: boolean
  ignoreDistance: boolean
  scale: number
}

export const TextNode = memo(
  (props: Props) => {
    const { node, hide, ignoreDistance, color, scale } = props

    console.log(scale)

    const svgRef = useRef<Mesh | null>(null)
    const nodeRef = useRef<Mesh | null>(null)

    useTraceUpdate(props)

    const nodePositionRef = useRef(new Vector3())

    const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)

    const keyProperty = getNodeKeysByType(node.node_type) || ''

    const sanitizedNodeName =
      keyProperty && node?.properties ? removeEmojis(String(node?.properties[keyProperty] || '')) : node.name || ''

    useFrame(({ camera }) => {
      if (!nodeRef.current) {
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
        selectedNodeSiblings,
      } = useGraphStore.getState()

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

      const isActive =
        node.ref_id === selectedNode?.ref_id ||
        node.ref_id === hoveredNode?.ref_id ||
        activeEdge?.target === node.ref_id ||
        activeEdge?.source === node.ref_id ||
        (searchQuery && sanitizedNodeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        selectedNodeTypes.includes(node.node_type) ||
        hoveredNodeSiblings.includes(node.ref_id) ||
        selectedNodeSiblings.includes(node.ref_id) ||
        node.edgeTypes?.some((i) => selectedLinkTypes.includes(i))

      if (isActive) {
        if (nodeRef.current && !nodeRef.current.visible) {
          nodeRef.current.visible = true
        }
      }
    })

    const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

    const nodeColor = primaryColor ?? color

    const Icon = primaryIcon ? Icons[primaryIcon] : null
    const iconName = Icon ? primaryIcon : 'NodesIcon'

    return (
      <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
        <mesh ref={nodeRef} name={node.ref_id} userData={node} visible={!hide}>
          <Svg
            ref={svgRef}
            name="svg"
            onUpdate={(svg) => {
              svg.traverse((child) => {
                if (child instanceof Mesh) {
                  const newColor = generatePalette(nodeColor, 3, 10)

                  // eslint-disable-next-line no-param-reassign
                  child.material = new MeshBasicMaterial({ color: newColor[0] })
                }
              })
            }}
            position={[-15 / 2, 15 / 2, 1]}
            scale={1}
            src={`/svg-icons/${iconName}.svg`}
            userData={node}
          />

          {sanitizedNodeName && <TextWithBackground text={truncateText(sanitizedNodeName, 20)} />}
        </mesh>
      </Billboard>
    )
  },
  (prevProps, nextProps) =>
    prevProps.hide === nextProps.hide &&
    prevProps.ignoreDistance === nextProps.ignoreDistance &&
    prevProps.node.ref_id === nextProps.node.ref_id,
)

TextNode.displayName = 'TextNode'

// test
