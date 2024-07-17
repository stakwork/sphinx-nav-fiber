import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import Search from '~/components/SourcesTableModal/SourcesView/common/search'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { putNodeData } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { Heading } from '../common'
import { AddEdgeModal } from './AddEdgeTopicModal'
import { EditTopicModal } from './EditTopicModal'
import { MergeTopicModal } from './MergeTopicModal'
import { Table } from './Table'

export const TopicSources = () => {
  const [data, ids, total, setTopics, filters, setFilters, terminate, loading] = useTopicsStore((s) => [
    s.data,
    s.ids,
    s.total,
    s.setTopics,
    s.filters,
    s.setFilters,
    s.terminate,
    s.loading,
  ])

  const { open: openEditTopic } = useModal('editTopic')
  const { open: openMergeTopic } = useModal('mergeTopic')
  const { open: openAddEdge } = useModal('addEdge')
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
  const [multiSelectedTopics, setMultiSelectedTopics] = useState<Topic[]>([])
  const [checkedStates, setCheckedStates] = useState<{ [refId: string]: boolean }>({})

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
        await setTopics()
      } catch {
        console.error('err')
      }
    }

    init()
  }, [setTopics, filters])

  const handleLoadMore = async () => {
    setFilters({ page: filters.page + 1 })
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
    setMultiSelectedTopics([])
  }

  const handleMute = async (refId: string, action: string) => {
    try {
      await putNodeData(refId, { is_muted: action === 'mute' })
      useTopicsStore.setState({ ids: ids.filter((i) => i !== refId), total: total - 1 })
    } catch (error) {
      console.warn(error)
    }
  }

  const onTopicEdit = async (topicId: string, action: string) => {
    if (!data) {
      return
    }

    if (action === 'mergeTopic') {
      if (Object.values(checkedStates).filter((isChecked) => isChecked).length > 0) {
        const selectedTopics = Object.entries(checkedStates)
          .filter(([, isChecked]) => isChecked)
          .map(([id]) => data[id])

        setMultiSelectedTopics(selectedTopics)
        openMergeTopic()
      } else {
        setMultiSelectedTopics([data[topicId]])
        setSelectedTopic(data[topicId])
        openMergeTopic()
      }
    } else {
      if (['mute', 'unMute'].includes(action)) {
        await handleMute(topicId, action)
      }

      if (typeof topicActions[action] === 'function') {
        topicActions[action]()
      }

      setSelectedTopic(data[topicId])
    }
  }

  const handleSearch = (query: string) => {
    setFilters({ ...filters, search: query })
  }

  return (
    <>
      <Wrapper direction="column" justify="flex-end">
        <Heading align="flex-start" direction="row" justify="space-between">
          <Text className="title">Topics</Text>
        </Heading>

        <InputWrapper data-testid="topic-search-container">
          <Search
            activeIcon={<ClearIcon />}
            defaultIcon={<SearchIcon />}
            loading={loading}
            loadingIcon={<ClipLoader color={colors.lightGray} size={24} />}
            onSearch={handleSearch}
            placeholder="Search ..."
          />
        </InputWrapper>

        <TableWrapper align="center" justify={loading && !data ? 'center' : 'flex-start'}>
          {loading && !data ? (
            <ClipLoader color={colors.white} />
          ) : (
            <>
              <Table
                checkedStates={checkedStates}
                onChangeFilter={handleFilterChange}
                onTopicEdit={onTopicEdit}
                setCheckedStates={setCheckedStates}
                setShowMuteUnmute={() => setFilters({ is_muted: !filters.is_muted })}
                showMuted={filters.is_muted}
              />
              {total > ids.length ? (
                <Button className="load-more" disabled={loading} onClick={handleLoadMore}>
                  Load more
                  {loading && <ClipLoader color={colors.lightGray} size={10} />}
                </Button>
              ) : null}
            </>
          )}
        </TableWrapper>
      </Wrapper>

      {multiSelectedTopics.length > 0 && (
        <MergeTopicModal multiTopics={multiSelectedTopics} onClose={modalCloseHandler} />
      )}
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

const InputWrapper = styled(Flex)`
  margin: 0 0 16px 36px;
`
