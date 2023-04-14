import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Pill } from '~/components/common/Pill'
import { Text } from '~/components/common/Text'
import { getRadarData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { FetchRadarResponse } from '~/types'
import { colors } from '~/utils/colors'
import { sourcesMapper } from '../constants'
import { TPill } from '../types'
import Table from './Table'

export const QueuedSources = () => {
  const [loading, setLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState('')
  const [sources, setSources] = useDataStore((s) => [s.queuedSources, s.setQueuedSources])

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const data: FetchRadarResponse = await getRadarData({ approved: 'False' })

        setSources(data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
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
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="flex-start" justify="space-between">
        <Text className="title">Queued Sources</Text>
        <Text kind="tiny">
          This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will
          provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add
          it to the source table, and if the content is popular you will earn from it. If content is not relevant to the
          graph, you should deny it.
        </Text>
      </Heading>
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
      <TableWrapper align="center" justify="flex-start">
        {loading ? <ClipLoader /> : <Table data={tableValues} />}
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
  font-size: 12px;
  padding: 4px 8px;
  background: ${(props) => (props.selected ? colors.white : 'transparent')};
  color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
  &:hover {
    color: ${(props) => (props.selected ? colors.headerBackground : colors.white)};
    background: ${(props) => (props.selected ? colors.white : 'transparent')};
    opacity: 0.8;
  }
`

const Heading = styled(Flex)`
  margin-bottom: 16px;
  ${Text} {
    margin-bottom: 0;
  }
`
