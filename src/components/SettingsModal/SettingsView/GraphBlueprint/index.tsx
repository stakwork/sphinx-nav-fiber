import React, { useEffect, useState } from 'react'
import { Table } from './Table'
import { Flex } from '~/components/common/Flex'
import { getSchemaAll, Schema } from '~/network/fetchSourcesData'
import { ClipLoader } from 'react-spinners'
import { colors } from '~/utils'
import styled from 'styled-components'

export const GraphBlueprint: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [schemaAll, setSchemaAll] = useState<Schema[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)

        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <TableWrapper align={loading ? 'center' : 'flex-start'} justify={loading ? 'center' : 'flex-start'}>
      {loading ? (
        <ClipLoader color={colors.white} />
      ) : (
        <>
          <Table schemas={schemaAll} />
        </>
      )}
    </TableWrapper>
  )
}

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
