import styled from 'styled-components'
import { Actions } from '~/components/App/SideBar/Actions'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useSelectedNode } from '~/stores/useDataStore'

export const CREATOR_HEADING_HEIGHT = 240

const Wrapper = styled(Flex)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

export const Heading = () => {
  const selectedNode = useSelectedNode()

  return (
    <Wrapper p={20}>
      <Flex direction="row">
        <Flex grow={1} shrink={1}>
          <Text kind="heading">{selectedNode?.show_title || 'Unknown'}</Text>
          <Flex pt={10}>
            <Text color="mainBottomIcons" kind="regular">
              {selectedNode?.episode_title}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex pb={10} pt={30}>
        <Actions transcript />
      </Flex>
    </Wrapper>
  )
}
