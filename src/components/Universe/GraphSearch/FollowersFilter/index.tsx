import clsx from 'clsx'
import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils'

const followerRanges = [
  { label: '< 1000', value: 'lt_1000' },
  { label: '1000 - 10,000', value: '1000_10000' },
  { label: '> 10,000', value: 'gt_10000' },
]

export const FollowersFilter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [followersFilter, setFollowersFilter] = useGraphStore((s) => [s.followersFilter, s.setFollowersFilter])

  const handleSelect = (value: string | null) => {
    setFollowersFilter(value)
    setIsOpen(false)
  }

  return (
    <StatisticsWrapper>
      <AttributesButton className={clsx({ isActive: !followersFilter })} onClick={() => handleSelect(null)}>
        Attributes
      </AttributesButton>
      <FilterWrapper>
        <FilterButton className={clsx({ isActive: followersFilter })} onClick={() => setIsOpen(!isOpen)}>
          <FilterLabel>
            {followersFilter ? followerRanges.find((f) => f.value === followersFilter)?.label : 'FOLLOWERS'}
          </FilterLabel>
          <Arrow isOpen={isOpen}>▼</Arrow>
        </FilterButton>
        {isOpen && (
          <DropdownContent>
            {followerRanges.map((filter) => (
              <DropdownItem
                key={filter.value}
                onClick={() => handleSelect(filter.value)}
                selected={followersFilter === filter.value}
              >
                {filter.label}
              </DropdownItem>
            ))}
          </DropdownContent>
        )}
      </FilterWrapper>
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
  padding: 7px 8px;
`

const AttributesButton = styled.button`
  padding: 6px 10px 6px 8px;
  color: ${colors.white};
  background: ${colors.BG1};
  border: none;
  border-radius: 200px;
  cursor: pointer;
  font-family: Barlow;
  font-size: 13px;
  justify-self: start;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.78px;
  line-height: 15px;
  transition: background 0.2s ease;

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
`

const FilterLabel = styled.span`
  font-size: 13px;
`

const FilterWrapper = styled(Flex)`
  position: relative;
`

const FilterButton = styled.button`
  padding: 6px 10px 6px 8px;
  background: ${colors.BG1};
  border: none;
  border-radius: 200px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease;
  font-size: 13px;
  font-style: normal;
  font-family: Barlow;
  font-weight: 500;
  letter-spacing: 0.78px;
  line-height: 15px;

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
`

const Arrow = styled.span<{ isOpen: boolean }>`
  margin-left: 8px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.2s ease;
`

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: ${colors.BG1};
  border-radius: 8px;
  min-width: 150px;
  z-index: 100;
`

const DropdownItem = styled.div<{ selected?: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? colors.primaryBlue : '#fff')};

  &:hover {
    background: ${colors.BG3};
  }
`
