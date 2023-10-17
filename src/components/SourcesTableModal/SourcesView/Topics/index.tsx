import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Pill } from '~/components/common/Pill'
import { getTopicsData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { FetchTopicResponse } from '~/types'
import { colors } from '~/utils/colors'
import { Heading } from '../common'
import Table from './Table'

export const TopicSources = () => {
  const [loading, setLoading] = useState(true)
  const [showMuted, setShowMuted] = useState(false)
  const [topics, setTopics] = useDataStore((s) => [s.topics, s.setTopics])

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

  return (
    <Wrapper align="stretch" direction="column" justify="flex-end">
      <Heading align="flex-start" justify="space-between">
        <Text className="title">Topics</Text>
      </Heading>
      <Pill
        className="booster__pill"
        onClick={() => setShowMuted(!showMuted)}
        style={{ marginLeft: '30px', marginBottom: '10px', padding: '5px 10px 5px 10px', width: 'fit-content' }}
      >
        {loading ? (
          <ClipLoader color={colors.white} />
        ) : (
          <Flex align="center" direction="row" justify="center">
            <div style={{ fontSize: 10 }}>Show {showMuted ? 'Unmuted' : 'Muted'}</div>
          </Flex>
        )}
      </Pill>

      <TableWrapper align="center" justify={loading ? 'center' : 'flex-start'}>
        {loading ? <ClipLoader color={colors.white} /> : <Table data={topics} showMuted={showMuted} />}
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
