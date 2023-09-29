import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type TagProps = {
  selected: boolean
  color: string
  fontColor: string
  size: number
  fontSize: number
  scale: number
}

export const Tag = styled(Flex)<TagProps>`
  opacity: 0.9;
  text-align: center;
  width: ${(p: TagProps) => `${p.size}px`};
  height: ${(p: TagProps) => `${p.size}px`};
  background: ${colors.transparentBlack};
  border: 3px solid ${(p: TagProps) => p.color};
  color: ${(p: TagProps) => p.fontColor};
  border-radius: 100%;
  font-size: ${(p: TagProps) => `${p.fontSize}px`};
  cursor: pointer;
  transition: opacity 0.4s;
  transform: scale(${(p: TagProps) => p.scale});
`

type ImageProps = {
  src?: string
  size: number
}

export const Image = styled.img<ImageProps>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: 100%;
`

type CounterProps = {
  color: string
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export const BadgeIconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`

export const Counter = styled.div<CounterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.transparentBlack};
  border: 2px solid ${(p) => p.color};
  color: #fff;
  padding: 0 4px;
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`

export const Percentage = styled.div<CounterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(p) => p.color}44;
  background: ${colors.transparentBlack};
  padding: 0 4px;
  color: ${(p) => p.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`
