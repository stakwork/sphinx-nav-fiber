import { Select } from '@react-three/drei'
import { memo, useCallback } from 'react'
import { Object3D } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { Cube } from './Cube'

type NodeTypeColors = Record<string, string>

const NODE_TYPE_COLORS: NodeTypeColors = {
  data_series: 'red',
  tweet: 'aqua',
}

export const Cubes = memo(() => {
  const data = useGraphData()

  const selectedNode = useSelectedNode()

  const [searchTerm, setTranscriptOpen] = useAppStore((s) => [s.currentSearch, s.setTranscriptOpen])

  const handleSelect = useCallback(
    (nodes: Object3D[]) => {
      const node = nodes?.[0]

      if (node) {
        // always close transcript when switching nodes
        setTranscriptOpen(false)

        if (node.userData) {
          useDataStore.getState().setSelectedNode((node?.userData as NodeExtended) || null)
        }
      }
    },
    [setTranscriptOpen],
  )

  const shouldHighlightPartial =
    searchTerm &&
    !data.nodes.some((i) => i.node_type === 'guest' && searchTerm.toLowerCase() === i?.label?.toLowerCase())

  return (
    <Select onChange={handleSelect}>
      {data.nodes
        .filter((f) => !f.hidden)
        .map((node, index) => {
          let highlight = false

          if (searchTerm && node.node_type === 'guest') {
            if (shouldHighlightPartial) {
              highlight = searchTerm
                .split(' ')
                .some((i) => node?.label.toLowerCase().match(new RegExp(`\\b${i.toLowerCase()}\\b`)) !== null)
            } else {
              highlight = node?.label.toLowerCase() === searchTerm.toLowerCase()
            }
          }

          let relationHighlightColor: string | undefined

          // highlight node if exists in children of selected
          if (node?.ref_id && selectedNode?.children?.length && selectedNode.children.includes(node.ref_id)) {
            highlight = true
            relationHighlightColor = NODE_RELATIVE_HIGHLIGHT_COLORS.children.nodeColor
          } else if (selectedNode?.guests?.length && node.type === 'guest') {
            const nodeIsGuest = !!selectedNode?.guests.find((f) => {
              if (typeof f !== 'string') {
                return f?.ref_id && f.ref_id === node.ref_id
              }

              return false
            })

            if (nodeIsGuest) {
              // highlight node if exists in guests of selected
              highlight = true
              relationHighlightColor = NODE_RELATIVE_HIGHLIGHT_COLORS.guests.nodeColor
            }
          }

          return (
            <Cube
              // eslint-disable-next-line react/no-array-index-key
              key={`${node.id}-${index}`}
              highlight={highlight || !!NODE_TYPE_COLORS[node.node_type]}
              highlightColor={relationHighlightColor || NODE_TYPE_COLORS[node.node_type] || 'green'}
              node={node}
            />
          )
        })}
    </Select>
  )
})

Cubes.displayName = 'Cubes'
