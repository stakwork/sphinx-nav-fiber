import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Icons } from '~/components/Icons'
import CloseIcon from '~/components/Icons/CloseIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'
import { truncateText } from '~/utils/truncateText'

type TagProps = {
  rounded: boolean
}

type Props = {
  node: NodeExtended
  rounded?: boolean
  selected: boolean
  onClick: () => void
}

export const Node = ({ onClick, node, selected, rounded = true }: Props) => {
  const { normalizedSchemasByType, getNodeKeysByType } = useSchemaStore((s) => s)
  const setSelectedNode = useGraphStore((s) => s.setSelectedNode)

  const primaryIcon = normalizedSchemasByType[node.node_type]?.icon

  const Icon = primaryIcon ? Icons[primaryIcon] : null
  // const iconName = Icon ? primaryIcon : 'NodesIcon'
  const keyProperty = getNodeKeysByType(node.node_type) || ''

  const title = node?.properties ? node?.properties[keyProperty] : ''
  const titleShortened = title ? truncateText(title, 30) : ''

  return (
    <Wrapper align="center" direction="row" justify="flex-start">
      <>
        {selected ? (
          <Selected rounded={false}>
            <IconButton onClick={() => setSelectedNode(null)}>
              <CloseIcon />
            </IconButton>
            <div>{Icon ? <Icon /> : <NodesIcon />}</div>
            <Text>{titleShortened}</Text>
          </Selected>
        ) : (
          <>
            <Tag onClick={onClick} rounded={rounded}>
              <div>{Icon ? <Icon /> : <NodesIcon />}</div>
            </Tag>
            <Text>{titleShortened}</Text>
          </>
        )}
      </>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)``

const Text = styled(Flex)`
  color: ${colors.white};
  margin-left: 16px;
  font-weight: 700;
  width: 100px;
  font-size: 16px;
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
  font-size: 24px;
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
  align-items: center;
`

const IconButton = styled(Flex)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #ffffff;
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
`
