import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

const messages = [
  ['Searching', 'Podcast Index'],
  ['Finding', 'Transcripts'],
  ['Loading', 'Audio Clips'],
  ['Loading', 'Video Clips'],
  ['Preparing', 'Results'],
]

export const FetchLoaderText = () => {
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    if (msgIndex === messages.length - 1) {
      return
    }

    const messageTimeout = setTimeout(() => setMsgIndex((index) => (index + 1) % messages.length), 2000)

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(messageTimeout)
  }, [msgIndex])

  return (
    <Wrapper direction="column">
      {messages.map((i, index) => (
        <Flex key={i[1]} className={clsx('raw-wrapper', { show: msgIndex === index })} direction="row">
          <div className={clsx('action')}>{i[0]}</div>
          <div className={clsx('entity')}>{i[1]}</div>
          <div>
            <BeatLoader color={colors.SECONDARY_BLUE} size={2} />
          </div>
        </Flex>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  overflow: hidden;
  height: 20px;
  position: relative;
  .action {
    color: ${colors.white};
    margin-right: 8px;
  }

  .raw-wrapper {
    height: 0;
    overflow: hidden;
    transition: height 0.7s ease-in-out;
    align-items: flex-end;
    &.show {
      height: 20px;
    }
  }

  .entity {
    color: ${colors.SECONDARY_BLUE};
  }
`
