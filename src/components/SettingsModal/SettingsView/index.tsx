/* eslint-disable react/no-unstable-nested-components */
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TAboutParams, getAboutData } from '~/network/fetchSourcesData'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { UserPermissions } from '../UserPermissions'
import { Appearance } from './Appearance'
import { General } from './General'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const defaultData = {
  description: '',
  mission_statement: '',
  search_term: '',
  title: '',
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
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const [loading, setLoading] = useState(false)
  const [initialValues, setInitialValues] = useState<TAboutParams>(defaultData)

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      try {
        const response = await getAboutData()

        setInitialValues(response)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  const getSettingsLabel = () => (isAdmin ? 'Admin Settings' : 'Settings')

  const SettingsHeader = ({ children }: { children: React.ReactNode }) => (
    <StyledHeader>
      <Flex direction="row" pt={3}>
        <StyledText>{getSettingsLabel()}</StyledText>
      </Flex>
      {children}
    </StyledHeader>
  )

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Wrapper direction="column">
      <SettingsHeader>
        <StyledTabs aria-label="basic tabs example" onChange={handleChange} value={value}>
          {isAdmin && <StyledTab disableRipple label="General" {...a11yProps(0)} />}
          <StyledTab color={colors.white} disableRipple label="Appearance" {...a11yProps(1)} />
          {isAdmin && <StyledTab disableRipple label="User Permissions" {...a11yProps(2)} />}
        </StyledTabs>
      </SettingsHeader>

      <TabPanel index={0} value={value}>
        {!loading ? <General initialValues={initialValues} /> : <></>}
      </TabPanel>
      <TabPanel index={2} value={value}>
        {!loading ? <UserPermissions initialValues={initialValues} /> : <></>}
      </TabPanel>

      <TabPanel index={isAdmin ? 1 : 0} value={value}>
        <Appearance onClose={onClose} />
      </TabPanel>
    </Wrapper>
  )
}

const StyledTabs = styled(Tabs)`
  && {
    .MuiTabs-indicator {
      background: ${colors.primaryBlue};
    }
  }
`

const StyledHeader = styled(Flex)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`

const StyledTab = styled(Tab)`
  && {
    padding: 30px 0 24px;
    color: ${colors.GRAY6};
    margin-left: 36px;
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
