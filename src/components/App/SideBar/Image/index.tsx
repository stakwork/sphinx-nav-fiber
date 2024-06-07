import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useGraphStore'

export const Image = () => {
  const selectedNode = useSelectedNode()

  const imageName = selectedNode?.name

  return (
    <Flex direction="column" px={24} py={16}>
      <Avatar data-testid="person-image" size={80} src={selectedNode?.source_link || ''} type="image" />
      <Flex py={20}>
        <Text color="primaryText1" kind="bigHeading">
          {imageName}
        </Text>
      </Flex>
    </Flex>
  )
}
