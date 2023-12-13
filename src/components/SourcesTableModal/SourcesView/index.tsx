import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { QueuedSources } from './QueuedSources'
import { Sources } from './Sources'
import { TopicSources } from './Topics'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Wrapper direction="column">
      <StyledTabs aria-label="basic tabs example" onChange={handleChange} value={value}>
        <StyledTab disableRipple label="Sources table" {...a11yProps(0)} />
        {isAdmin && <StyledTab color={colors.white} disableRipple label="Queued sources" {...a11yProps(1)} />}
        {isAdmin && <StyledTab color={colors.white} disableRipple label="Topics" {...a11yProps(1)} />}
      </StyledTabs>
      <TabPanel index={0} value={value}>
        <Sources />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <QueuedSources />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <TopicSources />
      </TabPanel>
    </Wrapper>
  )
}

const StyledTabs = styled(Tabs)`
  && {
    background: rgba(0, 0, 0, 0.2);

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
