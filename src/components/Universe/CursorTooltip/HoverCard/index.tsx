import { Node } from '~/types'
import { GeneralHoverCard } from './GeneralHoverCard'
import { PostHoverCard } from './PostHoverCard'
import { UserHoverCard } from './UserHoverCard'

type Props = {
  node: Node
}

export const HoverCard = ({ node }: Props) => {
  if (node.node_type === 'User') {
    return <UserHoverCard node={node} />
  }

  if (node.node_type === 'Tweet' || node.node_type === 'Post') {
    return <PostHoverCard node={node} />
  }

  return <GeneralHoverCard node={node} />
}
