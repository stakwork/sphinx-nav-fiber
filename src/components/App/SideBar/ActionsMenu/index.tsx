import { Tab, Tabs } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

const TABS = [
  {
    label: 'Search Results',
    value: 'searchResults',
  },
  {
    label: 'Teach me',
    value: 'teachMe',
  },
  {
    label: 'Ask question',
    value: 'askQuestion',
  },
  {
    label: 'Sentiment Analysis',
    value: 'sentiment',
  },
] as const

export type TabsVariants = (typeof TABS)[number]['value']

type Props = { onChange: (value: TabsVariants) => void; active: TabsVariants }

export const ActionsMenu = ({ onChange, active }: Props) => {
  const handleSelect = (event: React.ChangeEvent<unknown>, newValue: number) => {
    onChange(TABS[newValue].value)
  }

  return (
    <Flex>
      <StyledTabs
        aria-label="scrollable auto tabs example"
        onChange={handleSelect}
        scrollButtons="auto"
        value={TABS.findIndex((i) => i.value === active)}
        variant="scrollable"
      >
        {TABS.map((i) => (
          <StyledTab key={i.value} id={i.value} label={i.label} />
        ))}
      </StyledTabs>
    </Flex>
  )
}

const StyledTab = styled(Tab)`
  && {
    color: ${colors.white};
  }
`

const StyledTabs = styled(Tabs)`
  && {
    color: ${colors.white};
  }
`
