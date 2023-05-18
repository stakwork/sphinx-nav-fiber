import { FC } from 'react'
import { CartesianGrid, Dot, DotProps, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { colors } from '~/utils/colors'

export type SentimentData = {
  date: string
  score: number
}

const RenderDot: FC<DotProps> = ({ cx, cy }) => <Dot cx={cx} cy={cy} fill={colors.blueTextAccent} r={2} />

type Props = {
  data?: SentimentData[]
  width?: number
  height?: number
}

export const SentimentChart = ({ data, width = 500, height = 300 }: Props) => (
  <>
    {data?.length && (
      <LineChart
        data={data}
        height={height}
        id="cy-sentiment-chart"
        margin={{
          bottom: 5,
          left: -20,
          right: 30,
          top: 5,
        }}
        width={width}
      >
        <CartesianGrid stroke={colors.lightBlue300} strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={Math.floor(data.length / 3)} stroke={colors.blueTextAccent} />
        <YAxis domain={[0, 10]} stroke={colors.blueTextAccent} />
        <Tooltip />
        <Line dataKey="score" dot={<RenderDot />} stroke="#8884d8" type="monotone" />
      </LineChart>
    )}
  </>
)
