import styled from 'styled-components'
import PlaylistPlayIcon from '~/components/Icons/PlaylistPlayIcon'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { NodeExtended } from '~/types'
import { colors, videoTimeToSeconds } from '~/utils'

type EpisodeProps = {
  node: NodeExtended
  onClick: () => void
}

export const EpisodePanel = ({ node, onClick }: EpisodeProps) => {
  const secs = videoTimeToSeconds(node.timestamp || '')
  const mins = Math.ceil(secs / 60)

  return (
    <EpisodeWrapper onClick={onClick} p={24}>
      <div>
        <Flex align="flex-start" direction="row" justify="flex-start">
          <Flex align="center">
            <Avatar size={64} src={node?.image_url || ''} type={node?.node_type || 'episode'} />
          </Flex>
          <div className="content">
            <Flex align="center" direction="row">
              <TypeBadge type="episode" />
              {mins > 0 && (
                <div className="subtitle">
                  {mins} {mins === 1 ? 'min' : 'mins'}
                </div>
              )}
            </Flex>
            <Text className="title" color="primaryText1" kind="regular">
              {node.episode_title}
            </Text>
          </div>
        </Flex>

        <Flex align="center" direction="row" justify="flex-end" pt={4}>
          <Text className="clipText" color="mainBottomIcons" kind="regular">
            {node?.children?.length || 0} {node?.children?.length === 1 ? 'Clip' : 'Clips'}
          </Text>
          <PlaylistPlayIcon style={{ color: colors.white }} />
        </Flex>
      </div>
    </EpisodeWrapper>
  )
}

const EpisodeWrapper = styled(Flex).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${colors.primaryText1};
  border-bottom: 1px solid #101317;

  .content {
    margin-left: 16px;
    align-self: stretch;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title {
    margin-top: 16px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`
