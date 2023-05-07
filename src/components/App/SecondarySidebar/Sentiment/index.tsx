import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import { CartesianGrid, Dot, DotProps, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getSentimentData } from '~/network/fetchGraphData'
import { FetchSentimentResponse } from '~/types'
import { colors } from '~/utils/colors'

type SentimentData = {
  date: string
  score: number
}

const RenderDot: FC<DotProps> = ({ cx, cy }) => <Dot cx={cx} cy={cy} fill={colors.blueTextAccent} r={2} />

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
      {sentimentData?.length && (
        <LineChart
          data={sentimentData}
          height={300}
          margin={{
            bottom: 5,
            left: -20,
            right: 30,
            top: 5,
          }}
          width={500}
        >
          <CartesianGrid stroke={colors.lightBlue300} strokeDasharray="5 5" />
          <XAxis dataKey="date" interval={Math.floor(sentimentData.length / 3)} stroke={colors.blueTextAccent} />
          <YAxis domain={[0, 10]} stroke={colors.blueTextAccent} />
          <Tooltip />
          <Line dataKey="score" dot={<RenderDot />} stroke="#8884d8" type="monotone" />
        </LineChart>
      )}
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
