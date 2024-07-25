import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { Message } from './constants'

type AnimatedTextProps = {
  message: Message
}

export const AnimatedTextContent = ({ message }: AnimatedTextProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const filteredMessage = message.filter((i) => i.value !== '0')

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentMessageIndex((index) => (index + 1) % message.length), 1000)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMessageIndex])

  return (
    <TextWrapper>
      <Text className="loading">LOADING</Text>
      <Flex className="value-wrapper">
        {filteredMessage.map(({ key, value }, index) => (
          <div key={key} className={clsx('value', { show: currentMessageIndex === index })}>
            {value}
          </div>
        ))}
      </Flex>
      <Flex>
        {filteredMessage.map(({ key, label }, index) => (
          <Flex key={key} className={clsx('label-wrapper', { show: currentMessageIndex === index })}>
            <div className="label">{label}</div>
          </Flex>
        ))}
      </Flex>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .loading {
    color: var(--Main-bottom-icons, #909baa);
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .value-wrapper {
    position: relative;
    height: 18px;

    .value {
      position: absolute;
      top: -50%;
      left: 50%;
      transform: translate(-50%, 50%);
      opacity: 0;
      transition: opacity 0.4s ease-in-out, visibility 0.2s ease-in-out;

      &.show {
        opacity: 1;
        visibility: visible;
      }
    }

    color: var(--Text-2, #fff);
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .label-wrapper {
    height: 0;
    overflow: hidden;
    transition: height 0.5s linear;
    align-items: flex-end;
    gap: 10px;

    &.show {
      height: 18px;
    }

    .label {
      width: 104px;
    }

    color: var(--Text-2, #fff);
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
