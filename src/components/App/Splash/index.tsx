/* eslint-disable react/display-name */
import { LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getAboutData, getSchemaAll, getStats } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors, formatSplashMessage, formatStatsResponse } from '~/utils'
import { AnimatedTextContent } from './animated'
import { initialMessageData, Message } from './constants'
import { SphereAnimation } from './SpiningSphere'

export const Splash = () => {
  const [message, setMessage] = useState<Message>(initialMessageData)
  const [progress, setProgress] = useState(0)
  const { appMetaData, setAppMetaData } = useAppStore((s) => s)
  const { stats, setStats, setSeedQuestions } = useDataStore((s) => s)
  const { schemas, setSchemas } = useSchemaStore((s) => s)
  const [isLoading, setIsLoading] = useState(false)

  // Individual useEffect hooks for each data requirement
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        if (!appMetaData) {
          const aboutResponse = await getAboutData()

          setAppMetaData(aboutResponse)

          if (aboutResponse.seed_questions) {
            setSeedQuestions(aboutResponse.seed_questions)
          }
        }

        if (!stats) {
          const statsResponse = await getStats()
          const updatedStats = formatStatsResponse(statsResponse)

          setStats(updatedStats)

          const messageData = formatSplashMessage(statsResponse)

          setMessage(messageData)
        }

        if (!schemas.length) {
          const response = await getSchemaAll()

          setSchemas(response.schemas.filter((schema) => !schema.is_deleted))
        }
      } finally {
        setIsLoading(false) // Ensure fetching flag is reset
      }
    }

    if (!appMetaData && !stats && !isLoading) {
      fetchData() // Only fetch if there's no appMetaData and it's not already fetching
    }
  }, [appMetaData, isLoading, schemas.length, setAppMetaData, setSchemas, setSeedQuestions, setStats, stats])

  useEffect(() => {
    const fetchSchemas = async () => {
      try {
        const response = await getSchemaAll()

        setSchemas(response.schemas.filter((schema) => !schema.is_deleted))
      } catch (err) {
        console.error(err)
      }
    }

    if (!schemas.length) {
      fetchSchemas() // Only fetch if schemas is empty and it's not already fetching
    }
  }, [schemas.length, setSchemas])

  // Progress and interval management
  useEffect(() => {
    let intervalId: NodeJS.Timer

    if (message && appMetaData) {
      setProgress((prev) => (!prev ? 50 : prev))

      intervalId = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + Math.floor(Math.random() * 4)))
      }, 100)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [message, appMetaData])

  return (
    <SplashWrapper>
      <Wrapper align="center" direction="row" justify="center">
        <SphereAnimation />
        <Flex style={{ color: colors.white }}>
          <TitleWrapper>
            <Text className="title">{appMetaData?.title}</Text>
            <Text className="subtitle">Second Brain</Text>
          </TitleWrapper>
          <LinearProgress color="inherit" sx={{ my: 1.75, height: '2px' }} value={progress} variant="determinate" />
          <AnimatedTextContent message={message} />
        </Flex>
      </Wrapper>
    </SplashWrapper>
  )
}

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
  position: fixed;
  top: 0;
  background: ${colors.black};
`

const Wrapper = styled(Flex)`
  width: 442.879px;
  margin: 0 auto;
  gap: 27px;
`

export default Splash
