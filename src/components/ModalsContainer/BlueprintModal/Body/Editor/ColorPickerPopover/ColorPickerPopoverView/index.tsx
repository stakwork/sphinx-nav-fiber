import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import * as React from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import { colors } from '~/utils/colors'
import { ColorPicker } from './ColorPicker'
import { IconPicker } from './IconPicker'

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

export const ColorPickerPopoverView = ({ onClose }: { onClose: () => void }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabs = [
    { label: 'Color', component: ColorPicker },
    { label: 'Icon', component: IconPicker },
  ]

  return (
    <Wrapper direction="column">
      <CloseButton onClick={onClose}>
        <ClearIcon />
      </CloseButton>
      <StyledTabs aria-label="color picker" onChange={handleChange} value={value}>
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
    background: ${colors.modalBg};
    border-radius: 9px 9px 0 0;
    .MuiTabs-indicator {
      width: 40px;
      background: ${colors.primaryBlue};
    }
  }
`

const StyledTab = styled(Tab)`
  && {
    padding: 20px 0 20px;
    color: ${colors.GRAY6};
    margin-left: 30px;
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
  overflow: auto;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    max-height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 300px;
    max-height: 300px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 250px;
    max-height: 250px;
  }
`

const Wrapper = styled(Flex)`
  min-height: 0;
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3px;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 4px;
  right: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  background-color: ${colors.primaryText1};
  border-radius: 50%;
  z-index: 1001;

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`
