import { noop } from 'lodash'
import { useEffect } from 'react'
import styled from 'styled-components'
import AudioIcon from '~/components/Icons/AudioIcon'
import BudgetIcon from '~/components/Icons/BudgetIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import TwitterIcon from '~/components/Icons/TwitterIcon'
import VideoIcon from '~/components/Icons/VideoIcon'
import { getStats, TStatParams } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { TStats } from '~/types'
import { formatBudget, formatStatsResponse } from '~/utils'
import { colors } from '~/utils/colors'
import { Flex } from '../common/Flex'
import DocumentIcon from '../Icons/DocumentIcon'
import EpisodeIcon from '../Icons/EpisodeIcon'

interface StatConfigItem {
  name: string
  icon: JSX.Element
  key: keyof TStats
  dataKey: keyof TStatParams
  mediaType: string
}

export const StatsConfig: StatConfigItem[] = [
  {
    name: 'Nodes',
    icon: <NodesIcon />,
    key: 'numNodes',
    dataKey: 'num_nodes',
    mediaType: '',
  },
  {
    name: 'Episodes',
    icon: <EpisodeIcon />,
    key: 'numEpisodes',
    dataKey: 'num_episodes',
    mediaType: 'episode',
  },
  {
    name: 'Audio',
    icon: <AudioIcon />,
    key: 'numAudio',
    dataKey: 'num_audio',
    mediaType: 'audio',
  },
  {
    name: 'Video',
    icon: <VideoIcon />,
    key: 'numVideo',
    dataKey: 'num_video',
    mediaType: 'video',
  },
  {
    name: 'Twitter Spaces',
    icon: <TwitterIcon />,
    key: 'numTwitterSpace',
    dataKey: 'num_tweet',
    mediaType: 'twitter',
  },
  {
    name: 'Document',
    icon: <DocumentIcon />,
    key: 'numDocuments',
    dataKey: 'num_documents',
    mediaType: 'document',
  },
]

export const Stats = () => {
  const [budget, setBudget] = useUserStore((s) => [s.budget, s.setBudget])
  const [stats, setStats, fetchData] = useDataStore((s) => [s.stats, s.setStats, s.fetchData])

  function handleStatClick(mediaType: string) {
    fetchData(setBudget, { ...(mediaType ? { media_type: mediaType } : {}), skip_cache: 'true' })
  }

  useEffect(() => {
    const run = async () => {
      try {
        const data = await getStats()

        if (data) {
          const updatedStats = formatStatsResponse(data)

          setStats(updatedStats)
        }
      } catch (e) {
        noop()
      }
    }

    if (!stats) {
      run()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStats, stats])

  if (!stats) {
    return null
  }

  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        {StatsConfig.map(({ name, icon, key, mediaType }) =>
          stats[key as keyof TStats] !== '0' ? (
            <Stat key={name} data-testid={mediaType} onClick={() => handleStatClick(mediaType)}>
              <div className="icon">{icon}</div>
              <div className="text">{stats[key as keyof TStats]}</div>
            </Stat>
          ) : (
            <></>
          ),
        )}
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
  cursor: pointer;

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
