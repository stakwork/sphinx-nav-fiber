import { useMemo } from 'react'
import styled from 'styled-components'
import { useGraphData } from '~/components/DataRetriever'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { DateComponent } from '../Creator/DateComponent'

export const CREATOR_HEADING_HEIGHT = 240

const Wrapper = styled(Flex)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  background: ${colors.dashboardHeader};
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

type EpisodeProps = {
  node: NodeExtended
  onClick: () => void
}

const EpisodeWrapper = styled(Flex).attrs(() => ({
  direction: 'row',
}))`
  cursor: pointer;
  color: ${colors.primaryText1};
`

const EpisodePanel = ({ node, onClick }: EpisodeProps) => (
  <EpisodeWrapper onClick={onClick} py={12}>
    <div>
      <DateComponent date={node?.date} />
      <Flex align="center" direction="row">
        <Text color="primaryText1" kind="regular">
          {node.episode_title}
        </Text>
      </Flex>

      <Flex pt={4}>
        <Text color="mainBottomIcons" kind="regular">
          {node?.children?.length || 0} clips
        </Text>
      </Flex>
    </div>
  </EpisodeWrapper>
)

export const Show = () => {
  const [selectedNode, setSelectedNode] = useDataStore((s) => [s.selectedNode, s.setSelectedNode])
  const data = useGraphData()

  const episodes = useMemo(() => {
    const children: Record<string, NodeExtended> = {}

    if (selectedNode?.children?.length) {
      selectedNode.children.forEach((childRefId) => {
        const childNode = data.nodes.find((f) => f.ref_id === childRefId)

        if (childNode) {
          children[childRefId] = childNode
        }
      })
    }

    return Object.values(children)
      .filter((f) => f.node_type === 'episode')
      .sort((a, b) => (b.weight || 0) - (a.weight || 0))
  }, [data.nodes, selectedNode])

  return (
    <Wrapper p={20}>
      {/* <Flex direction="row">
        <Flex pr={24}>
          <Avatar size={80} src={selectedNode?.image_url || 'audio_default.svg'} />
        </Flex>

        <Flex grow={1} shrink={1}>
          <Text kind="bigHeading">{selectedNode?.show_title || 'Unknown'}</Text>

          <Flex py={16}>
            <Actions />
          </Flex>
        </Flex>
      </Flex> */}

      <Flex direction="column">
        <Flex pb={20}>
          <Text kind="mediumBold">Related Episodes</Text>
        </Flex>
        {episodes.map((node) => (
          <EpisodePanel key={node.ref_id} node={node} onClick={() => setSelectedNode(node)} />
        ))}
      </Flex>
    </Wrapper>
  )
}
