import { Html } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Group } from 'three'

import { useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import DeleteIcon from '~/components/Icons/DeleteIcon'
import { Flex } from '~/components/common/Flex'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { Link, NodeExtended } from '~/types'

type Props = {
  links: Link[]
  simulation: ForceSimulation
}

export const PathwayBadges = ({ links, simulation }: Props) => {
  const ref = useRef<Group | null>(null)

  useEffect(
    () =>
      function cleanup() {
        if (ref.current) {
          ref.current.clear()
        }
      },
    [ref],
  )

  useFrame(() => {
    if (ref.current) {
      const nodes = simulation.nodes()
      const gr = ref.current as Group

      gr.children.forEach((mesh, index) => {
        const link = links[index]
        const start = nodes.find((i: NodeExtended) => link.source === i.ref_id)
        const end = nodes.find((i: NodeExtended) => link.target === i.ref_id)

        mesh.position?.set((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2)
      })
    }
  })

  return links.length ? (
    <group ref={ref}>
      {links.map((i) => (
        <mesh key={i.ref_id}>
          <Html center sprite>
            <Tag
              direction="row"
              justify="center"
              onClick={(e) => {
                e.stopPropagation()
              }}
              onPointerOut={(e) => {
                e.stopPropagation()
              }}
              onPointerOver={(e) => {
                e.stopPropagation()
              }}
            >
              <span>{i.edge_type}</span>
              <Flex className="icon" onClick={() => console.log(123)}>
                <DeleteIcon />
              </Flex>
            </Tag>
          </Html>
        </mesh>
      ))}
    </group>
  ) : null
}

const Tag = styled(Flex)`
  text-align: center;

  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: #eee;
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
    span {
      opacity: 0.1;
    }

    .icon {
      display: flex;
    }
  }

  .icon {
    position: absolute;
    width: 24px;
    height: 24px;
    /* bottom: 100%; */
    display: none;
    color: #000;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    color: #000;
    border-radius: 100%;
    font-size: 16px;
    cursor: pointer;
    transition: opacity 0.4s;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
  }

  .badge-wrapper {
    position: absolute;
    top: -7px;
    left: -14px;
  }
`
