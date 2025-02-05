import clsx from 'clsx'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'

export const LinkTypes = () => {
  const linkTypes = useDataStore((s) => s.linkTypes)
  const setSelectedLinkTypes = useGraphStore((s) => s.setSelectedLinkTypes)
  const selectedLinkTypes = useGraphStore((s) => s.selectedLinkTypes)
  const resetSelectedLinkTypes = useGraphStore((s) => s.resetSelectedLinkTypes)

  function handleStatClick(type: string) {
    setSelectedLinkTypes(type)
  }

  return (
    <StatisticsWrapper>
      <Stat className={clsx({ isActive: !selectedLinkTypes.length })} onClick={() => resetSelectedLinkTypes()}>
        <div className="text">All Links</div>
      </Stat>
      {linkTypes.map((type: string) => (
        <Stat
          key={type}
          className={clsx({ isActive: selectedLinkTypes.includes(type) })}
          onClick={() => handleStatClick(type)}
        >
          <div className="text">{type}</div>
        </Stat>
      ))}
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
