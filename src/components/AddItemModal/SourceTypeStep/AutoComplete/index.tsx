import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import styled from 'styled-components'
import { colors } from '~/utils'

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
    <Stack spacing={1} sx={{ width: 400 }}>
      <Autocomplete
        {...defaultProps}
        autoFocus
        autoHighlight
        blurOnSelect
        disableClearable
        disablePortal
        id="blur-on-select"
        onChange={(event, newValue: TOption | null) => {
          onSelect(newValue?.value || '')
        }}
        renderInput={(params) => (
          <StyledInput
            {...params}
            InputProps={{ ...params.InputProps, disableUnderline: true }}
            label="Type"
            variant="standard"
          />
        )}
        value={selectedOption || undefined}
      />
    </Stack>
  )
}

const StyledInput = styled(TextField)`
  .MuiInputBase-input {
    z-index: 2;
    width: 100%;
    height: 48px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    box-shadow: none;
    border-radius: 6px;
    pointer-events: auto;
    background-color: ${colors.BG2};
    padding: 0px 8px 0px 16px !important;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.BG2_ACTIVE_INPUT};
      outline: 1px solid ${colors.primaryBlue};
    }

    &:hover {
      background-color: ${colors.BG2_ACTIVE_INPUT};
    }

    &::placeholder {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      font-family: Barlow;
      color: ${colors.GRAY7};
    }
  }
  width: 100%;
`
