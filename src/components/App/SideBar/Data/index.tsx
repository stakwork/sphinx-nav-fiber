import { FC } from 'react'
import { CartesianGrid, Dot, DotProps, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

const RenderDot: FC<DotProps> = ({ cx, cy }) => <Dot cx={cx} cy={cy} fill={colors.blueTextAccent} r={2} />

export const Data = () => {
  const selectedNode = useSelectedNode()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = [...(((selectedNode as any)?.data as any) || [])].sort((a, b) => (a.year || 0) - (b.year || 0))

  const years = data.map((i) => i.year)
  const rates = data.map((i) => i.rate)

  return (
    <Flex direction="column" px={24} py={16}>
      <Flex align="center" direction="row" justify="flex-start" p={10}>
        <Text color="primaryText1">{selectedNode?.label}</Text>
      </Flex>
      <ScatterChart height={200} margin={{ bottom: 20, left: 20, right: 20, top: 20 }} width={400}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="year"
          domain={[Math.min(...years), Math.max(...years)]}
          label={{
            fill: '#fff',
            offset: -10,
            position: 'insideBottom',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value: (selectedNode as any).x_axis_name,
          }}
          name="X"
          tick={{ fill: colors.lightBlue300 }}
          type="number"
        />
        <YAxis
          color="#000"
          dataKey="rate"
          domain={[Math.min(...rates), Math.max(...rates)]}
          label={{
            angle: -90,
            fill: '#fff',
            offset: 0,
            position: 'insideLeft',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value: (selectedNode as any).y_axis_name,
          }}
          name="Y"
          tick={{ fill: colors.lightBlue300 }}
          type="number"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill={colors.blueTextAccent} line name="A scatter" shape={<RenderDot />} />
      </ScatterChart>
    </Flex>
  )
}
