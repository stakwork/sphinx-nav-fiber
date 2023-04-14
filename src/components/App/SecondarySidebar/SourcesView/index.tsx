import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Sources } from './Sources'
import { colors } from '~/utils/colors'
import { QueuedSources } from './QueuedSources'
import styled from 'styled-components'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  )
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
    <div>
      <div>
        <Tabs aria-label="basic tabs example" onChange={handleChange} value={value}>
          <StyledTab label="Sources table" {...a11yProps(0)} />
          <StyledTab color={colors.white} label="Queued sources" {...a11yProps(1)} />
        </Tabs>
      </div>
      <TabPanel index={0} value={value}>
        <Sources />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <QueuedSources />
      </TabPanel>
    </div>
  )
}

const StyledTab = styled(Tab)`
  && {
    color: ${colors.white};
  }
`
