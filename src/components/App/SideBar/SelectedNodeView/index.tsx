import { memo, useEffect } from 'react'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { TextType } from '../../Helper/AskQuestion/Text'
import { TeachMeText } from '../../Helper/TeachMe'
import { Data } from '../Data'
import { Episode } from '../Episode'
import { Media } from '../Media'
import { Messages } from '../Messages'
import { Person } from '../Person'
import { Show } from '../Show'
import { Topic } from '../Topic'
import { TwitData } from '../TwitData'

const MEDIA_TYPES = ['clip', 'twitter_space', 'youtube', 'episode']

// eslint-disable-next-line no-underscore-dangle
const _View = () => {
  const selectedNode = useSelectedNode()
  const [showTeachMe] = useDataStore((s) => [s.showTeachMe])

  const [setPlayingNode] = usePlayerStore((s) => [s.setPlayingNode])

  useEffect(() => {
    if (MEDIA_TYPES.includes(selectedNode?.node_type || '')) {
      setPlayingNode(selectedNode)
    }
  }, [setPlayingNode, selectedNode])

  if (showTeachMe) {
    return <TeachMeText />
  }

  switch (selectedNode?.node_type) {
    case 'guest':
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
    case 'clip':
    case 'twitter_space':
      return <Media />
    case 'document':
      return <TextType />
    case 'episode':
      return <Episode key={selectedNode.ref_id} />
    default:
      return null
  }
}

export const SelectedNodeView = memo(_View)
