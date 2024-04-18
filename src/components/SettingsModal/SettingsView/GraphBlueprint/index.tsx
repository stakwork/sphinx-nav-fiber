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
  const [selectedSchema, setSelectedSchema] = useState<Schema | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas.filter((i) => i.ref_id && !i.is_deleted))

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)

        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const onSchemaCreate = (schema: Schema) => {
    const exists = schemaAll.some((existingSchema) => existingSchema.type === schema.type)

    if (exists) {
      setSchemaAll(schemaAll.map((existingSchema) => (existingSchema.type === schema.type ? schema : existingSchema)))
    } else {
      setSchemaAll([...schemaAll, schema])
    }
  }

  const onSchemaDelete = (type: string) => {
    setSchemaAll(schemaAll.filter((i) => i.type !== type))
  }

  return (
    <>
      <TableWrapper align={loading ? 'center' : 'flex-start'} justify={loading ? 'center' : 'flex-start'} py={16}>
        {loading ? (
          <ClipLoader color={colors.white} />
        ) : (
          <>
            <Table schemas={schemaAll} setSelectedSchema={setSelectedSchema} />
          </>
        )}
      </TableWrapper>
      <AddTypeModal
        onClose={() => setSelectedSchema(null)}
        onDelete={onSchemaDelete}
        onSchemaCreate={onSchemaCreate}
        selectedSchema={selectedSchema}
      />
    </>
  )
}

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
