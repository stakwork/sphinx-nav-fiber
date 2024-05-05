import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { useRete } from 'rete-react-plugin'
import styled from 'styled-components'
import { Lights } from '~/components/Universe/Lights'
import { Flex } from '~/components/common/Flex'
import { Schema } from '~/network/fetchSourcesData'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'
import { SchemaWithChildren } from '../types'
import { calculateNodePositions } from '../utils'
import { createEditor } from './Editor'
import { Lines } from './Links'
import { Nodes } from './Nodes'

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

export const Body = () => {
  const [selectedSchemaId, setSelectedSchemaId] = useState<string>('')
  const [ref] = useRete(createEditor)

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

  const schemasWithPositions = calculateNodePositions(schemasWithChildren)

  const linksFiltered = links.filter(
    (link) =>
      link.edge_type === 'CHILD_OF' &&
      schemasWithPositions.some((schema) => schema.ref_id === link.source || schema.ref_id === link.target),
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
    <Wrapper direction="row">
      <div className="graph">
        {false && (
          <Canvas camera={{ zoom: 80 }} id="schema-canvas" orthographic>
            <Lights />
            <Lines links={linksWithPositions} />
            <>
              <Nodes
                nodes={schemasWithPositions}
                selectedId={selectedSchemaId}
                setSelectedSchemaId={setSelectedSchemaId}
              />
            </>
          </Canvas>
        )}
      </div>
      <div className="editor">
        <div ref={ref} style={{ height: '100vh', width: '100vw' }} />
        <div />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 100%;
  justify-content: center;
  align-items: top;
  .graph {
    flex-grow: 1;
  }

  .editor {
    position: relative;
    width: 400px;
    padding: 16px;
    border-left: 1px solid ${colors.black};
  }
`
