/* eslint-disable react/display-name */
import { LinearProgress } from '@mui/material'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TAboutParams, getAboutData, getStats } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { SphereAnimation } from './SpiningSphere'
import { AnimatedTextContent } from './animated'
import { Message, initialAboutState, initialMessageData } from './constants'

type Props = {
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Splash = memo(({ handleLoading }: Props) => {
  const [about, setAbout] = useState<TAboutParams>(initialAboutState)
  const [message, setMessage] = useState<Message>(initialMessageData)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const run = async () => {
      handleLoading(true)

      try {
        const aboutResponse = await getAboutData()

        setProgress(50)

        const statistics = await getStats()

        setProgress((prev) => prev + 15)

        setAbout(aboutResponse)

        setMessage(
          initialMessageData.map(({ key, ...rest }) => ({
            key,
            ...rest,
            value: statistics[key as keyof TAboutParams] ?? null,
          })),
        )

        timeoutId = setTimeout(() => handleLoading(false), 6000)
      } catch (error) {
        console.warn(error)

        setProgress(100)

        handleLoading(false)
      }
    }

    run()

    return () => clearTimeout(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => (prev === 100 ? prev : prev + 0.1))
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  const messageNotNull = message.some(({ value }) => !!value)

  return (
    <Wrappper align="center" direction="row" justify="center">
      <SphereAnimation />
      <Flex style={{ color: colors.white }}>
        <TitleWrapper>
          {about.title && <Text className="title">{about.title}</Text>}
          <Text className="subtitle">Second Brain</Text>
        </TitleWrapper>
        <LinearProgress color="inherit" sx={{ my: 1.75, height: '2px' }} value={progress} variant="determinate" />
        {messageNotNull && <AnimatedTextContent message={message} />}
      </Flex>
    </Wrappper>
  )
})

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title,
  .subtitle {
    font-family: Barlow;
    font-size: 40px;
    font-style: normal;
    line-height: 40px;
    text-align: left;
    width: fit-content;
  }

  .title {
    color: var(--Primary-Text, #fff);
    font-weight: 700;
  }

  .subtitle {
    color: ${colors.GRAY6};
    font-weight: 400;
  }
`

const Wrappper = styled(Flex)`
  width: 442.879px;
  margin: 0 auto;
  gap: 27px;
`

export default Splash
