import { Html } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Group, Vector3 } from 'three'

import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import DeleteIcon from '~/components/Icons/DeleteIcon'

type Props = {
  position: Vector3
  title: string
  onRemove: () => void
}

export const getPercentageFromWeight = (weight: number | undefined) => ((weight || 0) * 100).toFixed()

export const PathwayBadge = ({ position, title, onRemove }: Props) => {
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
          <span>{title}</span>
          <Flex className="icon" onClick={onRemove}>
            <DeleteIcon />
          </Flex>
        </Tag>
      </Html>
    </group>
  )
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
  font-size: 16px;
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
