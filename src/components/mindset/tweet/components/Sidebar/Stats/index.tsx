import styled from 'styled-components'
import { Node } from '~/types'
import { colors } from '~/utils/colors'

type Props = {
  node: Node
}

const analyticsMapper = {
  impression_count: { label: 'Impressions', formatter: (value: number) => value.toLocaleString() },
  like_count: { label: 'Likes', formatter: (value: number) => value },
  reply_count: { label: 'Replies', formatter: (value: number) => value },
  retweet_count: { label: 'Retweets', formatter: (value: number) => value },
  quote_count: { label: 'Quotes', formatter: (value: number) => value },
  bookmark_count: { label: 'Bookmarks', formatter: (value: number) => value },
}

export const Stats = ({ node }: Props) => (
  <Card>
    <Title>Analytics</Title>
    <Grid>
      {Object.entries(analyticsMapper).map(([key, { label, formatter }]) =>
        node?.properties?.[key] !== undefined ? (
          <Metric key={key}>
            <span>{label}</span>
            <Value>{formatter(node.properties[key] ?? 0)}</Value>
          </Metric>
        ) : null,
      )}
    </Grid>
  </Card>
)

const Card = styled.div`
  background: ${colors.ANALYTICS_CARD_BG};
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`

const Title = styled.h2`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 16px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.GRAY3};
  font-size: 14px;
`

const Value = styled.span`
  color: ${colors.GRAY6};
`
