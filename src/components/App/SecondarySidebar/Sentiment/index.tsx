import moment from 'moment'
import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getSentimentData } from '~/network/sentiments'

import { Stack } from '@mui/material'
import { PropagateLoader } from 'react-spinners'
import { Button } from '~/components/Button'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { updateBudget } from '~/utils/setBudget'
import { SentimentChart } from './SentimentChart'

type SentimentData = {
  date: string
  score: number
}

export const Sentiment = () => {
  const [sentimentData, setSentimentData] = useState<SentimentData[] | undefined>(undefined)
  const [setBudget] = useUserStore((s) => [s.setBudget])

  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)

    getSentimentData(setBudget)
      .then(async (r) => {
        setSentimentData(
          r?.data
            .filter((i) => i.date)
            .map((i) => ({
              date: moment.unix(Number(String(i.date).split('.')[0])).format('MM/DD/YY'),
              score: i.sentiment_score,
            })),
        )

        await updateBudget(setBudget)
      })
      .catch()
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <ChartWrapper align="flex-start" direction="column" id="cy-sentiment-chart-wrapper" justify="flex-end">
      <Text className="title">Sentiment chart</Text>
      {isLoading && (
        <Stack alignItems="center" component="div" flexGrow={1} p={4} spacing={2} width="100%">
          <PropagateLoader color={colors.white} />
        </Stack>
      )}
      {!sentimentData?.length && (
        <StyledButton className="button" id="cy-get-sentiments-btn" onClick={fetchData}>
          Get top 100 sentiments
        </StyledButton>
      )}
      <SentimentChart data={sentimentData} />
    </ChartWrapper>
  )
}

const ChartWrapper = styled(Flex)`
  border-radius: 8px;
  box-shadow: 0px 5px 6px rgb(0 0 0 / 50%);
  padding: 16px;

  .title {
    margin-bottom: 16px;
    font-size: 20px;
  }
`

const StyledButton = styled(Button)`
  height: 48px;
`
