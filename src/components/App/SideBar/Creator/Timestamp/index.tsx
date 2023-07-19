import styled from 'styled-components'
import { Booster } from '~/components/Booster'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { formatDescription } from '~/utils/formatDescription'
import { formatTimestamp } from '~/utils/formatTimestamp'

const Wrapper = styled.div.attrs<{ transparent?: boolean }>(({ transparent }) => ({
  wrap: 'wrap',
  background: transparent ? 'none' : 'body',
  direction: 'row',
}))<{ transparent?: boolean }>`
  cursor: pointer;
  color: ${colors.primaryText1};
`

type Props = {
  timestamp: NodeExtended
  onClick?: () => void
}

export const Timestamp = ({ onClick, timestamp }: Props) => (
  <Wrapper onClick={onClick} transparent>
    <Flex direction="column" pb={10}>
      <Flex pt={4} style={{ flexWrap: 'wrap' }}>
        <Text color="primaryText1" kind="medium">
          {formatDescription(timestamp.description)}
        </Text>

        {timestamp.timestamp && (
          <Flex direction="row" justify="space-between" pt={5}>
            <Text color="mainBottomIcons" kind="regular">
              {formatTimestamp(timestamp.timestamp)}
            </Text>

            {!!timestamp.boost && (
              <Flex>
                <Booster count={timestamp.boost} readOnly />
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  </Wrapper>
)
