/* eslint-disable react/display-name */
import { LinearProgress } from '@mui/material'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getAboutData } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { TStats } from '~/types'
import { colors } from '~/utils'
import { SphereAnimation } from './SpiningSphere'
import { AnimatedTextContent } from './animated'
import { Message, initialMessageData } from './constants'

type Props = {
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Splash = memo(({ handleLoading }: Props) => {
  const [message, setMessage] = useState<Message>(initialMessageData)
  const [progress, setProgress] = useState(0)
  const [appMetaData, setAppMetaData] = useAppStore((s) => [s.appMetaData, s.setAppMetaData])
  const [data, stats] = useDataStore((s) => [s.data, s.stats])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const run = async () => {
      handleLoading(true)

      try {
        const aboutResponse = await getAboutData()

        setProgress(50)

        setProgress((prev) => prev + 15)

        setAppMetaData(aboutResponse)

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
  }, [stats])

  useEffect(() => {
    if (stats) {
      const messageData = initialMessageData.map(({ key, ...rest }) => ({
        key,
        ...rest,
        value: stats[key as keyof TStats] ?? null,
      }))

      setMessage(messageData)
    }
  }, [stats, setMessage])

  useEffect(() => {
    if (data) {
      handleLoading(false)
    }
  }, [handleLoading, data])

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
          {appMetaData && <Text className="title">{appMetaData.title}</Text>}
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
