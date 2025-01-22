import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { ChevronRight } from '../Icon/ChevronRight'
import { VideoCard } from '../VideoCard'
import { isValidMediaUrl } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

const Nodes = [
  {
    date_added_to_graph: 1733218679.827695,
    node_type: 'Episode',
    properties: {
      date: 1731888000,
      episode_title: 'AI Agents and AI Assistants: A Contrast in Function',
      image_url: 'https://i.ytimg.com/vi/IivxYYkJ2DI/sddefault.jpg',
      media_url:
        'https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/62110bc0-6b27-4779-9d5e-320eab6fae84/IivxYYkJ2DI.mp3',
      source_link: 'https://www.youtube.com/watch?v=IivxYYkJ2DI',
      status: 'completed',
    },
    ref_id: 'b8784fb9-efa8-4a25-8a78-e14be96a4387',
  },
  {
    date_added_to_graph: 1733323898.765796,
    node_type: 'Episode',
    properties: {
      date: 1733184000,
      episode_title: 'Joe Rogan Experience #2237 - Mike Benz',
      image_url: 'https://i.ytimg.com/vi_webp/rrJhQpvlkLA/sddefault.webp',
      media_url:
        'https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/b4c6220e-7048-431c-80c4-90e56b71bd06/rrJhQpvlkLA.mp3',
      source_link: 'https://www.youtube.com/watch?v=rrJhQpvlkLA',
      status: 'completed',
    },
    ref_id: '2e51fdb8-a1f1-4e1f-b9d5-4dbdae00b1a2',
  },
  {
    date_added_to_graph: 1732635410.9931817,
    node_type: 'Episode',
    properties: {
      date: 1730851200,
      description: 'Exploring the Transformative Potential of Llama, the Open-Source AI Model',
      episode_title: "Llama: The Open-Source AI Model that's Changing How We Think About AI",
      image_url: 'https://i.ytimg.com/vi/8c2LnKNoSmg/sddefault.jpg',
      media_url:
        'https://s3.amazonaws.com/stakwork-uploads/uploads/customers/4291/media_to_local/a4542523-6b12-4baa-bce7-ed63f2704955/8c2LnKNoSmg.mp3',
      source_link: 'https://www.youtube.com/watch?v=8c2LnKNoSmg',
      status: 'completed',
    },
    ref_id: '87f5e4c5-39c2-4773-8208-8c1c4fe4019b',
  },
]

console.log(Nodes)

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
  const { setRunningProjectId } = useDataStore((s) => s)
  const { setSelectedEpisodeLink } = useMindsetStore((s) => s)
  const { setSchemas } = useSchemaStore((s) => s)

  const navigate = useNavigate()

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
          navigate(`/episode/${res.data.ref_id}`)
          setSelectedEpisodeLink(source)
        }

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      } catch (err: any) {
        let errorMessage = NODE_ADD_ERROR

        if (err?.status === 400) {
          const res = await err.json()

          errorMessage = res.errorCode || res?.status || NODE_ADD_ERROR

          if (res.data.ref_id) {
            navigate(`/episode/${res.data.ref_id}`)
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
        {Nodes.map((episode) => (
          <VideoCard
            key={episode?.ref_id}
            imageUrl={episode?.properties?.image_url || ''}
            onClick={() => handleSubmit(episode?.properties?.source_link)}
            subtitle=""
            title={episode?.properties?.episode_title || ''}
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
