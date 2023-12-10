/* eslint-disable react/no-unstable-nested-components */
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TAboutParams, getAboutData } from '~/network/fetchSourcesData'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { executeIfProd } from '~/utils/tests'
import { Appearance } from './Appearance'
import { General } from './General'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const admins = [
  '02c431e64078b10925584d64824c9d1d12eca05e2c56660ffa5ac84aa6946adfe5',
  '03a9a8d953fe747d0dd94dd3c567ddc58451101e987e2d2bf7a4d1e10a2c89ff38',
  '024efa31d1e4f98bccc415b222c9d971866013ad6f95f7d1ed9e8be8e3355a36ff',
  '03bfe6723c06fb2b7546df1e8ca1a17ae5c504615da32c945425ccbe8d3ca6260d',
  '024efa31d1e4f98bccc415b222c9d971866013ad6f95f7d1ed9e8be8e3355a36ff',
]

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
  const [setIsAdmin, isAdmin, setPubKey, pubKey] = useUserStore((s) => [s.setIsAdmin, s.isAdmin, s.setPubKey, s.pubKey])
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
        {resolveAdminActions()}
      </Flex>
      {children}
    </StyledHeader>
  )

  const authorize = async () => {
    // skipping this for end to end test because it requires a sphinx-relay to be connected
    await executeIfProd(async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const enable = await sphinx.enable()
        const pubKeyRes = enable?.pubkey

        setPubKey(pubKeyRes)

        if (pubKeyRes) {
          setIsAdmin(pubKeyRes && admins.includes(pubKeyRes))
        }
      } catch (error) {
        console.warn(error)
      }
    })
  }

  const resolveAdminActions = () => {
    if (!pubKey) {
      return (
        <EditButton kind="small" onClick={authorize}>
          Admin
        </EditButton>
      )
    }

    if (pubKey && isAdmin) {
      return null
    }

    return <Text>You are not admin</Text>
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Wrapper direction="column">
      <SettingsHeader>
        <StyledTabs aria-label="basic tabs example" onChange={handleChange} value={value}>
          {isAdmin && <StyledTab disableRipple label="General" {...a11yProps(0)} />}
          <StyledTab color={colors.white} disableRipple label="Appearance" {...a11yProps(1)} />
        </StyledTabs>
      </SettingsHeader>
      {isAdmin && (
        <TabPanel index={0} value={value}>
          {!loading ? <General initialValues={initialValues} /> : <></>}
        </TabPanel>
      )}
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

const EditButton = styled(Button)`
  margin-left: auto;
`
