import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Schema, getSchemaAll } from '~/network/fetchSourcesData'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'
import { SchemaWithChildren } from '../types'
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
  const [loading, setLoading] = useState(false)

  const [schemas, links, setSchemaAll, setSchemaLinks] = useSchemaStore((s) => [
    s.schemas,
    s.links,
    s.setSchemas,
    s.setSchemaLinks,
  ])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas.filter((i) => i.ref_id && !i.is_deleted && i.ref_id))

        setSchemaLinks(response.edges)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)

        setLoading(false)
      }
    }

    fetchData()
  }, [setSchemaAll, setSchemaLinks])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSchemaCreate = (schema: Schema) => {
    const exists = schemas.some((existingSchema) => existingSchema.ref_id === schema.ref_id)

    if (exists) {
      setSchemaAll(
        schemas.map((existingSchema) =>
          existingSchema.ref_id === schema.ref_id ? { ...schema, children: [] } : existingSchema,
        ),
      )
    } else {
      setSchemaAll([...schemas, { ...schema, children: [] }])

      const parentSchema = schemas.find((sch) => schema.parent === sch.type)

      setSchemaLinks([
        ...links,
        {
          ref_id: `new-link-${links.length}`,
          edge_type: 'CHILD_OF',
          source: schema.ref_id || 'new',
          target: parentSchema?.ref_id || 'new',
        },
      ])
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSchemaDelete = (type: string) => {
    setSchemaAll(schemas.filter((i) => i.type !== type))
  }

  const schemasWithChildren: SchemaWithChildren[] = schemas.map((schema) => ({
    ...schema,
    children: schemas
      .filter((childSchema) => childSchema.parent === schema.type)
      .map((childSchema) => childSchema.ref_id || ''),
  }))

  const linksFiltered = links.filter(
    (link) =>
      link.edge_type === 'CHILD_OF' &&
      schemasWithChildren.some((schema) => schema.ref_id === link.source) &&
      schemasWithChildren.some((schema) => schema.ref_id === link.target),
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedSchema = schemas.find((i) => i.ref_id === selectedSchemaId) || null

  if (loading) {
    return <Flex>Loading</Flex>
  }

  return (
    <>
      <Flex align="stretch" direction="row" grow={1}>
        <Flex ml={-20} my={-20}>
          <Toolbar onCreateNew={() => setIsCreateNew(true)} />
        </Flex>
        <Flex>
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
        </Flex>
        <Wrapper direction="row" grow={1}>
          <Container>
            <Graph
              links={linksFiltered}
              schemasWithPositions={schemasWithChildren}
              selectedSchemaId={selectedSchemaId}
              setSelectedSchemaId={setSelectedSchemaId}
            />
          </Container>
        </Wrapper>
      </Flex>
    </>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 100%;
  justify-content: center;
  position: relative;
`

const EditorWrapper = styled(Flex)`
  width: 400px;
  background: ${colors.BG1};
  padding: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  flex-grow: 1;
`

const Container = styled(Flex)`
  flex: 1 1 100%;
`
