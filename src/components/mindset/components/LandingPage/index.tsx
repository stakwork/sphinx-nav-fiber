import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { FetchDataResponse, Node, SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { Header } from '../Header'
import { ChevronRight } from '../Icon/ChevronRight'
import { VideoCard } from '../VideoCard'
import { getNodes } from './fetchNodes'
import { isValidMediaUrl } from './utils'

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

const filterAndSortEpisodes = (data: FetchDataResponse): Node[] =>
  data.nodes
    .filter(
      (node) =>
        node.node_type.toLowerCase() === 'episode' && node.properties?.date && node.properties.status === 'completed',
    )
    .slice(0, 20)

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
  const [episodes, setEpisodes] = useState<Node[]>([])
  const [requestError, setRequestError] = useState<string>('')
  const { setRunningProjectId } = useDataStore((s) => s)
  const [sphinxEnabled, setSphinxEnabled] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res: FetchDataResponse = await getNodes()

        console.log('res', res)

        const topEpisodes = filterAndSortEpisodes(res)

        setEpisodes(topEpisodes)
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchLatest()
  }, [])

  useEffect(() => {
    const auth = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const sphinxEnable = await sphinx.enable()

        setSphinxEnabled(sphinxEnable)
      } catch (err) {
        console.error('Error enabling sphinx:', err)
      }
    }

    auth()
  }, [])

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
        }

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      } catch (err: any) {
        let errorMessage = NODE_ADD_ERROR

        if (err?.status === 400) {
          const res = await err.json()

          errorMessage = res.errorCode || res?.status || NODE_ADD_ERROR

          if (res.data.ref_id) {
            navigate(`/episode/${res.data.ref_id}`)
          }
        } else if (err instanceof Error) {
          errorMessage = err.message
        }

        setRequestError(String(errorMessage))
      }
    }
  }

  return (
    <>
      <Flex>
        <Header />
      </Flex>
      <Wrapper>
        <Title>Ideas have shapes</Title>
        {sphinxEnabled && (
          <>
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
          </>
        )}

        <SeedQuestionsWrapper>
          {episodes.map((episode) => (
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
    </>
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
  height: 437px;
  overflow: scroll;
  flex-wrap: wrap;
`
