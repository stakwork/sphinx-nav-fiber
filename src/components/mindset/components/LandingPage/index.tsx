import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { getNodes, getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { ChevronRight } from '../Icon/ChevronRight'
import { isValidMediaUrl } from './utils'
import { VideoCard } from '../VideoCard'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

interface EpisodeProperties {
  date: number
  episode_title: string
  image_url: string
  media_url: string
  pubkey: string
  source_link: string
  status: string
}

interface Node {
  node_type: string
  properties?: EpisodeProperties
}

export interface ApiResponse {
  edges: never[]
  nodes: Node[]
}

const handleSubmitForm = async (data: FieldValues): Promise<SubmitErrRes> => {
  const endPoint = 'add_node'

  const body: { [index: string]: unknown } = {}

  body.media_url = data.source
  body.content_type = 'audio_video'

  const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body))

  if (res.error) {
    const { message } = res.error

    throw new Error(message)
  }

  return res
}

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [requestError, setRequestError] = useState<string>('')
  const [episodes, setEpisodes] = useState<EpisodeProperties[]>([])
  const { setRunningProjectId } = useDataStore((s) => s)
  const { setSelectedEpisodeId, setSelectedEpisodeLink } = useMindsetStore((s) => s)
  const { setSchemas } = useSchemaStore((s) => s)

  const filterAndSortEpisodes = (data: ApiResponse): EpisodeProperties[] =>
    data.nodes
      .filter((node) => node.node_type.toLowerCase() === 'episode' && node.properties?.date)
      .map((node) => node.properties!)
      .sort((a, b) => b.date - a.date)
      .slice(0, 3)

  useEffect(() => {
    const fetchSchemaData = async () => {
      try {
        const res: ApiResponse = await getNodes()

        const topEpisodes = filterAndSortEpisodes(res)

        setEpisodes(topEpisodes)

        const response = await getSchemaAll()

        setSchemas(response.schemas.filter((schema) => !schema.is_deleted))
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchSchemaData()
  }, [setSchemas])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
    setError(value !== '' && !isValidMediaUrl(value))
  }

  const handleSubmit = async (url?: string) => {
    const source = url || inputValue

    if (isValidMediaUrl(source)) {
      try {
        const res = await handleSubmitForm({ source })

        if (res.data.project_id) {
          setRunningProjectId(res.data.project_id)
        }

        if (res.data.ref_id) {
          setSelectedEpisodeId(res.data.ref_id)
          setSelectedEpisodeLink(source)
        }

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      } catch (err: any) {
        let errorMessage = NODE_ADD_ERROR

        if (err?.status === 400) {
          const res = await err.json()

          errorMessage = res.errorCode || res?.status || NODE_ADD_ERROR

          if (res.data.ref_id) {
            setSelectedEpisodeId(res.data.ref_id)
            setSelectedEpisodeLink(source)
          }
        } else if (err instanceof Error) {
          errorMessage = err.message
        }

        setRequestError(String(errorMessage))
      }
    }
  }

  return (
    <Wrapper>
      <Title>Ideas have shapes</Title>
      <InputWrapper>
        <Input
          error={error}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Paste podcast or video link"
          value={inputValue}
        />
        <IconWrapper error={error} onClick={!error ? () => handleSubmit() : undefined}>
          <ChevronRight />
        </IconWrapper>
      </InputWrapper>
      {requestError && <div>{requestError}</div>}
      <SeedQuestionsWrapper>
        {episodes.map((episode) => (
          <VideoCard
            key={episode?.episode_title}
            imageUrl={(episode?.image_url as string) || ''}
            onClick={() => handleSubmit(episode?.source_link)}
            subtitle="Subtitle for episode seed"
            title={(episode?.episode_title as string) || ''}
          />
        ))}
      </SeedQuestionsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  background: #16161de3;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-family: 'Barlow';
  z-index: 40;
`

const Title = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  max-width: 648px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.error ? 'red' : colors.DIVIDER_4)};
  background: ${colors.INPUT_BG};
  color: ${colors.white};
  font-family: Barlow;
  font-size: 16px;
  &::placeholder {
    color: ${colors.INPUT_PLACEHOLDER};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? 'red' : colors.primaryBlue)};
  }
`

const InputWrapper = styled.div`
  position: relative;
  width: 648px;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div<{ error?: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.white};
  font-size: 20px;
  cursor: ${(props) => (props.error ? 'not-allowed' : 'pointer')};
  svg {
    width: 8px;
    height: 17px;
    color: ${colors.GRAY6};
  }
`

const SeedQuestionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  max-width: 648px;
  height: 237px;
`
