import { Tab, Tabs } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'

type Props = { onChange: (value: string) => void; active: string }

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
]

export const ActionsMenu = ({ onChange, active }: Props) => {
  const handleSelect = (event: React.ChangeEvent<unknown>, newValue: number) => {
    onChange(TABS[newValue].value)
  }

  return (
    <Flex>
      <Tabs
        aria-label="scrollable auto tabs example"
        onChange={handleSelect}
        scrollButtons="auto"
        value={TABS.findIndex((i) => i.value === active)}
        variant="scrollable"
      >
        {TABS.map((i) => (
          <StyledTab key={i.value} label={i.label} />
        ))}
      </Tabs>
    </Flex>
  )
}

const StyledTab = styled(Tab)`
  && {
    color: ${colors.white};
  }
`
