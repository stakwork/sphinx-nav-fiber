import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'

export const TextType = () => {
  const selectedNode = useSelectedNode()

  return (
    <Flex align="center" justify="center" p={12}>
      <Text color="primaryText1" kind="regular">
        {selectedNode?.text}
      </Text>
    </Flex>
  )
}
