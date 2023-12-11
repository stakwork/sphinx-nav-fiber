import { memo, useEffect } from 'react'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { TextType } from '../../Helper/AskQuestion/Text'
import { TeachMeText } from '../../Helper/TeachMe'
import { AudioClip } from '../AudioClip'
import { Data } from '../Data'
import { Episode } from '../Episode'
import { Messages } from '../Messages'
import { Person } from '../Person'
import { Show } from '../Show'
import { Topic } from '../Topic'
import { TwitData } from '../TwitData'
import { YouTube } from '../YouTube'

const MEDIA_TYPES = ['clip', 'twitter_space', 'youtube', 'episode']

// eslint-disable-next-line no-underscore-dangle
const _View = () => {
  const selectedNode = useSelectedNode()
  const [showTeachMe] = useDataStore((s) => [s.showTeachMe])

  const [playingNode, setPlayingNode] = usePlayerStore((s) => [s.playingNode, s.setPlayingNode])

  useEffect(() => {
    if (MEDIA_TYPES.includes(selectedNode?.node_type || '')) {
      setPlayingNode(selectedNode)
    }
  }, [setPlayingNode, selectedNode, playingNode])

  if (showTeachMe) {
    return <TeachMeText />
  }

  switch (selectedNode?.node_type) {
    case 'guest':
      return <Person />
    case 'person':
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
    case 'twitter_space':
      return <AudioClip />
    case 'episode':
      return <Episode />
    default:
      return null
  }
}

export const SelectedNodeView = memo(_View)
