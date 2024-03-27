import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { AddTypeModal } from '~/components/AddTypeModal'
import { Flex } from '~/components/common/Flex'
import { Schema, getSchemaAll } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { Table } from './Table'

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
    <TableWrapper align={loading ? 'center' : 'flex-start'} justify={loading ? 'center' : 'flex-start'} py={16}>
      {loading ? (
        <ClipLoader color={colors.white} />
      ) : (
        <>
          <Table schemas={schemaAll} />
        </>
      )}
      <AddTypeModal />
    </TableWrapper>
  )
}

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
