import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { AddEdgeNode } from '~/components/ModalsContainer/BlueprintModal/Body/AddEdgeNode'
import { Flex } from '~/components/common/Flex'
import { Schema, getSchemaAll } from '~/network/fetchSourcesData'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils'
import { SchemaWithChildren } from '../types'
import { Editor } from './Editor'
import { Graph } from './Graph'
import { Header } from './Header'
import { Toolbar } from './Toolbar'

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

interface EditorWrapperProps {
  hasSchema?: boolean
}

interface BodyProps {
  Close: () => void
}

export const Body = ({ Close }: BodyProps) => {
  const [selectedSchemaId, setSelectedSchemaId] = useState<string>('')
  const [isCreateNew, setIsCreateNew] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isAddEdgeNode, setIsAddEdgeNode] = useState(false)
  const [edgeData, setEdgeData] = useState({ refId: '', edgeType: '', source: '', target: '' })
  const [graphLoading, setGraphLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'all' | 'parent'>('all')

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

        const filteredSchemas = response.schemas.filter((i) => i.ref_id && !i.is_deleted)

        setSchemaAll(filteredSchemas.length > 0 ? filteredSchemas : response.schemas)

        setSchemaLinks(response.edges.length > 0 ? response.edges : [])

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

  const onSchemaUpdate = async () => {
    const response = await getSchemaAll()

    setSchemaAll(response.schemas.filter((i) => i.ref_id && !i.is_deleted && i.ref_id))

    setSchemaLinks(response.edges)
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
      schemasWithChildren.some((schema) => schema.ref_id === link.source) &&
      schemasWithChildren.some((schema) => schema.ref_id === link.target),
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedSchema = schemas.find((i) => i.ref_id === selectedSchemaId) || null

  if (loading) {
    return (
      <Flex align="center" basis="100%" grow={1} justify="center" shrink={1}>
        <ClipLoader color={colors.white} />
      </Flex>
    )
  }

  const filteredLinks =
    activeTab === 'all' ? linksFiltered : linksFiltered.filter((link) => link.edge_type === 'CHILD_OF')

  return (
    <>
      <Flex ml={-20} mr={-20} mt={-20}>
        <Header
          activeTab={activeTab}
          onClose={Close}
          onSchemaSelect={(schemaId) => {
            setSelectedSchemaId(schemaId)
          }}
          schemas={schemas}
          setActiveTab={setActiveTab}
        />
      </Flex>
      <Flex align="stretch" direction="row" grow={1}>
        <Flex mb={-20} ml={-20}>
          {selectedSchema || isCreateNew ? (
            <EditorWrapper hasSchema>
              <InnerEditorWrapper>
                <Editor
                  key={selectedSchema?.ref_id}
                  graphLoading={graphLoading}
                  onDelete={onSchemaDelete}
                  onSchemaCreate={onSchemaCreate}
                  onSchemaUpdate={onSchemaUpdate}
                  selectedSchema={selectedSchema}
                  setGraphLoading={setGraphLoading}
                  setIsCreateNew={setIsCreateNew}
                  setSelectedSchemaId={setSelectedSchemaId}
                />
              </InnerEditorWrapper>
            </EditorWrapper>
          ) : null}
        </Flex>
        <Flex>
          {isAddEdgeNode ? (
            <EditorWrapper>
              <InnerEditorWrapper>
                <AddEdgeNode
                  key={edgeData.refId}
                  edgeData={edgeData}
                  setGraphLoading={setGraphLoading}
                  setIsAddEdgeNode={setIsAddEdgeNode}
                />
              </InnerEditorWrapper>
            </EditorWrapper>
          ) : null}
        </Flex>
        <Flex>
          <Toolbar
            onAddEdgeNode={() => {
              setIsAddEdgeNode(true)
              setIsCreateNew(false)
              setSelectedSchemaId('')
              setEdgeData({ refId: '', edgeType: '', source: '', target: '' })
            }}
            onCreateNew={() => {
              setIsAddEdgeNode(false)
              setIsCreateNew(true)
              setSelectedSchemaId('')
            }}
          />
        </Flex>
        <Wrapper direction="row" grow={1}>
          <Container>
            {graphLoading ? (
              <Flex align="center" basis="100%" grow={1} justify="center" shrink={1}>
                <ClipLoader color={colors.white} />
              </Flex>
            ) : (
              <Graph
                links={filteredLinks}
                onEdgeClick={(refId, edgeType, source, target) => {
                  setEdgeData({ refId, edgeType, source, target })
                  setIsAddEdgeNode(true)
                  setIsCreateNew(false)
                  setSelectedSchemaId('')
                }}
                schemasWithPositions={schemasWithChildren}
                selectedSchemaId={selectedSchemaId}
                setIsAddEdgeNode={setIsAddEdgeNode}
                setSelectedSchemaId={setSelectedSchemaId}
              />
            )}
          </Container>
        </Wrapper>
      </Flex>
    </>
  )
}

const Wrapper = styled(Flex)`
  flex: 1 1 auto;
  justify-content: center;
  position: relative;
  overflow: hidden;
  max-height: calc(100vh - 20px);

  @media (max-width: 1440px) {
    max-height: calc(95vh - 20px);
  }

  @media (max-width: 1024px) {
    max-height: calc(70vh - 20px);
  }

  @media (max-width: 924px) {
    max-height: calc(70vh - 20px);
  }
`

const EditorWrapper = styled(Flex)<EditorWrapperProps>`
  width: 100%;
  max-width: 400px;
  background: ${colors.BG1};
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: ${({ hasSchema }) => (hasSchema ? '9px' : '0')};
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 300px;
  overflow: hidden;
  max-height: calc(100vh - 20px);

  @media (max-width: 1440px) {
    max-height: calc(95vh - 20px);
  }

  @media (max-width: 1024px) {
    max-height: calc(70vh - 20px);
  }

  @media (max-width: 924px) {
    max-height: calc(70vh - 20px);
  }
`

const InnerEditorWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 16px;
  max-height: calc(90vh - 20px);

  @media (max-width: 1440px) {
    max-height: calc(85vh - 20px);
  }

  @media (max-width: 1024px) {
    max-height: calc(65vh - 20px);
  }

  @media (max-width: 924px) {
    max-height: calc(65vh - 20px);
  }
`

const Container = styled(Flex)`
  flex: 1 1 100%;
`
