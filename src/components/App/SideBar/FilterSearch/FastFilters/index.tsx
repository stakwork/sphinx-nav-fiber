import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'
import { PopoverBody } from '..'

type Props = {
  handleFastFiltersSelect: (types: string[]) => void
}

const FAST_FILTERS: { [key: string]: string[] } = {
  Monitoring: ['Bugevent', 'Trace', 'Application', 'Report', 'Stacktrace'],
}

export const FastFilters = ({ handleFastFiltersSelect }: Props) => {
  const [selected, setSelected] = useState('')

  const handleSelection = (filter: string) => {
    if (selected === filter) {
      handleFastFiltersSelect([])
      setSelected('')

      return
    }

    if (FAST_FILTERS[filter]) {
      handleFastFiltersSelect(FAST_FILTERS[filter])
      setSelected(filter)
    }
  }

  return (
    <>
      <PopoverHeader>
        <div>Favorites</div>
      </PopoverHeader>
      <PopoverBody>
        <SchemaTypeWrapper>
          {Object.keys(FAST_FILTERS).map((filter) => (
            <SchemaType key={filter} isSelected={filter === selected} onClick={() => handleSelection(filter)}>
              {filter}
            </SchemaType>
          ))}
        </SchemaTypeWrapper>
      </PopoverBody>
    </>
  )
}

const PopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`

const SchemaTypeWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`

const SchemaType = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? colors.black : colors.white)};
  background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 3px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  }

  &:active {
    background: ${colors.white};
    color: ${colors.black};
  }
`
