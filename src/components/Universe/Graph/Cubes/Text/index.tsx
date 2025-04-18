import { Billboard, Svg } from '@react-three/drei'
import { memo, useEffect, useRef, useState } from 'react'
import { Group, Mesh, MeshBasicMaterial, Texture, TextureLoader } from 'three'
import { Icons } from '~/components/Icons'
import { useTraceUpdate } from '~/hooks/useTraceUpdate'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { removeLeadingMentions } from '~/utils/removeLeadingMentions'
import { truncateText } from '~/utils/truncateText'
import { NodeCircleGeometry, nodeSize } from '../constants'
import { TextWithBackground } from './TextWithBackgound'

type Props = {
  node: NodeExtended
  hide?: boolean
  scale: number
}

export const TextNode = memo(
  (props: Props) => {
    const { node, hide, scale } = props
    const svgRef = useRef<Mesh | null>(null)
    const nodeRef = useRef<Mesh | null>(null)
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

    const primaryIcon = normalizedSchemasByType[node.node_type]?.icon
    const Icon = primaryIcon ? Icons[primaryIcon] : null
    const iconName = Icon ? primaryIcon : 'NodesIcon'

    return (
      <Billboard follow lockX={false} lockY={false} lockZ={false} name="billboard" userData={node}>
        <mesh ref={nodeRef} name={node.ref_id} position={[0, 0, 1]} scale={scale} userData={node} visible={!hide}>
          {node?.properties?.image_url && texture ? (
            <>
              <mesh geometry={NodeCircleGeometry}>
                <meshBasicMaterial map={texture} />
              </mesh>
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
    prevProps.node.ref_id === nextProps.node.ref_id &&
    prevProps.scale === nextProps.scale,
)

TextNode.displayName = 'TextNode'
