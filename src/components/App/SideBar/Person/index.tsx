import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'

export const Person = () => {
  const selectedNode = useSelectedNode()

  return (
    <Flex direction="row" px={24} py={16}>
      <Avatar size={130} src={selectedNode?.image_url || 'person_placeholder2.png'} />
      <Flex p={20}>
        <Text color="primaryText1" kind="bigHeading">
          {selectedNode?.label}
        </Text>
      </Flex>
    </Flex>
  )
}
