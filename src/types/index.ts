/* eslint-disable camelcase */
import { Mesh, Vector3 } from 'three'

type QueryData = {
  ref_id: string
  project_id?: string
}

export type FetchNodeParams = {
  word?: string
  skip_cache?: string
  free?: string
  media_type?: string
  force_regenerate?: boolean
}

export type Node = {
  boost?: number | null
  children?: string[]
  x: number
  y: number
  z: number
  edge_count: number
  hidden?: boolean
  colors?: string[]
  date?: number
  date_added_to_graph?: number
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
  ref_id: string
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
  properties?: { [key: string]: never | undefined }
  media_url?: string
  start?: number
  end?: number
  longitude?: number
  latitude?: number
  coordinates?: Coordinates
  audio?: Audio[]
  neighbourHood?: string
}

export type FetchDataResponse = {
  nodes: Node[]
  edges: Link[]
  query_data?: QueryData
}

export type FilterParams = {
  skip: number
  limit: number
  depth: string
  includeContent: string
  sort_by: string
  top_node_count: string
  include_properties: string
  node_type: string[]
  search_method: string
  free?: string
  word?: string // Add other optional filter properties as needed
}

export type TEdge = {
  node_type: string
  ref_id: string
  search_value: string
}

export type FetchSentimentResponse = {
  data: Sentiment[]
}

export type FetchRadarResponse = {
  data: Sources[]
}

export type FetchTopicResponse = {
  data: Topic[]
  totalCount: number
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
  node_type?: string
  node_data: {
    name?: string
    is_muted?: boolean
    topic?: string
    image_url?: string
  }
}

export type NodeEditRequest = {
  node_type: string
  ref_id: string
  properties: {
    [key: string]: unknown
  }
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
  fx?: number
  fy?: number
  fz?: number
  sources?: string[]
  targets?: string[]
  edgeTypes?: string[]
}

export type Link<T = string> = {
  index?: T extends string ? never : number
  start?: number
  end?: number
  source: T
  target: T
  color?: number
  ref_id: string
  sourceRef?: T
  targetRef?: T
  edge_type: string
  sourcePosition?: Vector3
  targetPosition?: Vector3
  onlyVisibleOnSelect?: boolean
  properties?: { [key: string]: unknown }
  attributes?: { [key: string]: unknown }
}

export type GraphData<T = string> = {
  links: Link<T>[]
  nodes: Node[]
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
  name: string
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
  name: string
  node_type: string
  ref_id: string
  is_muted: string
  edgeList: Array<string>
  edgeCount: number
  date_added_to_graph: string
}

export type TopicFilter = {
  search?: string
  is_muted: boolean
  sortBy: string
  page: number
  pageSize: number
}

export type SubmitErrRes = {
  error?: { message?: string }
  data: {
    ref_id: string
    project_id?: string
  }
}

export type IsAdminResponse = {
  data: {
    isAdmin: boolean
    isPublic: boolean
    isMember: boolean
    trendingTopics: boolean
    queuedSources: boolean
    customSchema: boolean
    realtimeGraph: boolean
    chatInterface: boolean
    chatSplashScreenAsDefault: boolean
    swarmUiUrl: string
    fastFilters: boolean
    title: string
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
  [key: string]: number
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

export type AiSummaryAnswerResponse = {
  question: string
  answer: string
  ref_id: string
}

export type AiSummarySourcesResponse = {
  question: string
  sources: { ref_id: string }[]
  ref_id: string
}

export type AiSummaryQuestionsResponse = {
  question: string
  relevant_questions: { question: string }[]
  ref_id: string
}

export type AIEntity = {
  question?: string
  answer?: string
  sources?: string[]
  questions?: string[]
  answerLoading?: boolean
  sourcesLoading?: boolean
  questionsLoading?: boolean
  hasBeenRendered?: boolean
  entities?: ExtractedEntity[]
  shouldRender?: boolean
  audio_en?: string
}

export interface ExtractedEntity {
  entity: string
  description: string
}

export interface ExtractedEntitiesResponse {
  ref_id: string
  question: string
  entities: ExtractedEntity[]
}

export type AiSummaryAudioResponse = {
  ref_id: string
  audio_EN: string
}

export type ActionDetail = {
  bounty: boolean
  display_name: string
  name: string
  workflow_id: string
}
