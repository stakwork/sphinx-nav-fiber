import { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useGraphData } from '~/components/DataRetriever'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { getSelectedNodeTimestamps } from '~/utils'
import { colors } from '~/utils/colors'
import { EpisodePanel } from './EpisodePanel'

export const CREATOR_HEADING_HEIGHT = 240

const Wrapper = styled(Flex)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${colors.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const Header = styled(Flex)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`

const EpisodeHeaderText = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  max-width: 250px;
  -webkit-box-orient: vertical;
  max-height: calc(2 * 1.5em);
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`

export const Show = () => {
  const [selectedNode, setSelectedNode] = useDataStore((s) => [s.selectedNode, s.setSelectedNode])
  const data = useGraphData()
  const [showHost, setShowHost] = useState<string[]>([])

  const episodes = useMemo(() => {
    const hosts = new Set()
    const children: Record<string, NodeExtended> = {}

    if (selectedNode?.children?.length) {
      selectedNode.children.forEach((childRefId, index) => {
        const timeStamp = getSelectedNodeTimestamps(data?.nodes || [], selectedNode) || []
        const childNode = data?.nodes.find((f) => f.ref_id === childRefId)

        if (childNode) {
          childNode.timestamp = timeStamp[0]?.timestamp

          const host = timeStamp[index]?.hosts?.[0]?.name

          if (host) {
            hosts.add(host)
          }

          children[childRefId] = childNode as NodeExtended

          children[childRefId] = childNode
        }
      })

      const array: string[] = Array.from(hosts) as string[]

      setShowHost(array)
    }

    return Object.values(children)
      .filter((f) => f.node_type === 'episode')
      .sort((a, b) => (b.weight || 0) - (a.weight || 0))
  }, [data?.nodes, selectedNode])

  return (
    <Wrapper>
      <Header>
        <Flex direction="row">
          <Flex pr={24}>
            <Avatar size={80} src={selectedNode?.image_url || 'audio_default.svg'} type="show" />
          </Flex>
          <Flex direction="column">
            <Flex direction="column" grow={1} justify="space-between">
              <Flex align="center" direction="row" justify="flex-start" mb={16}>
                <TypeBadge type="show" />{' '}
                <div className="subtitle">by {showHost.join(', ') || selectedNode?.show_title}</div>
              </Flex>

              <EpisodeHeaderText kind="bigHeading" title={selectedNode?.show_title || 'Unknown'}>
                {selectedNode?.show_title || 'Unknown'}
              </EpisodeHeaderText>
            </Flex>
          </Flex>
        </Flex>
      </Header>

      <Flex direction="column">
        <Flex p={24}>
          <Text className="relatedHeader" kind="medium">
            Related Episodes
          </Text>
        </Flex>
        {episodes.map((node) => (
          <EpisodePanel key={node.ref_id} node={node} onClick={() => setSelectedNode(node)} />
        ))}
      </Flex>
    </Wrapper>
  )
}
