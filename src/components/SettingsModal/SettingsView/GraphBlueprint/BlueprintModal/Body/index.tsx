import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Schema } from '~/network/fetchSourcesData'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'
import { SchemaWithChildren } from '../types'
import { calculateNodePositionsTree } from '../utils'
import { Editor } from './Editor'
import { Graph } from './Graph'
import { Toolbar } from './Toolbar'

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

export const Body = () => {
  const [selectedSchemaId, setSelectedSchemaId] = useState<string>('')
  const [isCreateNew, setIsCreateNew] = useState(false)

  const [schemasNonFiltered, links, setSchemaAll] = useSchemaStore((s) => [s.schemas, s.links, s.setSchemas])

  const schemasWithDuplicates = schemasNonFiltered.filter((i) => i.ref_id && !i.is_deleted)

  const schemas: Schema[] = []

  schemasWithDuplicates.forEach((i) => {
    if (!schemas.some((j) => j.ref_id === i.ref_id)) {
      schemas.push(i)
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSchemaCreate = (schema: Schema) => {
    const exists = schemasNonFiltered.some((existingSchema) => existingSchema.ref_id === schema.ref_id)

    if (exists) {
      setSchemaAll(
        schemasNonFiltered.map((existingSchema) => (existingSchema.type === schema.type ? schema : existingSchema)),
      )
    } else {
      setSchemaAll([...schemasNonFiltered, schema])
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSchemaDelete = (type: string) => {
    setSchemaAll(schemasNonFiltered.filter((i) => i.type !== type))
  }

  const schemasWithChildren: SchemaWithChildren[] = schemas.map((schema) => ({
    ...schema,
    children: schemas
      .filter((childSchema) => childSchema.parent === schema.type)
      .map((childSchema) => childSchema.ref_id || ''),
  }))

  const schemasWithPositions = calculateNodePositionsTree(schemasWithChildren)

  const linksFiltered = links.filter(
    (link) =>
      link.edge_type === 'CHILD_OF' &&
      schemasWithPositions.some((schema) => schema.ref_id === link.source || schema.type === link.target),
  )

  const linksWithPositions = linksFiltered.map((link) => {
    const startNode = schemasWithPositions.find((schema) => schema.ref_id === link.source) || { x: 0, y: 0, z: 0 }
    const endNode = schemasWithPositions.find((schema) => schema.ref_id === link.target) || { x: 0, y: 0, z: 0 }

    return {
      ...link,
      start: { x: startNode.x, y: startNode.y, z: startNode.z },
      end: { x: endNode.x, y: endNode.y, z: endNode.z },
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedSchema = schemasNonFiltered.find((i) => i.ref_id === selectedSchemaId) || null

  return (
    <>
      <Flex direction="row" grow={1}>
        <Flex ml={-20} my={-20}>
          <Toolbar onCreateNew={() => setIsCreateNew(true)} />
        </Flex>
        <Wrapper direction="row" grow={1}>
          <div className="graph">
            <Graph
              linksWithPositions={linksWithPositions}
              schemasWithPositions={schemasWithPositions}
              selectedSchemaId={selectedSchemaId}
              setSelectedSchemaId={setSelectedSchemaId}
            />
          </div>
        </Wrapper>
      </Flex>
      {selectedSchema || isCreateNew ? (
        <EditorWrapper>
          <Editor
            onDelete={onSchemaDelete}
            onSchemaCreate={onSchemaCreate}
            selectedSchema={selectedSchema}
            setIsCreateNew={setIsCreateNew}
            setSelectedSchemaId={setSelectedSchemaId}
          />
        </EditorWrapper>
      ) : null}
    </>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 100%;
  justify-content: center;
  align-items: top;
  position: relative;
  .graph {
    flex-grow: 1;
  }
`

const EditorWrapper = styled(Flex)`
  width: 400px;
  background: ${colors.BG1};
  position: absolute;
  left: 64px;
  padding: 16px;
  border-left: 1px solid ${colors.black};
  bottom: 16px;
  top: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`
