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
  type?: string
}

export const Tag = styled(Flex)<TagProps>`
  text-align: center;
  width: ${(p: TagProps) => (p.type === 'topic' ? 'auto' : `${p.size}px`)};
  height: ${(p: TagProps) => (p.type === 'topic' ? 'auto' : `${p.size}px`)};
  outline: 1px solid ${(p: TagProps) => colors.white || p.color};
  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: ${(p: TagProps) => p.fontColor};
  border-radius: ${(p: TagProps) => `${p.type === 'guest' ? '100%' : '6px'}`};
  font-size: ${(p: TagProps) => `${p.fontSize}px`};
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  transform: scale(${(p: TagProps) => p.scale});
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

export const TagWrapper = styled(Flex)`
  text-align: center;
  outline: 1px solid ${colors.white};
  outline-offset: 0px;
  white-space: nowrap;
  padding: 4px;
  background: rgba(0, 0, 0, 0.75);
  color: ${colors.white};
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  transform: scale(${(p: TagProps) => p.scale});
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

type ImageProps = {
  src?: string
  size: number
  borderRadius?: string
}

export const Image = styled.img<ImageProps>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  border-radius: ${(p) => p.borderRadius};
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
