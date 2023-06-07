import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Sources } from './Sources'
import { colors } from '~/utils/colors'
import { QueuedSources } from './QueuedSources'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Wrapper direction="column">
      <Tabs aria-label="basic tabs example" onChange={handleChange} value={value}>
        <StyledTab label="Sources table" {...a11yProps(0)} />
        <StyledTab color={colors.white} label="Queued sources" {...a11yProps(1)} />
      </Tabs>
      <TabPanel index={0} value={value}>
        <Sources />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <QueuedSources />
      </TabPanel>
    </Wrapper>
  )
}

const StyledTab = styled(Tab)`
  && {
    color: ${colors.white};
  }
`

const TabPanelWrapper = styled(Flex)`
  display: flex;
  flex: 1;
  min-height: 0;
`

const Wrapper = styled(Flex)`
  min-height: 0;
  flex: 1;
`
