/* eslint-disable camelcase */
import { Mesh, Vector3 } from 'three'

export type FetchDataResponse = {
  data_series?: { title: string }
  exact: Node[]
  related: Node[]
}

export type TEdge = {
  node_type: string
  ref_id: string
  search_value: string
}

export type FetchTrendingResponse = Trending[]

export type FetchSentimentResponse = {
  data: Sentiment[]
}

export type FetchRadarResponse = {
  data: Sources[]
}

export type FetchTopicResponse = {
  data: Topic[]
  topicCount: number
}

export type FetchEdgeTypesResponse = {
  data: { edge_types: string[] }
  status: string
}

export type FetchEdgesResponse = {
  data: TEdge[]
  status: string
}

export type RadarRequest = {
  source: string
  source_type: string
}

export type NodeRequest = {
  muted_topic?: boolean
  topic?: string
  image_url?: string
}

export type Node = {
  boost?: number | null
  children?: string[]
  x: number
  y: number
  z: number
  hidden?: boolean
  colors?: string[]
  date?: number
  description?: string
  episode_title?: string
  hosts?: Guests[]
  guests?: (null | string | Guests)[]
  id?: string
  image_url?: string
  sender_pic?: string
  sender_alias?: string
  message_content?: string
  keyword?: boolean
  label: string
  source_link?: string
  link?: string
  name: string
  node_type: string
  ref_id?: string
  scale?: number
  show_title?: string
  text?: string
  timestamp?: string
  topics?: string[]
  type?: string
  weight?: number
  tweet_id?: string
  posted_by?: PostedBy
  twitter_handle?: string
  profile_picture?: string
  verified?: boolean
  unique_id?: string
  properties?: { [key: string]: never }
}

export type DataSeriesNode = {
  id: string
  image_url?: string
  keyword?: boolean
  label: string
  link?: string
  name: string
  node_type: string
  ref_id: string
  scale?: number
  show_title?: string
  text?: string
  timestamp?: string
  topics?: string[]
  type?: string
  weight?: number
}

type Coordinates = {
  lng: number
  lat: number
}

type Audio = {
  link: string
  language: string
}

export type NodeExtended = Node & {
  x?: number
  y?: number
  z?: number
  longitude?: number
  latitude?: number
  coordinates?: Coordinates
  audio?: Audio[]
}

export type Link<T = string> = {
  index?: T extends string ? never : number
  source: T
  target: T
  color?: number
  sourceRef?: T
  targetRef?: T
  sourcePosition?: Vector3
  targetPosition?: Vector3
  onlyVisibleOnSelect?: boolean
}

export type GraphData<T = string> = {
  links: Link<T>[]
  nodes: NodeExtended[]
}

export class NodeMesh extends Mesh {
  __data?: NodeExtended
}

export type Guests = {
  name: string
  ref_id: string
  profile_picture: string
  twitter_handle: string
}

export const nodeTypes = ['clip', 'episode', 'guest', 'show', 'topic', 'data_series', 'tweet'] as const

export type NodeType = (typeof nodeTypes)[number]

export type Type = 'twitter' | 'youtube' | 'guest' | 'podcast' | 'tweet' | 'data_series' | 'twitter_space'

export type Sentiment = {
  date: number
  date_added_to_graph: number
  sentiment_score: number
}

export type Trending = {
  count: number
  topic: string
  tldr?: string
  tldr_topic?: string | null
  audio_EN?: string
}

export type Sources = {
  source_type: string
  source: string
  ref_id: string
}

export type Topic = {
  topic: string
  node_type: string
  ref_id: string
  muted_topic: string
  edgeList: Array<string>
  edgeCount: number
  date_added_to_graph: string
}

export type TopicFilter = {
  search?: string
  muted: boolean
  sortBy: string
  page: number
  pageSize: number
}

export type SubmitErrRes = {
  error?: { message?: string }
  data: {
    ref_id: string
  }
}

export type AuthRequest = {
  message: string
  signature: string
}

export type IsAdminResponse = {
  data: {
    isAdmin: boolean
    isPublic: boolean
    isMember: boolean
    trendingTopics: boolean
    queuedSources: boolean
    customSchema: boolean
  }
  success: boolean
  message: string
}

type PostedBy = {
  name: string
  ref_id: string
  twitter_handle: string
}

export type BuyLsatRequest = {
  amount: number
}
export type BalanceResponse = {
  success: boolean
  balance: number
}

export type TStats = {
  numAudio?: string
  numContributors?: string
  numDaily?: string
  numEpisodes?: string
  numNodes?: string
  numTwitterSpace?: string
  numVideo?: string
  numDocuments?: string
}

export type RelayUser = {
  alias: string
  pubkey: string
  ip: string
  external_ip: string
  authToken: string
  transportToken: string
  contact_key: string
  privkey: string
  exported_keys: string
  pin: string
  proxy_ip?: string
  admin_token?: string
  routeHint?: string
}
