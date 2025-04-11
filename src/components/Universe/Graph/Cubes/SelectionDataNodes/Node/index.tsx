import Popover from '@mui/material/Popover'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Mesh, Vector3 } from 'three'
import { Flex } from '~/components/common/Flex'
import { Icons } from '~/components/Icons'
import CloseIcon from '~/components/Icons/CloseIcon'
import EditIcon from '~/components/Icons/EditIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { getActionDetails } from '~/network/actions'
import { useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useUserStore } from '~/stores/useUserStore'
import { ActionDetail } from '~/types'
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
  const { open: openNodeActionModal } = useModal('nodeAction')
  const selectedNode = useSelectedNode()
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [nodeActions, setNodeActions] = useState<ActionDetail[]>()
  const [loadingActions, setLoadingActions] = useState<boolean>(false)

  const { navigateToNode } = useNodeNavigation()

  const { normalizedSchemasByType, getNodeKeysByType, setSelectedActionDetail } = useSchemaStore((s) => s)
  const targetPosition = new Vector3(x, y, z)

  useFrame(() => {
    if (nodeRef.current) {
      nodeRef.current.position.lerp(targetPosition, 0.05)
    }
  })

  const handleClose = () => {
    setAnchorEl(null)
  }

  const actions = normalizedSchemasByType[node.node_type]?.action

  async function handleGetActionDetails(actionsDetail: string[]) {
    setNodeActions(undefined)
    setLoadingActions(true)

    try {
      const res = await getActionDetails(actionsDetail)

      setNodeActions(res.actions)

      setLoadingActions(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnclickActionButton = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLButtonElement)

    if (actions) {
      handleGetActionDetails(actions)
    }
  }

  const open = Boolean(anchorEl)

  const popoverId = open ? 'simple-popover' : undefined

  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

  const handleNodeAction = (action: ActionDetail) => {
    setSelectedActionDetail(action)
    openNodeActionModal()
    handleClose()
  }

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
          <>
            {selected ? (
              <Selected className={clsx({ 'has-padding': descriptionShortened })} rounded={false}>
                <PopoverWrapper
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  id={popoverId}
                  onClose={handleClose}
                  open={open}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  {loadingActions && (
                    <PopoverOption>
                      <ClipLoaderWrapper mb={10} mt={10}>
                        <ClipLoader color={colors.lightGray} size={25} />
                      </ClipLoaderWrapper>
                    </PopoverOption>
                  )}
                  {nodeActions?.map((action) => (
                    <PopoverOption
                      key={action.name}
                      data-testid={action.name}
                      onClick={() => {
                        handleNodeAction(action)
                      }}
                    >
                      {action.display_name}
                    </PopoverOption>
                  ))}
                </PopoverWrapper>
                {isAdmin && actions && (
                  <ActionButton onClick={(e) => handleOnclickActionButton(e)}>
                    <PlusIcon />
                  </ActionButton>
                )}
                {isAdmin && (
                  <EditButton onClick={() => openEditNodeNameModal()}>
                    <EditIcon />
                  </EditButton>
                )}
                <CloseButton onClick={() => navigateToNode(null)}>
                  <CloseIcon />
                </CloseButton>
                <div>
                  <Avatar
                    align="center"
                    height={!descriptionShortened ? 100 : 48}
                    justify="center"
                    radius="6px"
                    src={node?.properties?.image_url || ''}
                    width={!descriptionShortened ? 200 : 72}
                  >
                    {!node?.properties?.image_url ? <span>{Icon ? <Icon /> : <NodesIcon />}</span> : null}
                  </Avatar>
                </div>
                <Flex align="flex-start">
                  <Text className="selected__title">{titleShortened}</Text>
                  {descriptionShortened ? <Text>{descriptionShortened}</Text> : null}
                </Flex>

                {isShowCreateTestButton && (
                  <CreateTestButton
                    left={2}
                    onClick={() => {
                      createBountyModal()
                    }}
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
          </>
        </Wrapper>
      </Html>
    </mesh>
  )
}

const Wrapper = styled(Flex)`
  background: black;
`

const ClipLoaderWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 200px;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  font-family: Barlow;
  font-weight: 700;
  text-align: left;
  &.has-padding {
    padding: 12px;
  }

  .selected__title {
    position: absolute;
    bottom: -24px;
    font-size: 20px;
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(8px);
    margin-left: 0;
    text-align: center;
    width: 250px;
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
  left: 130px;
  top: -10px;
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
  top: -10px;
`

const ActionButton = styled(IconButton)`
  left: -10px;
  top: -10px;
  background: ${colors.white};
  color: ${colors.BG1};
  width: 1.5rem;
  height: 1.5rem;
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

const PopoverOption = styled(Flex).attrs({
  direction: 'row',
  px: 12,
  py: 8,
})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${colors.BUTTON1};
  color: ${colors.white};
  width: 100%;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }
`

const PopoverWrapper = styled(Popover)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
    background-color: transparent !important;
    margin: 2px;
  }
`
