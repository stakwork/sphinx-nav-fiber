/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Node } from '../Node'
import { Canvas } from '@react-three/fiber'
import { SchemaExtended } from '../../../../types'

jest.mock('@react-three/fiber', () => ({
  Canvas: jest.fn(() => <div>Canvas</div>),
  useFrame: jest.fn(),
  useThree: jest.fn(() => ({
    camera: {},
    gl: {},
    scene: {},
    size: { width: 800, height: 600, left: 0, top: 0 },
  })),
}))

jest.mock('@react-three/drei', () => ({
  Text: jest.fn(({ children }) => <span>{children}</span>),
  Circle: jest.fn(() => <div>Circle</div>),
}))

const mockSetSelectedNode = jest.fn()
const mockOnSimulationUpdate = jest.fn()

const setup = (nodeType: string) => {
  const mockNode: SchemaExtended = {
    type: nodeType,
    x: 0,
    y: 0,
    children: [],
  }

  return render(
    <Canvas>
      <Node
        isSelected={false}
        node={mockNode}
        onSimulationUpdate={mockOnSimulationUpdate}
        setSelectedNode={mockSetSelectedNode}
      />
    </Canvas>,
  )
}

describe('Node Component', () => {
  it('should not trigger setSelectedNode when node type is "Thing"', async () => {
    const { getByRole } = setup('Thing')

    waitFor(() => {
      const mesh = getByRole('mesh')
      fireEvent.click(mesh)
    })

    expect(mockSetSelectedNode).not.toHaveBeenCalled()
  })

  it('should trigger setSelectedNode when node type is not "Thing"', () => {
    const { getByRole } = setup('Person2')

    waitFor(() => {
      const mesh = getByRole(mockSetSelectedNode('mesh'))
      fireEvent.click(mesh)
    })

    expect(mockSetSelectedNode).toHaveBeenCalled()
  })
})
