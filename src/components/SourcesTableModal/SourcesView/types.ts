import { Sources } from '~/types'

export type Props = {
  data: Sources[] | undefined
}

export type TopicTableProps = {
  showMuted?: boolean
  onTopicEdit: (id: string, action: string) => void
}

export type TdProps = {
  width?: string
}

export interface ISourceMap {
  [key: string]: string
}

export type TPill = {
  selected: boolean
}
