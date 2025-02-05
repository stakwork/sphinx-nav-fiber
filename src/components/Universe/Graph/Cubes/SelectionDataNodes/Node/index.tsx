import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import clsx from 'clsx'
import { useRef } from 'react'
import styled from 'styled-components'
import { Mesh, Vector3 } from 'three'
import { Flex } from '~/components/common/Flex'
import { Icons } from '~/components/Icons'
import CloseIcon from '~/components/Icons/CloseIcon'
import EditIcon from '~/components/Icons/EditIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils'
import { truncateText } from '~/utils/truncateText'
import { PathNode } from '..'

type TagProps = {
  rounded: boolean
}

type Props = {
  node: PathNode
  rounded?: boolean
  selected: boolean
  onClick: (id: string) => void
  x: number
  y: number
  z: number
  id: string
}

type ButtonProps = {
  left: number
  backgroundColor?: string
  borderColor?: string
  fontColor?: string
}

export const Node = ({ onClick, node, selected, rounded = true, x, y, z, id }: Props) => {
  const nodeRef = useRef<Mesh | null>(null)
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const { open: openEditNodeNameModal } = useModal('editNodeName')
  const { open: createBountyModal } = useModal('createBounty')
  const selectedNode = useSelectedNode()

  const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)
  const targetPosition = new Vector3(x, y, z)

  useFrame(() => {
    if (nodeRef.current) {
      nodeRef.current.position.lerp(targetPosition, 0.05)
    }
  })

  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

  const Icon = primaryIcon ? Icons[primaryIcon] : null
  // const iconName = Icon ? primaryIcon : 'NodesIcon'
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  const title = node?.properties && keyProperty ? node?.properties[keyProperty] || '' : node.name || ''
  const titleShortened = title ? truncateText(title, 30) : ''
  const description = keyProperty !== 'description' ? node.properties?.description : ''
  const descriptionShortened = description ? truncateText(description, 60) : ''

  const isShowCreateTestButton = !!(selectedNode && selectedNode?.node_type?.toLowerCase() === 'function')

  return (
    <mesh ref={nodeRef}>
      <Html center sprite zIndexRange={[0, 0]}>
        <Wrapper align="center" direction="row" justify="flex-start">
          {selected ? (
            <Selected className={clsx({ 'has-padding': descriptionShortened })} rounded={false}>
              {isAdmin && (
                <EditButton onClick={() => openEditNodeNameModal()}>
                  <EditIcon />
                </EditButton>
              )}
              <CloseButton onClick={() => setSelectedNode(null)}>
                <CloseIcon />
              </CloseButton>

              <ContentWrapper align="center" direction="row" justify="flex-start">
                <Avatar
                  align="center"
                  height={48}
                  justify="center"
                  radius="50%"
                  src={node?.properties?.image_url || ''}
                  width={48}
                >
                  {!node?.properties?.image_url ? <span>{Icon ? <Icon /> : <NodesIcon />}</span> : null}
                </Avatar>

                <TextContent
                  align="flex-start"
                  direction="column"
                  hasDescription={!!descriptionShortened}
                  justify={descriptionShortened ? 'flex-start' : 'center'}
                >
                  <Title>{titleShortened}</Title>
                  {descriptionShortened && <Description>{descriptionShortened}</Description>}
                </TextContent>
              </ContentWrapper>

              {isShowCreateTestButton && (
                <CreateTestButton
                  left={2}
                  onClick={() => createBountyModal()}
                >
                  Generate Unit Test
                </CreateTestButton>
              )}
            </Selected>
          ) : (
            <>
              <Tag onClick={() => onClick(id)} rounded={rounded}>
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
          )}
        </Wrapper>
      </Html>
    </mesh>
  )
}

const Wrapper = styled(Flex)`
  background: black;
`

const Text = styled(Flex)`
  color: ${colors.white};
  margin-left: 16px;
  width: 100px;
`

const Tag = styled(Flex)<TagProps>`
  text-align: center;
  width: 48px;
  height: 48px;
  outline: 1px solid ${colors.white};
  outline-offset: 0px;
  background: ${colors.BG1};
  color: ${colors.white};
  border-radius: ${(p: TagProps) => `${p.rounded ? '50%' : '6px'}`};
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

const Selected = styled(Tag)`
  width: 210px;
  min-height: 80px;
  height: auto;
  position: relative;

  &.has-padding {
    padding: 0;
  }

  .selected__title {
    position: static;
    transform: none;
    margin: 0;
    text-align: left;
    width: auto;
  }
`

const IconButton = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #ffffff;
  font-size: 30px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
  position: absolute; /* Position relative to the parent */
`

const EditButton = styled(IconButton)`
  left: 150px;
  top: -14px;
  background: ${colors.white};
  color: ${colors.BG1};
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const CloseButton = styled(IconButton)`
  right: -10px;
  top: -15px;
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

const CreateTestButton = styled.div<ButtonProps>`
  position: absolute;
  top: 170px;
  left: ${(p: ButtonProps) => 30 + p.left}px;
  width: 140px;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.createTestButton};
  color: ${colors.black};
  font-size: 14px;
  font-family: Barlow;
  font-weight: 600;
  z-index: 1002;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`

const ContentWrapper = styled(Flex)`
  width: 100%;
  padding: 12px;
  gap: 8px;
  min-height: 48px;
`

type TextContentProps = {
  hasDescription: boolean
}

const TextContent = styled(Flex)<TextContentProps>`
  flex: 1;
  gap: 2px;
  margin-left: 4px;
  height: ${props => props.hasDescription ? 'auto' : '48px'};
`

const Title = styled.div`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 600;
  width: 100%;
`

const Description = styled.div`
  color: ${colors.white};
  font-size: 14px;
  opacity: 0.8;
  width: 100%;
`
