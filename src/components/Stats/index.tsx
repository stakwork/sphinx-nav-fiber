import { noop } from 'lodash'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icons } from '~/components/Icons'
import BudgetIcon from '~/components/Icons/BudgetIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { Tooltip } from '~/components/common/ToolTip'
import { getStats, getTotalProcessing } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useUserStore } from '~/stores/useUserStore'
import { TStats } from '~/types'
import { formatBudget, formatStatsResponse } from '~/utils'
import { colors } from '~/utils/colors'
import { Flex } from '../common/Flex'
import { Animation } from './Animation'

export const Stats = () => {
  const [isTotalProcessing, setIsTotalProcessing] = useState(false)
  const [totalProcessing, setTotalProcessing] = useState(0)
  const [budget, setBudget] = useUserStore((s) => [s.budget, s.setBudget])
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const [stats, setStats, fetchData, setAbortRequests] = useDataStore((s) => [
    s.stats,
    s.setStats,
    s.fetchData,
    s.setAbortRequests,
  ])

  const { navigateToNode } = useNodeNavigation()

  const { open: openSourcesModal } = useModal('sourcesTable')

  const fetchProcessingData = async () => {
    try {
      const response = await getTotalProcessing()

      if (response.totalProcessing && response.totalProcessing > 0) {
        setIsTotalProcessing(true)
        setTotalProcessing(response.totalProcessing)
      } else {
        setIsTotalProcessing(false)
      }
    } catch (error) {
      console.error('Error fetching data:', error)

      setIsTotalProcessing(false)
    }
  }

  function handleStatClick(mediaType: string) {
    return

    fetchData(setBudget, setAbortRequests, '', { ...(mediaType ? { media_type: mediaType } : {}), skip_cache: 'true' })

    navigateToNode(null)
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

  useEffect(() => {
    fetchProcessingData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!stats) {
    return null
  }

  const convertToTitleCase = (key: string) => key.replace(/\b\w/g, (char) => char.toUpperCase())

  const generateStatConfigItem = (key: string) => {
    const name = convertToTitleCase(key.split('_')[0])
    const tooltip = name
    const primaryIcon = normalizedSchemasByType[name]?.icon
    const Icon = Icons[primaryIcon as string] || NodesIcon

    return {
      name,
      Icon,
      key,
      dataKey: key,
      mediaType: name,
      tooltip,
    }
  }

  const StatsConfig = Object.keys(stats).map((key) => generateStatConfigItem(key))

  return (
    <StatisticsContainer>
      <StatisticsWrapper>
        {false &&
          stats &&
          StatsConfig.map(({ name, Icon, key, mediaType, tooltip }) =>
            stats && stats[key as keyof TStats] !== 0 ? (
              <Stat key={name} data-testid={mediaType} onClick={() => handleStatClick(mediaType)}>
                <Tooltip content={tooltip} margin="13px">
                  <div className="icon">
                    <Icon />
                  </div>
                  <div className="text">{stats[key as keyof TStats]}</div>
                </Tooltip>
              </Stat>
            ) : null,
          )}
      </StatisticsWrapper>
      <StatisticsBudget>
        {false || isTotalProcessing ? (
          <ViewContent data-testid="view-content" onClick={openSourcesModal}>
            <div className="icon" style={{ marginLeft: '7px' }}>
              <Animation id="lottie-animation" />
            </div>
            <div className="text">
              <p>{totalProcessing}</p>
            </div>
          </ViewContent>
        ) : null}
        <Budget>
          <Tooltip content="Budget" margin="18px">
            <div className="icon">
              <BudgetIcon />
            </div>
            <div className="text">
              <p>
                {`${formatBudget(budget)} `} <span className="budgetUnit">SAT</span>
              </p>
            </div>
          </Tooltip>
        </Budget>
      </StatisticsBudget>
    </StatisticsContainer>
  )
}

const StatisticsWrapper = styled(Flex).attrs({})``
const StatisticsBudget = styled(Flex).attrs({})``

const StatisticsContainer = styled(Flex).attrs({
  direction: 'row',
  grow: 1,
})`
  margin-left: 10px;
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
  height: 32px;
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
    margin-right: 10px;
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

const ViewContent = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
})`
  margin-right: 10px;
  display: flex;
  height: 28px;
  padding: 0.75rem 0.6375rem 0.75rem 0.3187rem;
  align-items: center;
  gap: 4px;
  color: ${colors.white};
  background: ${colors.modalShield};
  font-family: Barlow;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0075rem;
  border-radius: 12.5rem;

  &:active {
    background: ${colors.BUTTON1};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
