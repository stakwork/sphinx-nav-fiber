import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'

export const Person = () => {
  const selectedNode = useSelectedNode()

  const personName = selectedNode?.name || selectedNode?.label

  return (
    <Flex direction="row" px={24} py={16}>
      <Avatar size={80} src={selectedNode?.image_url || 'person_placeholder_img.png'} type="person" />
      <Flex p={20}>
        <Text color="primaryText1" kind="bigHeading">
          {personName}
        </Text>
      </Flex>
    </Flex>
  )
}
