import { Vector3 } from 'three'

export type GuestMapChild = {
  children: string[]
  imageUrl: string
  name: string
  twitterHandle: string
}

export type TeachData = {
  term: string
  transcripts: string
}

export type TopicMapItem = {
  children: string[]
  position: Vector3
}

export type TopicMap = Record<string, TopicMapItem>

export type GuestMap = Map<string, GuestMapChild>
