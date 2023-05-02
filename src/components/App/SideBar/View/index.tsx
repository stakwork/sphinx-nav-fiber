import { useSelectedNode } from '~/stores/useDataStore'
import { AudioClip } from '../AudioClip'
import { Creator } from '../Creator'
import { Data } from '../Data'
import { Person } from '../Person'
import { Relevance } from '../Relevance'
import { TwitData } from '../TwitData'
import { Twitter } from '../Twitter'

type Props = {
  isSelectedView?: boolean
}

export const View = ({ isSelectedView }: Props) => {
  const selectedNode = useSelectedNode()

  if (selectedNode) {
    console.log(selectedNode.type)
    console.log(selectedNode.node_type)
  }

  if (isSelectedView) {
    switch (selectedNode?.node_type) {
      case 'twitter':
        return <Twitter />
      case 'guest':
        return <Person />
      case 'data_series':
        return <Data />
      case 'tweet':
        return <TwitData />
      case 'clip':
        return <AudioClip />
      default:
        return <Creator />
    }
  } else {
    return <Relevance />
  }
}
