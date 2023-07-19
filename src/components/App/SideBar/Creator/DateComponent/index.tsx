import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'

const formatDate = (unixTime: number) => {
  const date = new Date(unixTime * 1000) // Convert Unix time to milliseconds

  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} ${day}, ${year}`
}

export const DateComponent = ({ date }: { date: number | undefined }) => {
  if (date) {
    return (
      <Flex>
        <Text color="secondaryText4" kind="regular">
          {formatDate(date)}
        </Text>
      </Flex>
    )
  }

  return null
}
