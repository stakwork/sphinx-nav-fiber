import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import PlayIcon from '~/components/Icons/PlayIcon'

type Props = {
  text: string
  timestamps?: string
  description?: string
}

export const Claim = ({ text, timestamps, description }: Props) => (
  <Wrapper>
    <div className="title">{text}</div>
    <div className="description">{description}</div>

    <div className="clip">
      {timestamps && <div className="clip__timestamps">{timestamps}</div>}
      <div className="clip__icon">
        <PlayIcon />
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  position: relative;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  color: white;
  border-radius: 12px;
  min-height: 90px;
  height: 100%;
  font-size: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgb(75, 85, 99);
  background: 'rgba(30, 58, 138, 0.2)';

  .title {
    font-size: 12px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .clip {
    position: absolute;
    left: 50%;
    bottom: 0;
    padding: 0 12px;
    /* width: 26px; */
    height: 28px;
    border-radius: 14px;
    transform: translateX(-50%) translateY(50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: rgb(31, 41, 55);
    background-color: rgb(196, 181, 253);

    &__timestamps {
      font-size: 12px;
      color: rgb(31, 41, 55);
      white-space: nowrap;
    }
  }
`
