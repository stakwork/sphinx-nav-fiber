import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { QueuedSources } from './QueuedSources'
import { Sources } from './Sources'
import { TopicSources } from './Topics'
import { QUEUED_SOURCES, SOURCE_TABLE, TOPICS, VIEW_CONTENT } from './constants'
import { Content } from '~/components/SourcesTableModal/SourcesView/Content'
import { isSphinx } from '~/utils/isSphinx'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const tabsData = [
  { label: VIEW_CONTENT, component: Content },
  { label: SOURCE_TABLE, component: Sources },
  { label: QUEUED_SOURCES, component: QueuedSources },
  { label: TOPICS, component: TopicSources },
]

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return value === index ? (
    <TabPanelWrapper
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {children}
    </TabPanelWrapper>
  ) : null
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const SourcesView = () => {
  const [value, setValue] = React.useState(0)
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const [queuedSourcesFlag] = useFeatureFlagStore((s) => [s.queuedSourcesFlag])
  const sphinxEnabled = isSphinx()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabs = tabsData.filter(({ label }) => {
    if (label === TOPICS) {
      return isAdmin
    }

    if (label === QUEUED_SOURCES) {
      return isAdmin && queuedSourcesFlag
    }

    if (label === VIEW_CONTENT) {
      return sphinxEnabled
    }

    return true
  })

  return (
    <Wrapper data-testid="sources-table" direction="column">
      <StyledTabs aria-label="sources tabs" onChange={handleChange} value={value}>
        {tabs.map((tab, index) => (
          <StyledTab key={tab.label} color={colors.white} disableRipple label={tab.label} {...a11yProps(index)} />
        ))}
      </StyledTabs>

      {tabs.map((tab, index) => (
        <TabPanel key={tab.label} index={index} value={value}>
          <tab.component />
        </TabPanel>
      ))}
    </Wrapper>
  )
}

const StyledTabs = styled(Tabs)`
  && {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      background: ${colors.primaryBlue};
    }
  }
`

const StyledTab = styled(Tab)`
  && {
    padding: 30px 0 24px;
    color: ${colors.GRAY6};
    margin-left: 34px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    &.Mui-selected {
      color: ${colors.white};
    }
  }
`

const TabPanelWrapper = styled(Flex)`
  display: flex;
  flex: 1;
  min-height: 572px;
  padding: 20px 0;
  max-height: 572px;
`

const Wrapper = styled(Flex)`
  min-height: 0;
  flex: 1;
`
