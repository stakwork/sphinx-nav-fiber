import { FC } from 'react'
import {
  CartesianGrid,
  Dot,
  DotProps,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useGraphStore'

import { colors } from '~/utils/colors'

const RenderDot: FC<DotProps> = ({ cx, cy }) => <Dot cx={cx} cy={cy} fill={colors.blueTextAccent} r={2} />

export const Data = () => {
  const selectedNode = useSelectedNode()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = [...(((selectedNode as any)?.data as any) || [])].sort((a, b) => (a.year || 0) - (b.year || 0))

  const years = data.map((i) => i.year).filter((i) => i)
  const rates = data.map((i) => i.rate).filter((i) => i)

  return (
    <StyledFlex direction="column" px={24} py={16}>
      {/* <Flex align="center" direction="row" justify="flex-start" p={10}>
        <Text color="primaryText1">{selectedNode?.label}</Text>
      </Flex> */}
      <ResponsiveContainer height="100%" width="100%">
        <ScatterChart margin={{ bottom: 20, left: 20, right: 20, top: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="year"
            domain={[Math.min(...years), Math.max(...years)]}
            label={{
              fill: colors.white,
              fontSize: '12px',
              offset: -10,
              position: 'insideBottom',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value: (selectedNode as any).x_axis_name,
            }}
            name="X"
            tick={{ fill: colors.white, fontSize: '8px' }}
            type="number"
          />
          <YAxis
            color="#000"
            dataKey="rate"
            domain={[Math.min(...rates), Math.max(...rates)]}
            label={{
              angle: -90,
              fill: colors.white,
              fontSize: '12px',
              offset: 0,
              position: 'insideLeft',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value: (selectedNode as any).y_axis_name,
            }}
            name="Y"
            tick={{ fill: colors.white, fontSize: '8px' }}
            type="number"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={data} fill={colors.blueTextAccent} line name="A scatter" shape={<RenderDot />} />
        </ScatterChart>
      </ResponsiveContainer>
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
`
