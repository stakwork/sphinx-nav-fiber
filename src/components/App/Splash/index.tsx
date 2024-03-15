/* eslint-disable react/display-name */
import { LinearProgress } from '@mui/material'
import { memo, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TStatParams, getAboutData, getStats } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { colors, formatNumberWithCommas } from '~/utils'
import { SphereAnimation } from './SpiningSphere'
import { AnimatedTextContent } from './animated'
import { Message, initialMessageData } from './constants'
import { StatsConfig } from '~/components/Stats'
import { TStats } from '~/types'

export const Splash = memo(() => {
  const [message, setMessage] = useState<Message>(initialMessageData)
  const [progress, setProgress] = useState(0)
  const { appMetaData, setAppMetaData } = useAppStore((s) => s)
  const { data, stats, setStats, setSplashDataLoading } = useDataStore((s) => s)

  useEffect(() => {
    const run = async () => {
      try {
        const aboutResponse = await getAboutData()

        setProgress(50)

        setAppMetaData(aboutResponse)
      } catch (error) {
        console.warn(error)

        setProgress(100)

        setSplashDataLoading(false)
      }
    }

    run()
  }, [setSplashDataLoading, setAppMetaData, stats])

  useEffect(() => {
    const run = async () => {
      const statsReponse = await getStats()

      const updatedStats: TStats = {}

      StatsConfig.forEach(({ key, dataKey }) => {
        updatedStats[key as keyof TStats] = formatNumberWithCommas(statsReponse[dataKey as keyof TStatParams] ?? 0)
      })

      setStats(updatedStats)

      const messageData = initialMessageData.map(({ dataKey, ...rest }) => ({
        ...rest,
        value: formatNumberWithCommas(statsReponse[dataKey as keyof TStatParams] ?? 0),
      }))

      setMessage(messageData)
    }

    if (!stats) {
      run()
    }
  }, [stats, setMessage, setStats])

  const splashDataLoaded = useMemo(
    () => Object.values(appMetaData).some((value) => !!value) && message.some(({ value }) => !!value),
    [appMetaData, message],
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (data && splashDataLoaded) {
      timeoutId = setTimeout(() => {
        setProgress(100)

        setSplashDataLoading(false)
      }, 6000)
    }

    return () => clearTimeout(timeoutId)
  }, [setSplashDataLoading, data, splashDataLoaded])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (splashDataLoaded) {
        setProgress((prev) => (prev === 100 ? prev : prev + 1))
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [splashDataLoaded])

  return (
    <>
      {splashDataLoaded ? (
        <Wrappper align="center" direction="row" justify="center">
          <SphereAnimation />
          <Flex style={{ color: colors.white }}>
            <TitleWrapper>
              <Text className="title">{appMetaData.title}</Text>
              <Text className="subtitle">Second Brain</Text>
            </TitleWrapper>
            <LinearProgress color="inherit" sx={{ my: 1.75, height: '2px' }} value={progress} variant="determinate" />
            <AnimatedTextContent message={message} />
          </Flex>
        </Wrappper>
      ) : null}
    </>
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
