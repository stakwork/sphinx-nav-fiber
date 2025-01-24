import { memo } from 'react'
import styled from 'styled-components'
import { colors } from '~/utils/colors'

type Props = {
  left: number
  width: number
  title: string
}

export const Chapter = memo(({ left, width, title }: Props) => (
  <ChapterWrapper style={{ left: `${left}%`, width: `calc(${width}% - 2px)` }}>
    <div className="title">{title}</div>
  </ChapterWrapper>
))

Chapter.displayName = 'Chapter'

const ChapterWrapper = styled.div`
  position: absolute;
  top: -3px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-left: 1px solid ${colors.white};
  border-right: 1px solid ${colors.white};

  .title {
    position: absolute;
    bottom: calc(100% + 16px);
    display: none;
    color: ${colors.white};
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    height: 16px;
    .title {
      display: block;
    }
  }
`
