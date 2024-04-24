/* eslint-disable react/no-unstable-nested-components */
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { Appearance } from './Appearance'
import { General } from './General'
import { GraphBlueprint } from './GraphBlueprint'

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

type Props = {
  onClose: () => void
}

export const SettingsView: React.FC<Props> = ({ onClose }) => {
  const [value, setValue] = useState(0)
  const [isAdmin] = useUserStore((s) => [s.isAdmin, s.setPubKey])
  const customSchemaFlag = useFeatureFlagStore((s) => s.customSchemaFlag)
  const appMetaData = useAppStore((s) => s.appMetaData)

  const getSettingsLabel = () => (isAdmin ? 'Admin Settings' : 'Settings')

  const SettingsHeader = ({ children }: { children: React.ReactNode }) => (
    <StyledHeader>
      <Flex direction="row" pt={3}>
        <StyledText data-testid="setting-label">{getSettingsLabel()}</StyledText>
      </Flex>
      {children}
    </StyledHeader>
  )

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabs = [
    ...(isAdmin ? [{ label: 'General', component: General }] : []),
    { label: 'Appearance', component: Appearance },
    ...(isAdmin && customSchemaFlag ? [{ label: 'Blueprint', component: GraphBlueprint }] : []),
  ]

  return (
    <Wrapper data-testid="settings-modal" direction="column">
      <SettingsHeader>
        <StyledTabs aria-label="settings tabs" onChange={handleChange} value={value}>
          {tabs.map((tab, index) => (
            <StyledTab key={tab.label} disableRipple label={tab.label} {...a11yProps(index)} />
          ))}
        </StyledTabs>
      </SettingsHeader>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.label} index={index} value={value}>
          {appMetaData && <tab.component initialValues={appMetaData} onClose={onClose} />}
        </TabPanel>
      ))}
    </Wrapper>
  )
}

const StyledTabs = styled(Tabs)`
  && {
    .MuiTabs-indicator {
      background: ${colors.primaryBlue};
    }
    padding-left: 34px;
  }
`

const StyledHeader = styled(Flex)`
  border-radius: 9px 9px 0 0;
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`

const StyledTab = styled(Tab)`
  && {
    min-width: 0;
    width: auto;
    padding: 30px 0 19px;
    color: ${colors.GRAY6};
    margin-right: 87px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${colors.white};
    }
  }
`

const TabPanelWrapper = styled(Flex)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
  overflow: hidden;
  border-radius: 9px;
`

const Wrapper = styled(Flex)`
  min-height: 0;
  flex: 1;
`

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`
