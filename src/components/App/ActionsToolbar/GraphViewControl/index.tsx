import clsx from 'clsx'
import { ReactElement } from 'react'
import styled from 'styled-components'
import BubbleChartIcon from '~/components/Icons/BubbleChartIcon'
import CommunitiesIcon from '~/components/Icons/CommunitiesIcon'
import GrainIcon from '~/components/Icons/GrainIcon'
import PublicIcon from '~/components/Icons/PublicIcon'
import { Flex } from '~/components/common/Flex'
import { GraphStyle, graphStyles, useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'

interface IconsMapper {
  split: ReactElement
  force: ReactElement
  sphere: ReactElement
  earth: ReactElement
}

const IconsMapper = {
  split: <GrainIcon />,
  force: <CommunitiesIcon />,
  sphere: <BubbleChartIcon />,
  earth: <PublicIcon />,
}

export const GraphViewControl = () => {
  const [graphStyle, setGraphStyle] = useDataStore((s) => [s.graphStyle, s.setGraphStyle])

  const changeGraphType = (val: GraphStyle) => {
    setGraphStyle(val)
  }

  return (
    <Wrapper direction="column">
      {graphStyles.map((i) => (
        <Flex key={i} className={clsx('icon', { active: graphStyle === i })} onClick={() => changeGraphType(i)}>
          {IconsMapper[i]}
        </Flex>
      ))}
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
