/* eslint-disable padding-line-between-statements */
import { Canvas } from '@react-three/fiber'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { SchemaLink } from '../../../../../../../network/fetchSourcesData'
import { SchemaExtended } from '../../../../types'
import { truncateText } from '../../../Editor/utils'
import { Lines } from '../index'

const mockLinks: SchemaLink[] = [
  { ref_id: '1', source: 'node1', target: 'node2', edge_type: 'CHILD_OF' },
  { ref_id: '2', source: 'node2', target: 'node3', edge_type: 'PARENT_OF' },
]

const mockNodes: SchemaExtended[] = [
  { ref_id: 'node1', type: 'Person', x: 0, y: 0, z: 0, children: [] },
  { ref_id: 'node2', type: 'Thing', x: 10, y: 10, z: 0, children: [] },
  { ref_id: 'node3', type: 'Object', x: 20, y: 20, z: 0, children: [] },
]

describe('Lines Component', () => {
  it('should ensure all edges point in the correct direction', async () => {
    const mockOnEdgeClick = jest.fn()(async () => {
      const { getByText } = render(
        <Canvas>
          <Lines links={mockLinks} nodes={mockNodes} onEdgeClick={mockOnEdgeClick} />
        </Canvas>,
      )

      await waitFor(() => {
        mockLinks.forEach((link) => {
          const textElement = getByText(truncateText(link.edge_type, 10))

          expect(textElement).toBeInTheDocument()

          fireEvent.click(textElement)

          expect(mockOnEdgeClick).toHaveBeenCalledWith(
            link.ref_id,
            link.edge_type,
            mockNodes.find((node) => node.ref_id === link.source)?.type,
            mockNodes.find((node) => node.ref_id === link.target)?.type,
          )
        })
      })
    })
  })
})
