import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getRadarData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { FetchRadarResponse } from '~/types'
import { colors } from '~/utils/colors'
import { Heading, StyledPill } from '../common'
import { sourcesMapper } from '../constants'
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
        console.warn(error)
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
        <Text className="subtitle">
          This is a queue of pending sources waiting for approval or denial from graph users. If you think a source will
          provide good content for the graph, you can pay to approve it. Think of this as an investment: you pay to add
          it to the source table, and if the content is popular you will earn from it. If content is not relevant to the
          graph, you should deny it.
        </Text>
      </Heading>
      <Flex className="filters" direction="row" pb={16} px={36}>
        <StyledPill className={clsx({ selected: !typeFilter })} onClick={() => onFilterChange('')} size="small">
          All
        </StyledPill>
        {Object.keys(sourcesMapper).map((key: string) => (
          <StyledPill
            key={key}
            className={clsx({ selected: key === typeFilter })}
            onClick={() => onFilterChange(key)}
            size="small"
          >
            {sourcesMapper[key]}
          </StyledPill>
        ))}
      </Flex>
      <TableWrapper align="center" justify={loading ? 'center' : 'flex-start'}>
        {loading ? <ClipLoader color={colors.white} /> : <Table data={tableValues} />}
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1;

  .title {
    margin-bottom: 32px;
    font-size: 20px;
    color: ${colors.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${colors.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }
`

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
