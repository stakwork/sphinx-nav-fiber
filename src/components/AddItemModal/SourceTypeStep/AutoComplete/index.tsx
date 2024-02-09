import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import * as React from 'react'

type TOption = {
  label: string
  value: string
}

const initialValue = {
  label: 'Not selected',
  value: '',
}

const OPTIONS: TOption[] = [
  {
    label: 'Corporation',
    value: 'Corporation',
  },
  {
    label: 'Event',
    value: 'Event',
  },
  {
    label: 'Image',
    value: 'Image',
  },
  {
    label: 'Organization',
    value: 'Organization',
  },
  {
    label: 'Person',
    value: 'Person',
  },
  {
    label: 'Place',
    value: 'Place',
  },
  {
    label: 'Project',
    value: 'Project',
  },
  {
    label: 'Software',
    value: 'Software',
  },
  {
    label: 'Topic',
    value: 'Topic',
  },
  initialValue,
]

type Props = {
  selectedValue?: string
  onSelect: (val: string) => void
}

const defaultProps = {
  options: OPTIONS,
  getOptionLabel: (option: TOption) => option.label,
}

export const AutoComplete: React.FC<Props> = ({ onSelect, selectedValue = '' }) => {
  const [selectedOption, setSelectedOption] = React.useState<TOption>(initialValue)

  React.useEffect(() => {
    setSelectedOption((prevState: TOption) =>
      prevState.value === selectedValue ? prevState : OPTIONS.find((i) => i.value === selectedValue) || initialValue,
    )
  }, [selectedValue])

  return (
    <Stack spacing={1} sx={{ width: 200, zIndex: 1000 }}>
      <Autocomplete
        {...defaultProps}
        blurOnSelect
        disableClearable
        disablePortal
        id="blur-on-select"
        onChange={(event, newValue: TOption | null) => {
          onSelect(newValue?.value || '')
        }}
        renderInput={(params) => <TextField {...params} label="Type" variant="standard" />}
        value={selectedOption || undefined}
      />
    </Stack>
  )
}
