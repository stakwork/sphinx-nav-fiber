/* eslint-disable padding-line-between-statements */
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Node } from '../Node'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { Canvas } from '@react-three/fiber'

jest.mock('@react-three/fiber', () => ({
  Canvas: () => 'Canvas',
  useFrame: jest.fn(),
  useThree: jest.fn(() => ({
    camera: {},
    gl: {},
    scene: {},
  })),
}))

jest.mock('@react-three/drei', () => ({
  Text: () => 'Text',
  Circle: () => 'Circle',
}))

jest.mock('@use-gesture/react', () => ({
  useDrag: jest.fn(),
}))

const mockNode: SchemaExtended = {
  type: 'Thing child test',
  x: 0,
  y: 0,
  children: [],
}

const mockSetSelectedNode = jest.fn()
const mockOnSimulationUpdate = jest.fn()

describe('Node Component', () => {
  it('should replace spaces with hyphens and center and Wrap long text', () => {
    const { getByText } = render(
      <Canvas>
        <Node
          isSelected={false}
          node={mockNode}
          onSimulationUpdate={mockOnSimulationUpdate}
          setSelectedNode={mockSetSelectedNode}
        />
      </Canvas>,
    )

    waitFor(() => {
      expect(getByText('Thing-child-test')).toBeInTheDocument()
    })
  })
})
