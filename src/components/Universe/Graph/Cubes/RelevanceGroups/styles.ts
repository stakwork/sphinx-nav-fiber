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
  /* outline: 1px solid ${colors.white}; */
  /* outline-offset: 0px; */
  white-space: nowrap;
  padding: 4px 10px 6px;
  background: #23252f;
  color: ${colors.white};
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  align-items: center;
  justify-content: flex-start;
  font-family: Barlow;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
  max-width: auto;
  max-height: 100px;
  white-space: normal;
  font-size: 16px;
  position: relative;

  &.is-active {
    background: #fff;
    color: #16171d;
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

export const BadgeIconWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c3f72;
  color: #fff;
  font-size: 8px;
  font-weight: 500;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  padding: 2px;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
`
