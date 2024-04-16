import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { Heading } from '../common'
import { AddEdgeModal } from './AddEdgeTopicModal'
import { EditTopicModal } from './EditTopicModal'
import { MergeTopicModal } from './MergeTopicModal'
import { Search } from './Search'
import { Filter } from './Sort'
import { Table } from './Table'

export const TopicSources = () => {
  const [loading, setLoading] = useState(false)

  const [data, ids, total, setTopics, filters, setFilters, terminate] = useTopicsStore((s) => [
    s.data,
    s.ids,
    s.total,
    s.setTopics,
    s.filters,
    s.setFilters,
    s.terminate,
  ])

  const { open: openEditTopic } = useModal('editTopic')
  const { open: openMergeTopic } = useModal('mergeTopic')
  const { open: openAddEdge } = useModal('addEdge')
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  const topicActions: Record<string, () => void> = {
    editTopic: openEditTopic,
    mergeTopic: openMergeTopic,
    addEdge: openAddEdge,
  }

  const topicsIdRef = useRef<string[]>([])

  useEffect(() => {
    if (ids.length) {
      topicsIdRef.current = ids
    }
  }, [ids])

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)
        await setTopics()
      } catch {
        console.error('err')
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [setTopics, filters])

  const handleLoadMore = async () => {
    try {
      setLoading(true)
      setFilters({ page: filters.page + 1 })
    } catch (error) {
      console.error('Error loading more data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(
    () => () => {
      terminate()
    },
    [terminate],
  )

  const handleFilterChange = (filter: string) => {
    setFilters({ sortBy: filter })
  }

  const modalCloseHandler = () => {
    setSelectedTopic(null)
  }

  const onTopicEdit = (topicId: string, action: string) => {
    if (!data) {
      return
    }

    setSelectedTopic(data[topicId])

    if (typeof topicActions[action] === 'function') {
      topicActions[action]()
    }
  }

  return (
    <>
      <Wrapper direction="column" justify="flex-end">
        <Heading align="flex-start" direction="row" justify="space-between">
          <Text className="title">Topics</Text>
          <Button disabled={loading} onClick={() => setFilters({ is_muted: !filters.is_muted })} size="medium">
            {filters.is_muted ? 'Show Unmuted' : 'Show Muted'}
            {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
          </Button>
        </Heading>

        <ActionsWrapper>
          <Search />

          <Filter currentFilter={filters.sortBy} onChangeFilter={handleFilterChange} />
        </ActionsWrapper>

        <TableWrapper align="center" justify={loading && !data ? 'center' : 'flex-start'}>
          {loading && !data ? (
            <ClipLoader color={colors.white} />
          ) : (
            <>
              <Table onTopicEdit={onTopicEdit} showMuted={filters.is_muted} />
              {total > ids.length ? (
                <Button className="load-more" disabled={loading} onClick={handleLoadMore}>
                  Load more
                  {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
                </Button>
              ) : null}
            </>
          )}
        </TableWrapper>
      </Wrapper>

      {selectedTopic && <MergeTopicModal onClose={modalCloseHandler} topic={selectedTopic} />}
      {selectedTopic && <EditTopicModal onClose={modalCloseHandler} topic={selectedTopic} />}
      {selectedTopic && <AddEdgeModal onClose={modalCloseHandler} topic={selectedTopic} />}
    </>
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

  .load-more {
    margin: 8px auto;
    align-self: center;
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
