import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { Lights } from '~/components/Universe/Lights'
import { Flex } from '~/components/common/Flex'
import { Schema } from '~/network/fetchSourcesData'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { calculateNodePositions } from '../utils'
import { Lines } from './Links'
import { Nodes } from './Nodes'
import { SchemaWithChildren } from '../types'

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

type Props = {
  onSchemaCreate: (schema: { type: string; parent: string }) => void
  selectedSchema: Schema | null
  onDelete: (type: string) => void
}

export const Body = ({ onSchemaCreate, selectedSchema, onDelete }: Props) => {
  console.log(onSchemaCreate, selectedSchema, onDelete)

  const [schemasNonFiltered, links] = useSchemaStore((s) => [s.schemas, s.links])

  const schemasWithDuplicates = schemasNonFiltered.filter((i) => i.ref_id && !i.is_deleted)

  const schemas: Schema[] = []

  schemasWithDuplicates.forEach((i) => {
    if (!schemas.some((j) => j.ref_id === i.ref_id)) {
      schemas.push(i)
    }
  })

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

  return (
    <Wrapper>
      <Canvas camera={{ zoom: 80 }} id="schema-canvas" orthographic>
        <Lights />
        <Lines links={linksWithPositions} />
        <>
          <Nodes nodes={schemasWithPositions} />
        </>
      </Canvas>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;
`
