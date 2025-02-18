import styled from 'styled-components'
import { Node } from '~/types'

type Props = {
  node: Node
}

export const Stats = ({ node }: Props) => (
  <Card>
    <Title>Analytics</Title>
    <Grid>
      <Metric>
        <span>Impressions</span>
        <Value>{(node.properties?.impression_count ?? 0).toLocaleString()}</Value>
      </Metric>
      <Metric>
        <span>Likes</span>
        <Value>{node.properties?.like_count ?? 0}</Value>
      </Metric>
      <Metric>
        <span>Replies</span>
        <Value>{node.properties?.reply_count ?? 0}</Value>
      </Metric>
      <Metric>
        <span>Retweets</span>
        <Value>{node.properties?.retweet_count ?? 0}</Value>
      </Metric>
      <Metric>
        <span>Quotes</span>
        <Value>{node.properties?.quote_count ?? 0}</Value>
      </Metric>
      <Metric>
        <span>Bookmarks</span>
        <Value>{node.properties?.bookmark_count ?? 0}</Value>
      </Metric>
    </Grid>
  </Card>
)

const Card = styled.div`
  background: #0f1117;
  border-radius: 16px;
  padding: 16px 20px;
  width: 100%;
  max-width: 350px;
`

const Title = styled.h2`
  color: #fff;
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
  color: #9ca3af;
  font-size: 14px;
`

const Value = styled.span`
  color: #e5e7eb;
`
