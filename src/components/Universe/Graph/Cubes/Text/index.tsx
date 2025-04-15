/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-bitwise */
import { Billboard, Svg } from '@react-three/drei'
import { memo, useEffect, useRef, useState } from 'react'
import { Group, Mesh, MeshBasicMaterial, Texture, TextureLoader, Vector3 } from 'three'
import { Icons } from '~/components/Icons'
import { useTraceUpdate } from '~/hooks/useTraceUpdate'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { removeLeadingMentions } from '~/utils/removeLeadingMentions'
import { truncateText } from '~/utils/truncateText'
import { nodeSize } from '../constants'
import { TextWithBackground } from './TextWithBackgound'

type Props = {
  node: NodeExtended
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
    const { node, hide, ignoreDistance, scale } = props
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

    const primaryColor = normalizedSchemasByType[node.node_type]?.primary_color
    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon
    const Icon = primaryIcon ? Icons[primaryIcon] : null
    const iconName = Icon ? primaryIcon : 'NodesIcon'

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
                      color: 'rgba(255, 255, 255, 0.5)',
                    })
                  }
                })
              }}
              position={[-nodeSize / 4, nodeSize / 4, 1]}
              scale={nodeSize / 30}
              src={`/svg-icons/${iconName}.svg`}
              userData={node}
            />
          )}

          {sanitizedNodeName && (
            <TextWithBackground ref={backgroundRef} id={node.ref_id} text={truncateText(sanitizedNodeName, 150)} />
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
