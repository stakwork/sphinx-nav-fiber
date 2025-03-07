import React from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

const splitIntoColumns = (items: string[]): string[][] => {
  const maxItemsPerColumn = 8
  const maxColumns = 3

  if (items.length <= maxItemsPerColumn) {
    return [items]
  }

  if (items.length <= maxItemsPerColumn * 2) {
    const half = Math.ceil(items.length / 2)

    return [items.slice(0, half), items.slice(half)]
  }

  const itemsPerColumn = Math.ceil(items.length / maxColumns)

  return [
    items.slice(0, itemsPerColumn),
    items.slice(itemsPerColumn, itemsPerColumn * 2),
    items.slice(itemsPerColumn * 2),
  ]
}

type FilterGroupProps = {
  title: string
  types: string[]
  selectedTypes: string[]
  onTypeClick: (type: string) => void
  onResetClick: () => void
  getColor?: (type: string) => string
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  types,
  selectedTypes,
  onTypeClick,
  onResetClick,
  getColor = () => '#ffffff',
}) => {
  const columns = splitIntoColumns(types)
  const needsSeveralColumns = columns.length > 1

  return (
    <FilterColumn>
      <FilterList needMultipleColumns={needsSeveralColumns}>
        <FilterItem isActive={!selectedTypes.length} onClick={onResetClick}>
          <RadioButton isActive={!selectedTypes.length} />
          <FilterText isActive={!selectedTypes.length}>All {title}</FilterText>
        </FilterItem>
        <FilterSubSection multipleColumns={needsSeveralColumns}>
          {columns.map((column, index) => (
            <SubSectionColumn key={column[index]}>
              {column.map((type: string) => (
                <FilterItem key={type} isActive={selectedTypes.includes(type)} onClick={() => onTypeClick(type)}>
                  <RadioButton color={getColor(type)} isActive={selectedTypes.includes(type)} />
                  <FilterText isActive={selectedTypes.includes(type)}>{type}</FilterText>
                </FilterItem>
              ))}
            </SubSectionColumn>
          ))}
        </FilterSubSection>
      </FilterList>
    </FilterColumn>
  )
}

const FilterSubSection = styled(Flex)<{ multipleColumns: boolean }>`
  display: flex;
  flex-direction: ${({ multipleColumns }) => (multipleColumns ? 'row' : 'column')};
  gap: ${({ multipleColumns }) => (multipleColumns ? '40px' : '0')};
`

const SubSectionColumn = styled.div`
  max-width: 420px;
  min-width: 120px;
`

const FilterColumn = styled(Flex)`
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid black;
  padding: 0px 16px 0px 16px;

  &:last-child {
    border: none;
  }
`

const FilterList = styled(Flex)<{ needMultipleColumns?: boolean }>`
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
  max-height: 300px;
  overflow-y: auto;
`

const FilterItem = styled(Flex)<{ isActive: boolean }>`
  flex-direction: row;
  align-items: center;
  align-self: start;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease;

  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const FilterText = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#BAC1C6' : '#6B7A8D')};
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};
  font-family: Barlow;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
`

const RadioButton = styled.div<{ isActive: boolean; color?: string }>`
  width: 12px;
  height: 12px;
  background: ${({ isActive, color }) => (isActive ? color || colors.white : '#303342')};
  border-radius: 50%;
  margin-right: 8px;
  transition: all 0.3s ease;
`
