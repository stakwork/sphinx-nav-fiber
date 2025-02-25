import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { ChevronRight } from '~/components/mindset/components/Icon/ChevronRight'
import { NODE_ADD_ERROR } from '~/constants'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { FetchDataResponse, Node, SubmitErrRes } from '~/types'
import { colors } from '~/utils/colors'
import { TweetCard } from '../TweetCard'
import { getNodes } from './fetchNodes'
import { isValidTweet } from './utils'

const HARDCODE = [
  {
    date_added_to_graph: 1739963879.991741,
    node_type: 'Tweet',
    properties: {
      bookmark_count: 5,
      date: 1739927020,
      image_url: 'https://pbs.twimg.com/profile_images/1740015728105832448/fRPNehGE_normal.png',
      impression_count: 2443,
      like_count: 18,
      name: 'Carlos E. Perez',
      quote_count: 2,
      reply_count: 6,
      retweet_count: 2,
      text: "Ok.  I'm very disappointed with Grok-3.  I'm sharing two chats, one with Grok-3 and the other with OpenAI o3-mini-high.  The quality is not even comparable! \n\nhttps://t.co/6eLOnxzQq1\n\nhttps://t.co/rLsPY1NOkp\n\nI'm unimpressed.",
      tweet_id: '1892017172488052944',
      twitter_handle: 'IntuitMachine',
      verified: false,
    },
    ref_id: '473a666e-fbb3-4c75-bd5a-36827fa15e31',
  },

  {
    date_added_to_graph: 1739792764.2058752,
    node_type: 'Tweet',
    properties: {
      date: 1739724676,
      image_url: 'https://pbs.twimg.com/profile_images/1656436683926302721/oLW2WgJx_normal.jpg',
      like_count: 15995,
      name: 'MatthewBerman',
      text: 'OpenAI just dropped a paper that reveals the blueprint for creating the best AI coder in the world.\n\nBut here’s the kicker: this strategy isn’t just for coding—it’s the clearest path to AGI and beyond.\n\nLet’s break it down 🧵👇 https://t.co/NJwbq4kxRs',
      tweet_id: '1891168478079623275',
      twitter_handle: 'MatthewBerman',
      verified: false,
    },
    ref_id: '695fa492-2005-4fff-9f4f-2c000cd84013',
  },
  {
    date_added_to_graph: 1739794929.4849584,
    node_type: 'Tweet',
    properties: {
      author: '1536000406303739906',
      bookmark_count: 0,
      date: 1739793519,
      impression_count: 13,
      like_count: 0,
      quote_count: 0,
      reply_count: 1,
      retweet_count: 0,
      text: "@IntuitMachine JEPA's efficiency is impressive, but are we sure wordcells can’t evolve into shaperotators? Future of AI could surprise us. Why limit our imaginations now?",
      tweet_id: '1891457228290293941',
    },
    ref_id: '8178332f-55ab-4ede-8554-5e12c2889481',
  },
]

console.log(HARDCODE)

export type FormData = {
  input: string
  inputType: string
  source: string
  longitude: string
  latitude: string
}

const filterAndSortEpisodes = (data: FetchDataResponse): Node[] =>
  data.nodes.filter((node) => node.node_type.toLowerCase() === 'tweet' && node.properties?.date).slice(0, 3)

const handleSubmitForm = async (data: FieldValues): Promise<SubmitErrRes> => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(twitter|x)\.com\/\w+\/status\/(\d+)/s
  const endPoint = 'add_node'

  const body: { [index: string]: unknown } = {}

  if (regex.test(data.source)) {
    const idRegex = /\/status\/(\d+)/

    const match = data.source.match(idRegex)

    if (match?.[1]) {
      const [, id] = match

      body.tweet_id = id
    }
  } else {
    body.tweet_id = data.source
  }

  body.content_type = 'tweet'

  const res: SubmitErrRes = await api.post(`/${endPoint}`, JSON.stringify(body))

  if (res.error) {
    const { message } = res.error

    throw new Error(message)
  }

  return res
}

export const TweetsLandingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [episodes, setEpisodes] = useState<Node[]>([])
  const [requestError, setRequestError] = useState<string>('')
  const { setRunningProjectId } = useDataStore((s) => s)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res: FetchDataResponse = await getNodes()

        const topTweets = filterAndSortEpisodes(res)

        setEpisodes((HARDCODE as unknown as Node[]) || topTweets)
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchLatest()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
    setError(value !== '' && !isValidTweet(value))
  }

  const handleSubmit = async (url?: string) => {
    const source = url || inputValue

    if (isValidTweet(source)) {
      try {
        const res = await handleSubmitForm({ source })

        if (res.data.project_id) {
          setRunningProjectId(res.data.project_id)
        }

        if (res.data.ref_id) {
          navigate(`/tweet/${res.data.ref_id}`)
        }

        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      } catch (err: any) {
        let errorMessage = NODE_ADD_ERROR

        if (err?.status === 400) {
          const res = await err.json()

          errorMessage = res.errorCode || res?.status || NODE_ADD_ERROR

          if (res.data.ref_id) {
            navigate(`/tweet/${res.data.ref_id}`)
          }
        } else if (err instanceof Error) {
          errorMessage = err.message
        }

        setRequestError(String(errorMessage))
      }
    }
  }

  const handleNavigateByCard = (id: string) => {
    if (id) {
      navigate(`/tweet/${id}`)
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
          placeholder="Paste tweet link"
          value={inputValue}
        />
        <IconWrapper error={error} onClick={!error ? () => handleSubmit() : undefined}>
          <ChevronRight />
        </IconWrapper>
      </InputWrapper>
      {requestError && <div>{requestError}</div>}

      <SeedQuestionsWrapper>
        {episodes.map((node) => (
          <TweetCard key={node?.ref_id} node={node} onClick={() => handleNavigateByCard(node?.ref_id || '')} />
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
