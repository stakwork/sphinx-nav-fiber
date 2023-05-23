import { useSelectedNode } from '~/stores/useDataStore'
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
  isSelectedView?: boolean
}

export const View = ({ isSelectedView }: Props) => {
  const selectedNode = useSelectedNode()

  if (isSelectedView) {
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
      case 'text':
        return <TextType />
      default:
        return <Creator />
    }
  } else {
    return <Relevance />
  }
}
