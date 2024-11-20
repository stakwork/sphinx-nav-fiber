import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

export const Header = () => (
  <Head>
    <Text className="title" color="white">
      Graph Mindset
    </Text>
  </Head>
)

const Head = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  height: 64px;
  padding: 20px 23px;
`
