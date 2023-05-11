import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { NodeExtended } from '~/types'

type NodeTypeColors = Record<string, string>

const NODE_TYPE_COLORS: NodeTypeColors = {
  data_series: 'red',
  tweet: 'aqua',
}

type HighlighterProps = {
  node: NodeExtended | null
  selectedNode: NodeExtended | null
  searchTerm: string | null
}

export const getHighlighter = ({ node, selectedNode, searchTerm }: HighlighterProps) => {
  let highlight = false

  if (searchTerm && node?.node_type === 'guest') {
    highlight = node?.label.toLowerCase() === searchTerm.toLowerCase()
  }

  let relationHighlightColor: string | undefined

  // highlight node if exists in children of selected
  if (node?.ref_id && selectedNode?.children?.length && selectedNode.children.includes(node.ref_id)) {
    highlight = true
    relationHighlightColor = NODE_RELATIVE_HIGHLIGHT_COLORS.children.nodeColor
  } else if (selectedNode?.guests?.length && node?.type === 'guest') {
    const nodeIsGuest = !!selectedNode?.guests.find((f) => {
      if (typeof f !== 'string') {
        return f?.ref_id && f.ref_id === node?.ref_id
      }

      return false
    })

    if (nodeIsGuest) {
      // highlight node if exists in guests of selected
      highlight = true
      relationHighlightColor = NODE_RELATIVE_HIGHLIGHT_COLORS.guests.nodeColor
    }
  }

  const highlightColor = relationHighlightColor || NODE_TYPE_COLORS[node?.node_type || ''] || 'green'

  highlight = highlight || !!NODE_TYPE_COLORS[node?.node_type || '']

  return { highlight, highlightColor }
}
