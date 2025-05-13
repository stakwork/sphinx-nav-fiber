import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Universe } from '~/components/Universe'
import { getPathway, getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useSchemaStore } from '~/stores/useSchemaStore'

export const TopicMindset = () => {
  const addNewNode = useDataStore((s) => s.addNewNode)
  const { setSchemas } = useSchemaStore((s) => s)

  const navigate = useNavigate()

  const { topicId } = useParams()

  useEffect(() => {
    const fetchSchemaData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemas(response.schemas.filter((schema) => !schema.is_deleted))
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchSchemaData()
  }, [setSchemas])

  useEffect(() => {
    const init = async (id: string) => {
      try {
        const data = await getPathway(id, ['Tweet', 'Person', 'User'], [], '', true, 0, 2, 800)

        addNewNode(data)
      } catch (error) {
        navigate('/')
        console.error(error)
      }
    }

    if (topicId) {
      init(topicId)
    }
  }, [addNewNode, navigate, topicId])

  return (
    <>
      <MainContainer>
        <ContentWrapper direction="row">
          <>
            <ContentContainer>
              <Flex basis="100%" grow={1} shrink={1}>
                <Universe />
              </Flex>
            </ContentContainer>
          </>
        </ContentWrapper>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const ContentWrapper = styled(Flex)`
  flex: 1;
  overflow: hidden;
`

const ContentContainer = styled(Flex)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`
