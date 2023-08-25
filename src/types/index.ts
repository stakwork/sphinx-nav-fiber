/* eslint-disable camelcase */
import { Mesh, Vector3 } from 'three'

export type FetchDataResponse = {
  data_series?: { title: string }
  exact: Node[]
  related: Node[]
}

export type FetchSentimentResponse = {
  data: Sentiment[]
}

export type FetchRadarResponse = {
  data: Sources[]
}

export type RadarRequest = {
  source: string
  source_type: string
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
  guests?: (null | string | Guests)[]
  id?: string
  image_url?: string
  sender_pic?: string
  sender_alias?: string
  message_content?: string
  keyword?: boolean
  label: string
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
  twitter_handle?: string
  unique_id?: string
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

export type NodeExtended = Node & {
  x?: number
  y?: number
  z?: number
  coordinates?: Coordinates
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

export type Sources = {
  source_type: string
  source: string
  ref_id: string
}

export type SubmitErrRes = {
  error?: { message?: string }
}
