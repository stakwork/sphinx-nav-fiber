/* eslint-disable no-bitwise */
import { Billboard, Svg } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useEffect, useRef, useState } from 'react'
import { Mesh, MeshBasicMaterial, Texture, TextureLoader, Vector3 } from 'three'
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
    const svgRef = useRef<Mesh | null>(null)
    const nodeRef = useRef<Mesh | null>(null)
    const nodePositionRef = useRef(new Vector3())
    const [texture, setTexture] = useState<Texture | null>(null)

    useTraceUpdate(props)

    console.log(scale)

    const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)
    const keyProperty = getNodeKeysByType(node.node_type) || ''

    const sanitizedNodeName =
      keyProperty && node?.properties ? removeEmojis(String(node?.properties[keyProperty] || '')) : node.name || ''

    useEffect(() => {
      if (!node?.properties?.image_url) {
        return
      }

      const loader = new TextureLoader()

      loader.load(node.properties.image_url, setTexture, undefined, () =>
        console.error(`Failed to load texture: ${node?.properties?.image_url}`),
      )
    }, [node?.properties?.image_url])

    useFrame(({ camera }) => {
      if (!nodeRef.current) {
        return
      }

      const state = useGraphStore.getState()

      const nodePosition = nodePositionRef.current.setFromMatrixPosition(nodeRef.current.matrixWorld)

      nodeRef.current.visible = ignoreDistance || nodePosition.distanceTo(camera.position) < 1500

      const isActive =
        [
          state.selectedNode?.ref_id,
          state.hoveredNode?.ref_id,
          state.activeEdge?.target,
          state.activeEdge?.source,
          ...state.selectedNodeTypes,
          ...state.hoveredNodeSiblings,
          ...state.selectedNodeSiblings,
          ...state.selectedLinkTypes,
        ].includes(node.ref_id) || sanitizedNodeName.toLowerCase().includes(state.searchQuery.toLowerCase())

      if (isActive) {
        nodeRef.current.visible = true
      }
    })

    const secondaryColor = normalizedSchemasByType[node.node_type]?.secondary_color
    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon
    const nodeColor = secondaryColor ?? color
    const Icon = primaryIcon ? Icons[primaryIcon] : null
    const iconName = Icon ? primaryIcon : ''

    return (
      <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
        {node?.properties?.image_url && texture ? (
          <mesh ref={nodeRef} name={node.ref_id} userData={node} visible={!hide}>
            <planeGeometry args={[15, 15]} />
            <meshBasicMaterial map={texture} />
            {sanitizedNodeName && <TextWithBackground id={node.ref_id} text={truncateText(sanitizedNodeName, 20)} />}
          </mesh>
        ) : (
          <mesh ref={nodeRef} name={node.ref_id} userData={node} visible={!hide}>
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
              position={[-7.5, 7.5, 1]}
              scale={1}
              src={`/svg-icons/${iconName}.svg`}
              userData={node}
            />
            {sanitizedNodeName && <TextWithBackground id={node.ref_id} text={truncateText(sanitizedNodeName, 20)} />}
          </mesh>
        )}
      </Billboard>
    )
  },
  (prevProps, nextProps) =>
    prevProps.hide === nextProps.hide &&
    prevProps.ignoreDistance === nextProps.ignoreDistance &&
    prevProps.node.ref_id === nextProps.node.ref_id,
)

TextNode.displayName = 'TextNode'
