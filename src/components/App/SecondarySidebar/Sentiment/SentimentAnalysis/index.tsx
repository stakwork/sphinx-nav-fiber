// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Stack } from '@mui/material'
import Slider from '@mui/material/Slider'
import moment from 'moment'
import { memo, useState } from 'react'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { Button } from '~/components/Button'
import { Loader } from '~/components/common/Loader'
import { getSentimentAnalysis } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { SentimentChart } from '../SentimentChart'

type SentimentData = {
  date: string
  score: number
}

// eslint-disable-next-line react/display-name
export const SentimentAnalysis = memo(() => {
  const search = useAppStore((s) => s.currentSearch)
  const [sentimentData, setSentimentData] = useState<SentimentData[] | undefined>(undefined)
  const now = moment()
  const min = moment().subtract(3, 'year')
  const step = 3600 * 24 * 30 // month

  const [value, setValue] = useState(
    moment()
      .subtract(10 * step, 'milliseconds')
      .unix(),
  )

  const [isLoading, setIsLoading] = useState(false)

  const [setSphinxModalOpen] = useDataStore((s) => [s.setSphinxModalOpen])

  const chartCost = (Math.round((now.unix() - value) / step) + 1) * 10

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.s = sphinx

  const fetchData = async () => {
    if (!search) {
      return
    }

    setIsLoading(true)
    setSphinxModalOpen(true)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await sphinx.enable()
    setSphinxModalOpen(false)

    getSentimentAnalysis(search, value).then((r) => {
      // eslint-disable-next-line no-console
      console.log(r.data)

      setSentimentData(
        r?.data
          .filter((i) => i.date)
          .map((i) => ({
            date: moment.unix(Number(String(i.date).split('.')[0])).format('MM/DD/YY'),
            score: i.sentiment_score,
          })),
      )
    })

    setIsLoading(false)
  }

  return (
    <Stack flexGrow={1} spacing={1} width="100%">
      <Slider
        getAriaValueText={(v) => moment(v).format('L')}
        marks
        max={now.unix()}
        min={min.unix()}
        onChange={(_e, v) => setValue(v as number)}
        step={step}
        value={value}
        valueLabelDisplay="auto"
        valueLabelFormat={(number) => moment.unix(number).format('L')}
      />
      <SentimentChart data={sentimentData} />
      <Button onClick={fetchData}>
        Create chart from {moment.unix(value).format('L')} {chartCost.toFixed()} SATS
      </Button>
      {isLoading && <Loader />}
    </Stack>
  )
})
