import { memo } from 'react'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { TextType } from '../../Helper/AskQuestion/Text'
import { TeachMeText } from '../../Helper/TeachMe'
import { AudioClip } from '../AudioClip'
import { Creator } from '../Creator'
import { Data } from '../Data'
import { Messages } from '../Messages'
import { Person } from '../Person'
import { Show } from '../Show'
import { Topic } from '../Topic'
import { TwitData } from '../TwitData'
import { Twitter } from '../Twitter'
import { YouTube } from '../YouTube'

// eslint-disable-next-line no-underscore-dangle
const _View = () => {
  const selectedNode = useSelectedNode()
  const [showTeachMe] = useDataStore((s) => [s.showTeachMe])

  if (showTeachMe) {
    return <TeachMeText />
  }

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
    case 'youtube':
      return <YouTube />
    case 'clip':
      if (selectedNode?.type === 'youtube') {
        return <YouTube />
      }

      return <AudioClip />
    case 'document':
      return <TextType />
    default:
      return <Creator />
  }
}

export const SelectedNodeView = memo(_View)
