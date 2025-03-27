/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

type TreeNode = {
  name: string
  ref_id: string
  children?: TreeNode[]
}

type TidyTreeProps = {
  data: TreeNode
}

export const deepNestedComplexData: TreeNode = {
  name: 'Root',
  ref_id: 'root',
  children: [
    {
      name: 'Branch 1',
      ref_id: 'branch-1',
      children: [
        { name: 'Leaf 1.1', ref_id: 'leaf-1.1' },
        {
          name: 'Branch 1.2',
          ref_id: 'branch-1.2',
          children: [
            { name: 'Leaf 1.2.1', ref_id: 'leaf-1.2.1' },
            {
              name: 'Branch 1.2.2',
              ref_id: 'branch-1.2.2',
              children: [
                { name: 'Leaf 1.2.2.1', ref_id: 'leaf-1.2.2.1' },
                { name: 'Leaf 1.2.2.2', ref_id: 'leaf-1.2.2.2' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Branch 2',
      ref_id: 'branch-2',
      children: [
        {
          name: 'Branch 2.1',
          ref_id: 'branch-2.1',
          children: [
            { name: 'Leaf 2.1.1', ref_id: 'leaf-2.1.1' },
            { name: 'Leaf 2.1.2', ref_id: 'leaf-2.1.2' },
            {
              name: 'Branch 2.1.3',
              ref_id: 'branch-2.1.3',
              children: [
                {
                  name: 'Branch 2.1.3.1',
                  ref_id: 'branch-2.1.3.1',
                  children: [
                    { name: 'Leaf 2.1.3.1.1', ref_id: 'leaf-2.1.3.1.1' },
                    { name: 'Leaf 2.1.3.1.2', ref_id: 'leaf-2.1.3.1.2' },
                  ],
                },
              ],
            },
          ],
        },
        { name: 'Leaf 2.2', ref_id: 'leaf-2.2' },
      ],
    },
    {
      name: 'Branch 3',
      ref_id: 'branch-3',
      children: [
        { name: 'Leaf 3.1', ref_id: 'leaf-3.1' },
        { name: 'Leaf 3.2', ref_id: 'leaf-3.2' },
        { name: 'Leaf 3.3', ref_id: 'leaf-3.3' },
        {
          name: 'Branch 3.4',
          ref_id: 'branch-3.4',
          children: [
            { name: 'Leaf 3.4.1', ref_id: 'leaf-3.4.1' },
            {
              name: 'Branch 3.4.2',
              ref_id: 'branch-3.4.2',
              children: [
                { name: 'Leaf 3.4.2.1', ref_id: 'leaf-3.4.2.1' },
                { name: 'Leaf 3.4.2.2', ref_id: 'leaf-3.4.2.2' },
                {
                  name: 'Branch 3.4.2.3',
                  ref_id: 'branch-3.4.2.3',
                  children: [
                    { name: 'Leaf 3.4.2.3.1', ref_id: 'leaf-3.4.2.3.1' },
                    { name: 'Leaf 3.4.2.3.2', ref_id: 'leaf-3.4.2.3.2' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { name: 'Leaf 4', ref_id: 'leaf-4' },
    {
      name: 'Branch 5',
      ref_id: 'branch-5',
      children: [
        {
          name: 'Branch 5.1',
          ref_id: 'branch-5.1',
          children: [
            { name: 'Leaf 5.1.1', ref_id: 'leaf-5.1.1' },
            { name: 'Leaf 5.1.2', ref_id: 'leaf-5.1.2' },
          ],
        },
        { name: 'Leaf 5.2', ref_id: 'leaf-5.2' },
      ],
    },
  ],
}

export const Expandable: React.FC<TidyTreeProps> = ({ data }) => {
  const [expandedNodes, setExpandedNodes] = useState<Record<number, string>>({})
  const selectedRef = useRef<Record<string, HTMLDivElement | null>>({})

  const handleToggle = (depth: number, ref_id: string) => {
    setExpandedNodes((prev) => {
      const newExpanded = {
        ...prev,
        [depth]: prev[depth] === ref_id ? '' : ref_id,
      }

      return newExpanded
    })
  }

  useEffect(() => {
    const depths = Object.keys(expandedNodes).map(Number)

    if (depths.length > 0) {
      const maxDepth = Math.max(...depths)
      const selectedNodeId = expandedNodes[maxDepth]
      const nodeElement = selectedRef.current[selectedNodeId]

      if (nodeElement) {
        nodeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [expandedNodes])

  return (
    <Container>
      <TreeNodeComponent
        depth={0}
        expandedNodes={expandedNodes}
        node={deepNestedComplexData || data}
        onToggle={handleToggle}
        selectedRef={selectedRef}
      />
    </Container>
  )
}

type NodeComponentProps = {
  node: TreeNode
  depth: number
  expandedNodes: Record<number, string>
  onToggle: (depth: number, ref_id: string) => void
  selectedRef: React.MutableRefObject<Record<string, HTMLDivElement | null>>
}

const TreeNodeComponent: React.FC<NodeComponentProps> = ({ node, depth, expandedNodes, onToggle, selectedRef }) => {
  const expanded = expandedNodes[depth] === node.ref_id

  return (
    <NodeWrapper>
      <NodeBox
        ref={(el) => {
          // eslint-disable-next-line no-param-reassign
          selectedRef.current[node.ref_id] = el
        }}
        onClick={() => onToggle(depth, node.ref_id)}
      >
        {node.name}
      </NodeBox>
      {expanded && node.children && node.children.length > 0 && (
        <ChildrenWrapper>
          {node.children.map((child) => (
            <ChildContainer key={child.ref_id}>
              <Arrow>→</Arrow>
              <TreeNodeComponent
                depth={depth + 1}
                expandedNodes={expandedNodes}
                node={child}
                onToggle={onToggle}
                selectedRef={selectedRef}
              />
            </ChildContainer>
          ))}
        </ChildrenWrapper>
      )}
    </NodeWrapper>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #222;
  color: white;
  overflow: auto;
  max-height: 500px; /* ensure scrollability */
`

const NodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
`

const NodeBox = styled.div`
  padding: 10px;
  background-color: #444;
  border-radius: 4px;
  min-width: 120px;
  max-width: 220px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`

const Arrow = styled.div`
  font-size: 18px;
  color: #aaa;
`

const ChildContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
