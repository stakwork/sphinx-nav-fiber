import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils'

export const CREATOR_HEADING_HEIGHT = 240

const Wrapper = styled(Flex)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${colors.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${colors.white};
      margin-left: 8px;
    }
  }
`

export const Heading = ({ selectedNodeShow }: { selectedNodeShow: NodeExtended | undefined }) => {
  const [selectedNode, setSelectedNode] = useDataStore((s) => [s.selectedNode, s.setSelectedNode])
  const { type } = selectedNode || {}
  const searchTerm = useAppStore((s) => s.currentSearch)

  return (
    <Wrapper p={20}>
      <Flex align="flex-start">{type && <TypeBadge type={type} />}</Flex>
      <Flex direction="row" mb={22} mt={22}>
        <Flex grow={1} shrink={1}>
          <Text className="episode-title" kind="heading">
            {highlightSearchTerm(selectedNode?.episode_title || 'Unknown', searchTerm)}
          </Text>
        </Flex>
      </Flex>

      {selectedNodeShow ? (
        <Flex className="show" direction="row" onClick={() => setSelectedNode(selectedNodeShow)}>
          <Avatar size={16} src={selectedNodeShow?.image_url || ''} type="show" />
          <Text className="show__title" color="mainBottomIcons" kind="regular">
            {selectedNodeShow?.show_title}
          </Text>
        </Flex>
      ) : null}
    </Wrapper>
  )
}
