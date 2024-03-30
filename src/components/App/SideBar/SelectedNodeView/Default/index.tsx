import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'

export const Default = () => {
  const selectedNode = useSelectedNode()

  if (!selectedNode) {
    return null
  }

  const { name } = selectedNode

  return (
    <Flex align="flex-start" basis="100%" direction="column" grow={1} justify="center" shrink={1}>
      <StyledContent grow={1} justify="flex-start" p={12} shrink={1}>
        <Flex>
          <Text color="primaryText1" kind="regular">
            Name:
          </Text>
          <Text color="primaryText1" kind="regular">
            {name}
          </Text>
        </Flex>
      </StyledContent>
    </Flex>
  )
}

const StyledContent = styled(Flex)`
  overflow: auto;
`
