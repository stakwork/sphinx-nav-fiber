import { TAboutParams } from '~/network/fetchSourcesData'

export const initialMessageData = [
  {
    label: 'New Content',
    key: 'numDaily',
    dataKey: 'num_daily',
    value: null,
  },
  {
    label: 'Audio Clips',
    key: 'numAudio',
    dataKey: 'num_audio',
    value: null,
  },
  {
    label: 'Posts',
    key: 'numTwitterSpace',
    dataKey: 'num_twitter_space',
    value: null,
  },
]

export type Message = {
  label: string
  key: keyof TAboutParams | string
  value: string | null
}[]
