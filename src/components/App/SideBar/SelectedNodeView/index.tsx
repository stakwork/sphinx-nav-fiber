import { memo, useEffect } from 'react'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStoreLatest'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { TeachMeText } from '../../Helper/TeachMe'
import { Data } from '../Data'
import { Episode } from '../Episode'
import { Image } from '../Image'
import { Media } from '../Media'
import { Messages } from '../Messages'
import { Person } from '../Person'
import { Show } from '../Show'
import { Topic } from '../Topic'
import { TwitData } from '../TwitData'
import { Default } from './Default'
import { Document } from './Document'

const MEDIA_TYPES = ['clip', 'twitter_space', 'video', 'episode', 'podcast']

// eslint-disable-next-line no-underscore-dangle
const _View = () => {
  const selectedNode = useSelectedNode()
  const { showTeachMe } = useDataStore((s) => s)

  const { setPlayingNode } = usePlayerStore((s) => s)

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
    case 'video':
    case 'podcast':
    case 'clip':
    case 'twitter_space':
      return <Media />
    case 'document':
      return <Document />
    case 'episode':
      return <Episode key={selectedNode.ref_id} />
    case 'image':
      return <Image />
    default:
      return <Default />
  }
}

export const SelectedNodeView = memo(_View)
