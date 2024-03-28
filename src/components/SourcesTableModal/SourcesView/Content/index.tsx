/* eslint-disable no-nested-ternary */
import { Button } from '@mui/base'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Heading } from '~/components/SourcesTableModal/SourcesView/common'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Node, getNodeContent } from '~/network/fetchSourcesData'
import { colors } from '~/utils/colors'
import { Table } from './Table'

export const Content = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [loading, setLoading] = useState(true)
  const [loadLimit, setLoadLimit] = useState(10)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [newNodesAvailable, setNewNodesAvailable] = useState(true)

  const viewContentParams = {
    only_content: 'true',
    sort_by: 'date',
    limit: loadLimit.toString(),
  }

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await getNodeContent(viewContentParams)

      setNodes(response.nodes)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)

      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadLimit])

  const handleLoadMore = () => {
    setLoadLimit(loadLimit + 10)
    fetchData()
  }

  return (
    <Wrapper direction="column" justify="flex-end">
      <Heading align="center" direction="row" justify="space-between">
        <Text className="title">Content I&apos;ve added to the graph</Text>
      </Heading>
      <TableWrapper align="center" justify={loading ? 'center' : 'flex-start'}>
        {loading ? (
          <ClipLoader color={colors.white} />
        ) : (
          <>
            <Table nodes={nodes} />
          </>
        )}
        {!loading ? (
          newNodesAvailable ? (
            <SButton onClick={handleLoadMore} size="medium">
              Load More
            </SButton>
          ) : (
            <NoNewNodesMessage>No new nodes available</NoNewNodesMessage>
          )
        ) : null}
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

const SButton = styled(Button)`
  margin-top: 10px;
  background-color: #2a2c38;
  color: white;
  border: none;
  outline: none;
  border-radius: 20px;
  font-size: 14px;
  font-family: Barlow;
  padding: 7px;
  width: 120px;
  text-align: center;
  padding-bottom: 10px;
`

const NoNewNodesMessage = styled.div`
  margin-top: 10px;
  color: ${colors.GRAY3};
  font-family: Barlow;
  font-size: 14px;
`
