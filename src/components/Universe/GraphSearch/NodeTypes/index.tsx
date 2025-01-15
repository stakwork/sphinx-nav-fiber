import clsx from 'clsx'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Icons } from '~/components/Icons'
import NodesIcon from '~/components/Icons/NodesIcon'
import { useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'

export const NodeTypes = () => {
  const { normalizedSchemasByType } = useSchemaStore((s) => s)
  const nodeTypes = useNodeTypes()
  const setSelectedNodeTypes = useGraphStore((s) => s.setSelectedNodeTypes)
  const selectedNodeTypes = useGraphStore((s) => s.selectedNodeTypes)
  const resetSelectedNodeTypes = useGraphStore((s) => s.resetSelectedNodeTypes)

  function handleStatClick(type: string) {
    setSelectedNodeTypes(type)
  }

  return (
    <StatisticsWrapper>
      <Stat className={clsx({ isActive: !selectedNodeTypes.length })} onClick={() => resetSelectedNodeTypes()}>
        <div className="text">All Nodes</div>
      </Stat>
      {nodeTypes.map((type: string) => {
        const primaryIcon = normalizedSchemasByType[type]?.icon
        const Icon = Icons[primaryIcon as string] || NodesIcon

        return (
          <Stat
            key={type}
            className={clsx({ isActive: selectedNodeTypes.includes(type) })}
            onClick={() => handleStatClick(type)}
          >
            <div className="icon">
              <Icon />
            </div>
            <div className="text">{type}</div>
          </Stat>
        )
      })}
    </StatisticsWrapper>
  )
}

const StatisticsWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  flex: 1 1 100%;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
`

const Stat = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})`
  color: ${colors.white};
  background: ${colors.BG1};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  border-radius: 200px;
  cursor: pointer;

  &.isActive {
    background: ${colors.white};
    color: ${colors.BG1};

    &:hover {
      background: ${colors.white};
      color: ${colors.BG1};
    }
  }

  &:hover {
    background: ${colors.BUTTON1_PRESS};
  }

  &:active {
    background: ${colors.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`
