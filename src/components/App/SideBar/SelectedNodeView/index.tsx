import { memo, useEffect } from 'react'
import { useSelectedNode } from '~/stores/useGraphStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
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

// eslint-disable-next-line no-underscore-dangle
const _View = () => {
  const selectedNode = useSelectedNode()

  const { setPlayingNode } = usePlayerStore((s) => s)

  useEffect(() => {
    if (!selectedNode) {
      return
    }

    const media =
      selectedNode.media_url || selectedNode.link || selectedNode.properties?.link || selectedNode.properties?.media_url

    if (media) {
      setPlayingNode(selectedNode)
    }
  }, [setPlayingNode, selectedNode])

  switch (selectedNode?.node_type) {
    case 'guest':
    case 'person':
      return <Person />
    case 'data_series':
      return <Data />
    case 'tribe_message':
      return <Messages />
    case 'Tweet':
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
    case 'Episode':
      return <Episode key={selectedNode.ref_id} />
    case 'image':
      return <Image />
    default:
      return <Default />
  }
}

export const SelectedNodeView = memo(_View)
