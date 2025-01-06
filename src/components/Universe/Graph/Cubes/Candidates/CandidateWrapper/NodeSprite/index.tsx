import { Html } from '@react-three/drei'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Icons } from '~/components/Icons'
import NodesIcon from '~/components/Icons/NodesIcon'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { truncateText } from '~/utils/truncateText'

type Props = {
  node: NodeExtended
  isFixed: boolean
  isLast: boolean
}

export const NodeSprite = ({ node, isFixed, isLast }: Props) => {
  const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon
  const Icon = primaryIcon ? Icons[primaryIcon] : null
  const keyProperty = getNodeKeysByType(node.node_type) || ''
  const title = node?.properties ? node?.properties[keyProperty] : ''
  const titleShortened = title ? truncateText(title, 30) : ''

  useEffect(() => {
    if (wrapperRef.current && isFixed) {
      gsap.to(wrapperRef.current, {
        scale: 0.1, // Scale down the inner content
        duration: 1,
        ease: 'power3.out',
      })
    }
  }, [isFixed])

  return (
    <Html ref={wrapperRef} as="div" center className="sprite" sprite>
      {isLast || isFixed ? (
        <Wrapper align="center" justify="center">
          <>
            <Tag>
              <Avatar
                align="center"
                height={32}
                justify="center"
                radius="50%"
                src={node?.properties?.image_url || ''}
                width={32}
              >
                {!node?.properties?.image_url ? <span>{Icon ? <Icon /> : <NodesIcon />}</span> : null}
              </Avatar>
            </Tag>
            <Text>{titleShortened}</Text>
          </>
        </Wrapper>
      ) : null}
    </Html>
  )
}

const Wrapper = styled(Flex)`
  background: ${colors.gray100};
  padding: 8px;
  border-radius: 8px;
`

const Text = styled(Flex)`
  color: ${colors.white};
  width: 100px;
  text-align: center;
  margin-top: 8px;
`

const Tag = styled(Flex)`
  text-align: center;
  width: 48px;
  height: 48px;
  outline: 1px solid ${colors.white};
  outline-offset: 0px;
  background: ${colors.BG1};
  color: ${colors.white};
  border-radius: 50%;
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
  }
`

type AvatarProps = {
  src: string
  radius: string
  width: number
  height: number
}

const Avatar = styled(Flex)<AvatarProps>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ radius }) => `${radius}`};
  font-size: 20px;
`
