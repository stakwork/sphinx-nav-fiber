import { Button } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { DATE, DEFAULT, EDGES } from '~/constants'
import { getTopicsData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { FetchTopicResponse } from '~/types'
import { colors } from '~/utils/colors'
import { Heading } from '../common'
import { Filter } from './Filter'
import Table from './Table'

export const TopicSources = () => {
  const [loading, setLoading] = useState(true)
  const [showMuted, setShowMuted] = useState(false)
  const [topics, setTopics] = useDataStore((s) => [s.topics, s.setTopics])
  const [currentFilter, setCurrentFilter] = useState(DEFAULT)

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const mutedParam = showMuted ? 'True' : 'False'
        const data: FetchTopicResponse = await getTopicsData({ muted: mutedParam })

        setTopics(data.data)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [setTopics, showMuted])

  const sortedNodes = useMemo(() => {
    if (!topics) {
      return []
    }

    if (currentFilter === DEFAULT) {
      return topics
    }

    if (currentFilter === DATE) {
      return [...topics].sort((a, b) =>
        a.date_added_to_graph && b.date_added_to_graph ? a.date_added_to_graph - b.date_added_to_graph : 1,
      )
    }

    if (currentFilter === EDGES) {
      return [...topics].sort((a, b) => a.edgeCount - b.edgeCount)
    }

    return null
  }, [currentFilter, topics])

  return (
    <Wrapper direction="column" justify="flex-end">
      <Heading align="flex-start" justify="space-between">
        <Text className="title">Topics</Text>
      </Heading>

      <ActionsWrapper>
        <Button onClick={() => setShowMuted(!showMuted)} size="medium">
          {showMuted ? 'Show Unmuted' : 'Show Muted'}
          {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
        </Button>

        <Filter currentFilter={currentFilter} onChangeFilter={setCurrentFilter} />
      </ActionsWrapper>

      <TableWrapper align="center" justify={loading ? 'center' : 'flex-start'}>
        {loading ? <ClipLoader color={colors.white} /> : <Table data={sortedNodes || []} showMuted={showMuted} />}
      </TableWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1;

  .title {
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

const ActionsWrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  padding: 0 36px;
  margin-bottom: 32px;
`
