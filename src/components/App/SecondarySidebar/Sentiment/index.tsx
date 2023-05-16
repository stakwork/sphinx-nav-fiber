import moment from 'moment'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getSentimentData } from '~/network/fetchGraphData'
import { FetchSentimentResponse } from '~/types'
import { colors } from '~/utils/colors'
import { SentimentAnalysis } from './SentimentAnalysis'
import { SentimentChart } from './SentimentChart'

type SentimentData = {
  date: string
  score: number
}

export const Sentiment = () => {
  const [sentimentData, setSentimentData] = useState<SentimentData[] | undefined>(undefined)

  useEffect(() => {
    const init = async () => {
      try {
        const data: FetchSentimentResponse = await getSentimentData()

        setSentimentData(
          data?.data
            .filter((i) => i.date)
            .map((i) => ({
              date: moment.unix(Number(String(i.date).split('.')[0])).format('MM/DD/YY'),
              score: i.sentiment_score,
            })),
        )
      } catch (error) {
        console.warn(error)
      }
    }

    init()
  }, [])

  return (
    <ChartWrapper align="flex-start" direction="column" id="cy-sentiment-chart" justify="flex-end">
      <Text className="title">Sentiment chart</Text>
      <SentimentChart data={sentimentData} />
      <SentimentAnalysis />
    </ChartWrapper>
  )
}

const ChartWrapper = styled(Flex)`
  border-radius: 8px;
  background: ${colors.dashboardHeader};
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`
