import { TAboutParams } from '~/network/fetchSourcesData'

export const initialAboutState = {
  description: '',
  mission_statement: '',
  search_term: '',
  title: '',
}

export const initialMessageData = [
  {
    label: 'New Content',
    key: 'num_daily',
    value: null,
  },
  {
    label: 'Audio Clips',
    key: 'num_audio',
    value: null,
  },
  {
    label: 'Posts',
    key: 'num_tweet',
    value: null,
  },
]

export type Message = {
  label: string
  key: keyof TAboutParams | string
  value: string | null
}[]
