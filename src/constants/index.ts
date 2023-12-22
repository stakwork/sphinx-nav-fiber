/* eslint-disable no-console */
import moment from 'moment'

const { origin, host } = window.location

moment.relativeTimeThreshold('h', 24)

moment.updateLocale('en', {
  relativeTime: {
    s: (number) => `${number} ${number > 1 ? 'seconds' : 'second'}`,
    m: '1 minute',
    h: (number) => `${number} ${number > 1 ? 'hours' : 'hour'}`,
    d: '1 day',
    M: '1 month',
  },
})

export const isDevelopment = !!(
  origin === 'http://localhost:3000' ||
  origin === 'http://localhost:3001' ||
  origin === 'https://sphinx-jarvis-david.sphinx1.repl.co'
)

const getUrlFormEnv = () => import.meta.env.VITE_APP_API_URL

export const API_URL = getUrlFormEnv() || apiUrlFromSwarmHost() || 'https://knowledge-graph.sphinx.chat'

export const isChileGraph = API_URL.includes('boltwall')

function apiUrlFromSwarmHost(): string | undefined {
  // for swarm deployments, always point to "boltwall"
  // for now, only if the URL contains "swarm"
  if (host.includes('swarm')) {
    if (host.startsWith('nav')) {
      const hostArray = host.split('.')

      hostArray[0] = 'boltwall'

      const finalHost = hostArray.join('.')
      const apiUrl = `https://${finalHost}`

      return apiUrl
    }
  }

  return undefined
}

export const AWS_IMAGE_BUCKET_URL = 'https://stakwork-uploads.s3.amazonaws.com/'
export const CLOUDFRONT_IMAGE_BUCKET_URL = 'https://d1gd7b7slyku8k.cloudfront.net/'

export const GRAPH_LINK_COLOR = '#ccc'
export const GRAPH_FOG_COLOR = 'blue'

export const GRAPH_GROUND_COLOR = 0xcccccc
export const GRAPH_LIGHT_INTENSITY = 0.8

export const BOOST_SUCCESS = 'Boosted successfully'
export const BOOST_ERROR_BUDGET = 'Boost failed, insufficient budget'

export const NODE_ADD_SUCCESS = 'Submitted!'
export const NODE_ADD_ERROR = 'Submission failed, please try again.'

export const DEFAULT = 'default'
export const DATE = 'date'
export const EDGES = 'edges'

type NodeRelativeHighlightColors = {
  nodeColor: string
  segmentColor: number
}

export const NODE_RELATIVE_HIGHLIGHT_COLORS: Record<string, NodeRelativeHighlightColors> = {
  children: {
    nodeColor: 'green',
    segmentColor: 0x3dff85,
  },
  guests: {
    nodeColor: 'purple',
    segmentColor: 0xdd50ff,
  },
  topics: {
    nodeColor: 'purple',
    segmentColor: 0x5078f2,
  },
  pathway: {
    nodeColor: '#ffffff',
    segmentColor: 0xffffff,
  },
}

export const LINK = 'link'
export const TWITTER_HANDLE = 'twitter_handle'
export const GITHUB_REPOSITORY = 'github_repository'
export const YOUTUBE_CHANNEL = 'youtube_channel'
export const WEB_PAGE = 'web_page'
export const RSS = 'rss'
export const TWITTER_SOURCE = 'tweet'
export const TOPIC = 'topic'
export const DOCUMENT = 'document'
export const AUDIO_VIDEO = 'audio_video';
export const isE2E = !!import.meta.env.VITE_APP_IS_E2E

export const requiredRule = {
  required: {
    message: 'The field is required',
    value: true,
  },
}
