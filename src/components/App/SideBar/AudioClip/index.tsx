import { memo, useMemo } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { Transcript } from '../Transcript'

const Wrapper = styled(Flex)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  background: ${colors.dashboardHeader};
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

// eslint-disable-next-line no-underscore-dangle
const _AudioClip = () => {
  const selectedNode = useSelectedNode()

  const data = useDataStore((s) => s.data)
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)

  const episodeNode = useMemo(
    () => data?.nodes.find((f) => f?.children?.includes(selectedNode?.ref_id || '') && f.node_type === 'episode'),
    [selectedNode, data?.nodes],
  )

  return (
    <Wrapper p={20}>
      {episodeNode && (
        <Flex
          align="center"
          direction="row"
          onClick={() => {
            setSelectedNode(episodeNode)
          }}
          pb={20}
          style={{ cursor: 'pointer' }}
        >
          <MdArrowBackIosNew color={colors.white} size={15} />
          <Text>&nbsp;See episode</Text>
        </Flex>
      )}
      <Flex>
        <Transcript node={selectedNode} stateless />
      </Flex>
    </Wrapper>
  )
}

export const AudioClip = memo(_AudioClip)
