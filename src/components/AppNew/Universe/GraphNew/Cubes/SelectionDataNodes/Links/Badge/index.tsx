import { Html } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Group, Vector3 } from 'three'

import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

export const getPercentageFromWeight = (weight: number | undefined) => ((weight || 0) * 100).toFixed()

export const PathwayBadge = ({ position }: { position: Vector3 }) => {
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

  return (
    <group ref={ref} position={position}>
      <Html center sprite>
        <Tag
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
          Relation%
        </Tag>
      </Html>
    </group>
  )
}

const Tag = styled(Flex)`
  text-align: center;

  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: #ffffff;
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
  }

  &.selected {
    .badge-wrapper {
      top: 0;
    }

    font-size: 36px;

    &:hover {
      outline-offset: 0px;
    }
  }

  &.topic {
    outline: none;
    background: none;
    &:hover {
      font-size: 36px;
    }
    white-space: nowrap;
    .badge-wrapper {
      display: none;
    }
  }

  .badge-wrapper {
    position: absolute;
    top: -7px;
    left: -14px;
  }
`
