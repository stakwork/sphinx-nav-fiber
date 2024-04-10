/* eslint-disable react/display-name */
import { LinearProgress } from '@mui/material'
import { memo, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { StatsConfig } from '~/components/Stats'
import { getAboutData, getStats, TStatParams } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { TStats } from '~/types'
import { colors, formatNumberWithCommas } from '~/utils'
import { AnimatedTextContent } from './animated'
import { initialMessageData, Message } from './constants'
import { SphereAnimation } from './SpiningSphere'

export const Splash = memo(({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState<Message | null>(null)
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { appMetaData, setAppMetaData } = useAppStore((s) => s)
  const { stats, setStats, isFetching } = useDataStore((s) => s)

  useEffect(() => {
    const run = async () => {
      try {
        const aboutResponse = await getAboutData()

        setAppMetaData(aboutResponse)
      } catch (error) {
        setProgress(100)

        setIsLoading(false)
      }
    }

    run()
  }, [setIsLoading, setAppMetaData, stats])

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
    () => message && Object.values(appMetaData).length > 0 && message.length > 0,
    [appMetaData, message],
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!isFetching && splashDataLoaded) {
      setProgress(50)

      timeoutId = setTimeout(() => setIsLoading(false), 5000)
    }

    return () => clearTimeout(timeoutId)
  }, [isFetching, setIsLoading, splashDataLoaded])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (splashDataLoaded) {
        setProgress((prev) => (prev >= 100 ? 100 : prev + Math.floor(Math.random() * 4)))
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [splashDataLoaded])

  if (!splashDataLoaded) {
    return null
  }

  return (
    <SplashWrapper>
      {isLoading && splashDataLoaded ? (
        <Wrappper align="center" direction="row" justify="center">
          <SphereAnimation />
          <Flex style={{ color: colors.white }}>
            <TitleWrapper>
              <Text className="title">{appMetaData.title}</Text>
              <Text className="subtitle">Second Brain</Text>
            </TitleWrapper>
            <LinearProgress color="inherit" sx={{ my: 1.75, height: '2px' }} value={progress} variant="determinate" />
            {message && <AnimatedTextContent message={message} />}
          </Flex>
        </Wrappper>
      ) : (
        children
      )}
    </SplashWrapper>
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

const SplashWrapper = styled(Flex)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrappper = styled(Flex)`
  width: 442.879px;
  margin: 0 auto;
  gap: 27px;
`

export default Splash
