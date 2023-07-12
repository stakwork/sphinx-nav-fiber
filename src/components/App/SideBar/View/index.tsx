import { memo } from 'react'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { TextType } from '../AskQuestion/Text'
import { AudioClip } from '../AudioClip'
import { Creator } from '../Creator'
import { Data } from '../Data'
import { Messages } from '../Messages'
import { Person } from '../Person'
import { Relevance } from '../Relevance'
import { Show } from '../Show'
import { Topic } from '../Topic'
import { TwitData } from '../TwitData'
import { Twitter } from '../Twitter'

type Props = {
  isGraphView?: boolean
}

// eslint-disable-next-line no-underscore-dangle
export const _View = ({ isGraphView }: Props) => {
  const selectedNode = useSelectedNode()
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  if (isGraphView || showSelectionGraph) {
    switch (selectedNode?.node_type) {
      case 'twitter':
        return <Twitter />
      case 'guest':
        return <Person />
      case 'data_series':
        return <Data />
      case 'tribe_message':
        return <Messages />
      case 'tweet':
        return <TwitData />
      case 'topic':
        return <Topic />
      case 'show':
        return <Show />
      case 'clip':
        return <AudioClip />
      case 'document':
        return <TextType />
      default:
        return <Creator />
    }
  } else {
    return <Relevance />
  }
}

export const View = memo(_View)
