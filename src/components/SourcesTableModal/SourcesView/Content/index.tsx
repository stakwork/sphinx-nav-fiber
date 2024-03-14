import styled from 'styled-components'
import { colors } from '~/utils/colors'
import { Table } from './Table'
import { Flex } from '~/components/common/Flex'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { getNodeContent, Node } from '~/network/fetchSourcesData'
import { Text } from '~/components/common/Text'
import { Heading } from '~/components/SourcesTableModal/SourcesView/common'

export const Content = () => {
  const [loading, setLoading] = useState(true)
  const [nodes, setNodes] = useState<Node[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNodeContent()

        setNodes(response.nodes)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)

        setLoading(false)
      }
    }

    fetchData()
  }, [])

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
