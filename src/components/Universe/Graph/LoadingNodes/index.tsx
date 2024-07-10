import { Html } from '@react-three/drei'
import React from 'react'
import styled from 'styled-components'
import { Animation } from './Animation'

const getRandomPosition = () => Math.floor(Math.random() * 2001) - 1000

export const LoadingNodes: React.FC = () => (
  <>
    {['a', 'b', 'c'].map((i) => {
      const x = getRandomPosition()
      const y = getRandomPosition()
      const z = getRandomPosition()

      return (
        <mesh key={i} position={[x, y, z]}>
          <Html center sprite>
            <Wrapper>
              <Animation meshId={i} />
            </Wrapper>
          </Html>
        </mesh>
      )
    })}
  </>
)

const Wrapper = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`
