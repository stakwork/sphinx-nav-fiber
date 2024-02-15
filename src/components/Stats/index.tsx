import { noop } from 'lodash'
import { useEffect } from 'react'
import styled from 'styled-components'
import AudioIcon from '~/components/Icons/AudioIcon'
import BudgetIcon from '~/components/Icons/BudgetIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import TwitterIcon from '~/components/Icons/TwitterIcon'
import VideoIcon from '~/components/Icons/VideoIcon'
import { getStats } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { formatNumberWithCommas, formatBudget } from '~/utils'
import { colors } from '~/utils/colors'
import EpisodeIcon from '../Icons/EpisodeIcon'
import { Flex } from '../common/Flex'

export const Stats = () => {
  const [budget] = useUserStore((s) => [s.budget])
  const [stats, setStats] = useDataStore((s) => [s.stats, s.setStats])

  useEffect(() => {
    const run = async () => {
      try {
        const data = await getStats()

        if (data) {
          setStats({
            numAudio: formatNumberWithCommas(data.num_audio),
            numContributors: formatNumberWithCommas(data.num_contributors),
            numDaily: formatNumberWithCommas(data.num_daily),
            numEpisodes: formatNumberWithCommas(data.num_episodes),
            numNodes: formatNumberWithCommas(data.num_nodes),
            numTwitterSpace: formatNumberWithCommas(data.num_twitter_space),
            numVideo: formatNumberWithCommas(data.num_video),
          })
        }
      } catch (e) {
        noop()
      }
    }

    if (!stats) {
      run()
    }
  }, [setStats, stats])

  if (!stats) {
    return null
  }

  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        <Stat>
          <div className="icon">
            <NodesIcon />
          </div>
          <div className="text">{stats.numNodes}</div>
        </Stat>
        <Stat>
          <div className="icon">
            <EpisodeIcon />
          </div>
          <div className="text">{stats.numEpisodes}</div>
        </Stat>
        <Stat>
          <div className="icon">
            <AudioIcon />
          </div>
          <div className="text">{stats.numAudio}</div>
        </Stat>
        <Stat>
          <div className="icon">
            <VideoIcon />
          </div>
          <div className="text">{stats.numVideo}</div>
        </Stat>
        <Stat>
          <div className="icon">
            <TwitterIcon />
          </div>
          <div className="text">{stats.numTwitterSpace}</div>
        </Stat>
      </StatisticsWrapper>
      <StatisticsBudget>
        <Budget>
          <div className="icon">
            <BudgetIcon />
          </div>
          <div className="text">
            <p>
              {`${formatBudget(budget)} `} <span className="budgetUnit">SAT</span>
            </p>
          </div>
        </Budget>
      </StatisticsBudget>
    </StatisticsContainer>
  )
}

const StatisticsWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})``

const StatisticsBudget = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-end',
})``

const StatisticsContainer = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
})`
  justify-content: between;
`

const Stat = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})`
  color: ${colors.white};
  background: ${colors.BG1};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 8px;
  border-radius: 200px;

  &:hover {
    background: ${colors.BUTTON1_PRESS};
  }

  &:active {
    background: ${colors.BUTTON1};
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
  }

  .text {
  }
`

const Budget = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
})`
  display: flex;
  height: 2.5rem;
  padding: 0.75rem 0.9375rem 0.75rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  color: ${colors.white};
  background: ${colors.BG1};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:hover {
    background: ${colors.BUTTON1_PRESS};
  }

  &:active {
    background: ${colors.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .budgetUnit {
    color: ${colors.GRAY6};
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
