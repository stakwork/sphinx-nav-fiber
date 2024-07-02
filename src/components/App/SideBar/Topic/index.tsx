import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useGraphStore'

export const Topic = () => {
  const selectedNode = useSelectedNode()

  return (
    <Flex align="center" justify="center">
      <Text color="primaryText1" kind="hugeHeading">
        {selectedNode?.label}
      </Text>
    </Flex>
  )
}
