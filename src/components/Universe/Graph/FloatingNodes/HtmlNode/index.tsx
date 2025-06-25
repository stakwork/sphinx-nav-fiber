import { Billboard, Html } from '@react-three/drei'
import gsap from 'gsap'
import { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Icons } from '~/components/Icons'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { removeEmojis } from '~/utils/removeEmojisFromText'
import { removeLeadingMentions } from '~/utils/removeLeadingMentions'
import { nodeSize } from '../../Cubes/constants'

const NodeSize = nodeSize * 3

export const HtmlNode = ({ node }: { node: NodeExtended }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [currentDistance, setCurrentDistance] = useState(1000)

  const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  useLayoutEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        x: node.x,
        y: node.y,
        z: node.z,
        duration: 1,
        ease: 'power3.out',
      })

      const distanceProxy = { value: currentDistance }

      gsap.to(distanceProxy, {
        value: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          setCurrentDistance(distanceProxy.value)
        },
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node.x, node.y, node.z])

  const sanitizedNodeName =
    keyProperty && node?.properties
      ? removeLeadingMentions(removeEmojis(String(node?.properties[keyProperty] || '')))
      : removeLeadingMentions(node.name || '')

  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon
  const Icon = primaryIcon ? Icons[primaryIcon] : null

  const secondaryColor = normalizedSchemasByType[node.node_type]?.secondary_color
  const color = secondaryColor || colors.white

  return currentDistance > 300 ? (
    <mesh key={node.ref_id} ref={meshRef} visible={false}>
      <Billboard>
        <Html distanceFactor={currentDistance} transform visible={false}>
          <Wrapper>
            <IconWrapper className="icon" color={color}>
              {Icon && <Icon />}
            </IconWrapper>
            <div className="content">
              <span>{sanitizedNodeName}</span>
            </div>
          </Wrapper>
        </Html>
      </Billboard>
    </mesh>
  ) : null
}

const Wrapper = styled(Flex)`
  width: ${NodeSize * 3}px;
  height: ${NodeSize}px;
  background: #23252f;
  border-radius: ${NodeSize}px;
  color: white;
  flex-direction: row;

  .content {
    height: ${NodeSize}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    font-size: 12px;
    white-space: nowrap;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    min-width: 0;

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      width: 100%;
    }
  }
`

const IconWrapper = styled(Flex)<{ color: string }>`
  width: ${NodeSize}px;
  height: ${NodeSize}px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
