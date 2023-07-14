import { MdAccessTime, MdPlayArrow } from 'react-icons/md'
import styled, { css } from 'styled-components'
import { Booster } from '~/components/Booster'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { ColorName, colors } from '~/utils/colors'
import { formatDescription } from '~/utils/formatDescription'
import { formatTimestamp } from '~/utils/formatTimestamp'

const Wrapper = styled.div.attrs<{ isSelected?: boolean; transparent?: boolean }>(({ isSelected, transparent }) => ({
  wrap: 'wrap',
  background: transparent ? 'none' : 'body',
  direction: 'row',
}))<{ isSelected?: boolean; transparent?: boolean }>`
  cursor: pointer;
  color: ${colors.primaryText1};

  ${({ isSelected }) =>
    !isSelected &&
    css`
      &:hover {
        background: ${colors.dashboardHeader};
      }
    `}
`

type Props = {
  timestamp: NodeExtended
  onClick?: () => void
}

export const Timestamp = ({ onClick, timestamp }: Props) => {
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)
  const isTimestampLoaded = useDataStore((s) => s.isTimestampLoaded)

  const isSelected = !!(selectedTimestamp && selectedTimestamp.timestamp === timestamp.timestamp)

  const color: ColorName = isSelected ? 'blueTextAccent' : 'placeholderText'

  const icon = isSelected ? (
    <MdPlayArrow color={colors[color]} fontSize={18} />
  ) : (
    <MdAccessTime color={colors[color]} fontSize={18} />
  )

  return (
    <Wrapper transparent={true} isSelected={isSelected} onClick={onClick}>
      <Flex direction="column" pb={10}>
        <Flex pt={4} style={{ flexWrap: 'wrap' }}>
          <Text color="primaryText1" kind={isSelected ? 'mediumBold' : 'medium'}>
            {formatDescription(timestamp.description)}
          </Text>

          {timestamp.timestamp && (
            <Flex pt={5} justify="space-between" direction="row">
              <Text color="mainBottomIcons" kind={'regular'}>
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
}
