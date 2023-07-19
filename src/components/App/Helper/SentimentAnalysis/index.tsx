import { Stack } from '@mui/material'
import Slider from '@mui/material/Slider'
import { DatePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import { memo, useRef, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Text } from '~/components/common/Text'
import { getSentimentData } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils/colors'
import { executeIfProd } from '~/utils/tests'
import { SentimentChart } from '../../SecondarySidebar/Sentiment/SentimentChart'

type SentimentData = {
  date: string
  score: number
}

// eslint-disable-next-line react/display-name
export const SentimentAnalysis = memo(() => {
  const search = useAppStore((s) => s.currentSearch)
  const [sentimentData, setSentimentData] = useState<SentimentData[] | undefined>(undefined)
  const now = moment().startOf('day')
  const min = moment().subtract(1, 'year')
  const step = 3600 * 24 // day

  const [value, setValue] = useState(moment().startOf('day').subtract(20, 'day'))

  const chartCost = (Math.round((now.unix() - value.unix()) / step) + 1) * 50

  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    if (!search) {
      return
    }

    setIsLoading(true)

    // Wrap for tests
    await executeIfProd(() =>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sphinx.enable(),
    )

    getSentimentData({ topic: search, cutoff_date: String(value.unix()) })
      .then((r) => {
        // eslint-disable-next-line no-console
        console.log(r?.data)

        setSentimentData(
          r?.data
            .filter((i) => i.date)
            .map((i) => ({
              date: moment.unix(Number(String(i.date).split('.')[0])).format('MM/DD/YY'),
              score: i.sentiment_score,
            })),
        )
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false)
      })
  }

  const ref = useRef<HTMLDivElement>(null)

  return (
    <Stack flexGrow={1} p={1} spacing={2} width="100%">
      {isLoading && (
        <Stack alignItems="center" flexGrow={1} p={4} spacing={2} width="100%">
          <PropagateLoader color={colors.white} />
        </Stack>
      )}
      {!isLoading && (
        <ChartWrapper ref={ref}>
          <SentimentChart data={sentimentData} height={280} width={352} />
          {Array.isArray(sentimentData) && !isLoading && !sentimentData.length && <Text>No data for this period</Text>}
        </ChartWrapper>
      )}
      <DatePicker
        format="L"
        label="From"
        maxDate={now}
        minDate={min}
        onChange={(v) => setValue(v ?? moment())}
        sx={{
          background: colors.inputBg1,
          color: 'text.primary',
        }}
        value={value}
      />
      <Slider
        getAriaValueText={(v) => moment(v).format('L')}
        id="cy-sentiment-analysis-slider"
        marks
        max={now.unix()}
        min={min.unix()}
        onChange={(_e, v) => {
          setValue(moment.unix(v as number))
        }}
        step={step}
        value={value.unix()}
        valueLabelDisplay="auto"
        valueLabelFormat={(number) => moment.unix(number).format('L')}
      />
      <StyledButton className="button" id="cy-get-sentiment-analysis-btn" onClick={fetchData}>
        Create a chart for {chartCost.toFixed()} SATS
      </StyledButton>
    </Stack>
  )
})

const ChartWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
`

const StyledButton = styled(Button)`
  height: 48px;
`
