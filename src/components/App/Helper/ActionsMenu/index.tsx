import { Chip, styled } from '@mui/material'
import { Stack } from '@mui/system'
import { TABS, TabsVariants } from '../const'

type Props = { onChange: (value: TabsVariants) => void; active: TabsVariants | null }

export const ActionsMenu = ({ onChange, active }: Props) => {
  const handleSelect = (event: React.ChangeEvent<unknown>, newValue: number) => {
    onChange(TABS[newValue].value)
  }

  if (!active) {
    return (
      <Stack flexGrow={1} id="cy-helper-menu" justifyContent="flex-end" mb={1} spacing={1}>
        {TABS.map((tab, index) => (
          <Chip key={tab.value} id={tab.value} label={tab.label} onClick={(e) => handleSelect(e, index)} />
        ))}
      </Stack>
    )
  }

  return (
    <MenuWrapper direction="row" id="cy-helper-menu" maxWidth="100%" mb={3} overflow="auto" spacing={1}>
      {TABS.map((tab, index) => (
        <Chip
          key={tab.value}
          color={tab.value === active ? 'primary' : 'default'}
          id={tab.value}
          label={tab.label}
          onClick={(e) => handleSelect(e, index)}
        />
      ))}
    </MenuWrapper>
  )
}

const MenuWrapper = styled(Stack)(() => ({
  '&::-webkit-scrollbar': {
    width: '1px',
    height: '4px',
  },

  '&::-webkit-scrollbar-thumb': {
    width: '1px',
    height: '4px',
  },
}))
