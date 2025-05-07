import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { getRadarData } from '~/network/fetchSourcesData'
import { FetchDataResponse, FetchRadarResponse, Node } from '~/types'
import { colors } from '~/utils/colors'
import { getNodes } from './fetchNodes'
import { TopicCard } from './TopicCard'
import { TweetCard } from './TweetCard'

const HARDCODED_TOPICS = [
  {
    name: 'Black Rifle Coffee',
    refId: '0243606b-e09b-4ee6-a7be-e6faa1b3f3ae',
  },
]

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

const filterAndSortTweets = (data: FetchDataResponse): Node[] =>
  data.nodes
    .filter((node) => node.node_type.toLowerCase() === 'tweet' && node.properties?.status === 'completed')
    .sort((a, b) => {
      const aDate = Number(a.properties?.date) || 0
      const bDate = Number(b.properties?.date) || 0

      return bDate - aDate
    })

type Topic = {
  refId: string
  name: string
}

export const TweetsLandingPage = () => {
  const [episodes, setEpisodes] = useState<Node[]>([])
  const [topics, setTopics] = useState<Topic[]>([])
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res: FetchDataResponse = await getNodes()

        const topTweets = filterAndSortTweets(res)

        setEpisodes(topTweets.length ? topTweets : (HARDCODE as unknown as Node[]))
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchLatest()
  }, [])

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res: FetchRadarResponse = await getRadarData()

        const topicsData = res.data
          .filter((i) => i.source_type.toLowerCase() === 'topic')
          .map(({ ref_id: refId, source: name }) => ({
            refId,
            name,
          }))

        setTopics(HARDCODED_TOPICS || topicsData)
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchLatest()
  }, [])

  const handleSelectTweetCard = (id: string) => {
    const ids = selectedIds.includes(id) ? selectedIds.filter((i) => i !== id) : [...selectedIds, id]

    setSelectedIds(ids)
  }

  const handleNavigateByCard = () => {
    if (selectedIds.length) {
      const ids = selectedIds.join('&')

      navigate(`/tweet/${ids}`)
    }
  }

  const handleSelectTopicCard = (id: string) => {
    navigate(`/topic/${id}`)
  }

  return (
    <Wrapper>
      <Title>Ideas have shapes</Title>

      <TopicsWrapper>
        {topics.map((topic) => (
          <TopicCard key={topic?.refId} name={topic?.name} onClick={() => handleSelectTopicCard(topic?.refId || '')} />
        ))}
      </TopicsWrapper>
      <TweetsWrapper>
        {episodes.map((node) => (
          <TweetCard
            key={node?.ref_id}
            node={node}
            onClick={() => handleSelectTweetCard(node?.ref_id || '')}
            selected={selectedIds.some((i) => i === node.ref_id)}
          />
        ))}
      </TweetsWrapper>
      {selectedIds.length > 0 && <Button onClick={() => handleNavigateByCard()}>Show results</Button>}
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

const TweetsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 20px 0 20px;
  max-width: 648px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  max-height: calc(100vh - 300px); /* Adjust 200px based on other elements' heights */
`

const TopicsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 20px 0 20px;
  max-width: 648px;
  overflow-y: auto;
  padding: 20px 0;
  justify-content: flex-start;
  width: 100%;
`
