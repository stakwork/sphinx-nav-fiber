import clsx from 'clsx'
import { ReactElement } from 'react'
import styled from 'styled-components'
import BubbleChartIcon from '~/components/Icons/BubbleChartIcon'
import CommunitiesIcon from '~/components/Icons/CommunitiesIcon'
import GrainIcon from '~/components/Icons/GrainIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import PublicIcon from '~/components/Icons/PublicIcon'
import { Flex } from '~/components/common/Flex'
import { GraphStyle, graphStyles, useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'

interface IconsMapper {
  split: ReactElement
  force: ReactElement
  sphere: ReactElement
  earth: ReactElement
  v2: ReactElement
}

const IconsMapper = {
  split: <GrainIcon />,
  force: <CommunitiesIcon />,
  sphere: <BubbleChartIcon />,
  earth: <PublicIcon />,
  v2: <NodesIcon />,
}

export const GraphViewControl = () => {
  const [graphStyle, setGraphStyle] = useDataStore((s) => [s.graphStyle, s.setGraphStyle])
  const [v2FeatureFlag, setV2FeatureFlag] = useFeatureFlagStore((s) => [s.v2FeatureFlag, s.setV2FeatureFlag])
  const [isAdmin] = useUserStore((s) => [s.isAdmin])

  const changeGraphType = (val: GraphStyle) => {
    setGraphStyle(val)
    setV2FeatureFlag(false)
  }

  return (
    <Wrapper direction="column">
      {graphStyles.map((i) => (
        <Flex
          key={i}
          className={clsx('icon', { active: graphStyle === i && !v2FeatureFlag })}
          onClick={() => changeGraphType(i)}
        >
          {IconsMapper[i]}
        </Flex>
      ))}
      {isAdmin && (
        <Flex className={clsx('icon', { active: v2FeatureFlag })} onClick={() => setV2FeatureFlag(true)}>
          {IconsMapper.v2}
        </Flex>
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  padding: 6px 6px 6px 11px;
  background: ${colors.BG1};
  border-radius: 200px;
  margin-top: 16px;
  .icon {
    color: ${colors.GRAY6};
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: ${colors.GRAY3};
    }

    &:active {
      color: ${colors.white};
    }

    &.active {
      color: ${colors.white};
    }
  }

  .icon + .icon {
    margin-left: 20px;
  }
`
