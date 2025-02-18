import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Node } from '~/types'
import { colors } from '~/utils'

type Props = {
  node: Node
}

const analyticsData = {
  bookmark_count: 0,
  impression_count: 1091,
  like_count: 5,
  quote_count: 0,
  reply_count: 11,
  retweet_count: 0,
}

export const Stats = ({ node }: Props) => (
  <Wrapper>
    {Object.keys(analyticsData).map((i) =>
      node?.properties?.[i] ? (
        <Flex key={i} className="heading">
          {i}: {node?.properties?.[i]}
        </Flex>
      ) : null,
    )}
  </Wrapper>
)

const Wrapper = styled(Flex)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${colors.white};
  background: ${colors.BG1};
  border-radius: 8px;
  padding: 24px;
  overflow-y: auto;
  flex: 1 1 100%;
`
