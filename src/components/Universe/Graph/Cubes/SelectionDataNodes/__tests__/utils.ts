import { Link, NodeExtended } from '~/types'
import { getLinksForNodes, uniqueNodesByRefId } from '../utils'

const node = (refId: string): NodeExtended => ({ ref_id: refId } as NodeExtended)

const link = (source: string, target: string): Link => ({
  source,
  target,
  ref_id: `${source}-${target}`,
  edge_type: '',
})

describe('SelectionDataNodes utils', () => {
  it('removes duplicate related nodes by ref_id while preserving order', () => {
    expect(uniqueNodesByRefId([node('source'), node('topic-1'), node('topic-1'), node('topic-2')])).toEqual([
      node('source'),
      node('topic-1'),
      node('topic-2'),
    ])
  })

  it('keeps only links whose source and target are visible selection nodes', () => {
    expect(
      getLinksForNodes(
        [link('source', 'topic-1'), link('source', 'missing-topic'), link('topic-1', 'topic-2')],
        [node('source'), node('topic-1'), node('topic-2')],
      ),
    ).toEqual([link('source', 'topic-1'), link('topic-1', 'topic-2')])
  })
})
