import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getRadarData } from '~/network/fetchGraphData'
import { FetchRadarResponse, Sources as SourcesType } from '~/types'
import { colors } from '~/utils/colors'
import { Pill } from '~/components/common/Pill'
import Table from './Table'
import { useDataStore } from '~/stores/useDataStore'

interface ISourceMap {
  [key: string]: string
}

type TPill = {
  selected: boolean
}

const sourcesMapper: ISourceMap = {
  topic: 'Topic',
  twitter_handle: 'Twitter Handle',
}

export const Sources = () => {
  const [typeFilter, setTypeFilter] = useState('')
  const [sources, setSources] = useDataStore((s) => [s.sources, s.setSources])

  useEffect(() => {
    const init = async () => {
      try {
        const data: FetchRadarResponse = await getRadarData()

        setSources(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    init()
  }, [setSources])

  const onFilterChange = (val: string) => {
    if (typeFilter === val || !val) {
      setTypeFilter('')
    } else {
      setTypeFilter(val)
    }
  }

  const tableValues = sources?.filter((val) => !typeFilter || val.source_type === typeFilter)

  return (
    <Wrapper align="flex-start" direction="column" justify="flex-end">
      <Text className="title">Sources for this Graph</Text>
      <Flex direction="row" pb={16}>
        <StyledPill onClick={() => onFilterChange('')} selected={!typeFilter}>
          All
        </StyledPill>
        {Object.keys(sourcesMapper).map((key: string) => (
          <StyledPill key={key} onClick={() => onFilterChange(key)} selected={key === typeFilter}>
            {sourcesMapper[key]}
          </StyledPill>
        ))}
      </Flex>
      <TableWrapper>
        <Table data={tableValues} />
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  border-radius: 8px;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;
  flex: 1;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`

const StyledPill = styled(Pill)<TPill>`
  cursor: pointer;
  background: ${(props) => (props.selected ? colors.white : 'transparent')};
  color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
  &:hover {
    color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
    background: ${(props) => (props.selected ? colors.white : 'transparent')};
    opacity: 0.8;
  }
`
