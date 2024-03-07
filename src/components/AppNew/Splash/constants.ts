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
    key: 'numDaily',
    value: null,
  },
  {
    label: 'Audio Clips',
    key: 'numAudio',
    value: null,
  },
  {
    label: 'Posts',
    key: 'numTwitterSpace',
    value: null,
  },
]

export type Message = {
  label: string
  key: keyof TAboutParams | string
  value: string | null
}[]
