import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { AddTypeModal } from '~/components/AddTypeModal'
import { Flex } from '~/components/common/Flex'
import { Schema, getSchemaAll } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'
import { BlueprintModal } from './BlueprintModal'
import { Table } from './Table'

export const GraphBlueprint: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [schemaAll, setSchemaAll] = useSchemaStore((s) => [s.schemas, s.setSchemas])
  const [selectedSchema, setSelectedSchema] = useState<Schema | null>(null)
  const { open } = useModal('blueprintGraph')

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
  }, [setSchemaAll])

  const onSchemaCreate = (schema: Schema) => {
    setSchemaAll([...schemaAll, schema])
  }

  const onSchemaDelete = (type: string) => {
    setSchemaAll(schemaAll.filter((i) => i.type !== type))
  }

  return (
    <>
      <TableWrapper align={loading ? 'center' : 'flex-start'} justify={loading ? 'center' : 'flex-start'} py={16}>
        <Button onClick={open}>showGraph</Button>
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
      <BlueprintModal
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
