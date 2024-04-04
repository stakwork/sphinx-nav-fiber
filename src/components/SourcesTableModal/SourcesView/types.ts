import { Sources } from '~/types'
import React from 'react'

export type Props = {
  data: Sources[] | undefined
}

export type TopicTableProps = {
  showMuted?: boolean
  onTopicEdit: (id: string, action: string) => void
  onChangeFilter: (val: string) => void
  setShowMuteUnmute: () => void
  checkedStates: { [refId: string]: boolean }
  setCheckedStates: React.Dispatch<React.SetStateAction<{ [refId: string]: boolean }>>
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
