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

/* eslint-disable camelcase */
export type QuestionData = {
  search_term: string
  transcripts: string
  expertise_level: string
  question_text: string
}



export type TopicMapItem = {
  children: string[]
  position: Vector3
}

export type TopicMap = Map<string, TopicMapItem>

export type GuestMap = Map<string, GuestMapChild>
