import { CircularProgress, Popper } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FC, SyntheticEvent, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { colors } from '~/utils'
import { Flex } from '../Flex'
import { TypeBadge } from '../TypeBadge'

export type TAutocompleteOption = {
  label: string
  value: string
  type?: string
  action?: () => void
}

type Props = {
  options: TAutocompleteOption[] | null
  onSelect: (val: TAutocompleteOption | null) => void
  selectedValue?: TAutocompleteOption | null
  handleInputChange?: (val: string) => void
  isLoading?: boolean
  autoFocus?: boolean
  disabled?: boolean
}

const defaultProps = {
  options: [],
  getOptionLabel: (option: TAutocompleteOption) => option.label,
  handleInputChange: (val: string) => val,
}

export const AutoComplete: FC<Props> = ({
  options,
  onSelect,
  selectedValue = null,
  handleInputChange,
  isLoading = false,
  autoFocus = false,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
      setOpen(true)
    }
  }, [autoFocus])

  const handleChange = (event: ChangeEvent<object>, newValue: TAutocompleteOption | null) => {
    onSelect(newValue)
  }

  return (
    <Stack flexGrow={1} spacing={1}>
      <Autocomplete
        {...defaultProps}
        autoFocus
        autoHighlight
        blurOnSelect
        disableClearable
        disabled={disabled}
        disablePortal
        id="blur-on-select"
        ListboxProps={{
          sx: {
            backgroundColor: colors.DROPDOWN_BG,
            '&::-webkit-scrollbar': {
              width: '3px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundClip: 'padding-box',
              backgroundColor: colors.SCROLL_BAR,
              borderRadius: '6px',
            },
          },
          ref: inputRef,
        }}
        loading={isLoading}
        onChange={handleChange}
        onClose={() => setOpen(false)}
        onInputChange={(e: SyntheticEvent<Element, Event>, val) => handleInputChange?.(val)}
        onOpen={() => setOpen(true)}
        open={open}
        options={options ?? []}
        PopperComponent={({ children, ...popperProps }) => (
          <Popper {...popperProps} placement="bottom-start">
            {children}
          </Popper>
        )}
        renderInput={(params) => (
          <StyledInput
            inputRef={inputRef}
            {...params}
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              endAdornment: (
                <>{isLoading ? <CircularProgress color="inherit" size={20} /> : params.InputProps.endAdornment}</>
              ),
            }}
            size="medium"
            variant="standard"
          />
        )}
        renderOption={(props, option) => (
          <li {...props}>
            <Flex
              align="center"
              data-testid={option.label}
              direction="row"
              grow={1}
              justify="space-between"
              onClick={option?.action}
              shrink={1}
            >
              <div className="option">{option.label !== '' ? option.label : 'Not Selected'}</div>
              {option?.type && <TypeBadge type={option.type} />}
            </Flex>
          </li>
        )}
        sx={{
          '&.MuiAutocomplete-option:hover': {
            backgroundColor: colors.DROPDOWN_HOVER,
          },
          "&.MuiAutocomplete-option[aria-selected='true']": {
            backgroundColor: colors.DROPDOWN_SELECTED,
          },
        }}
        value={selectedValue || undefined}
      />
    </Stack>
  )
}

const StyledInput = styled(TextField)`
  && {
    z-index: 2;
    width: 100%;
    color: #fff;
    font-size: 15px;
    box-shadow: none;
    border-radius: 6px;
    pointer-events: auto;
    background-color: ${colors.BG2};
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 0 8px;

    &:focus,
    &:active {
      color: ${colors.white};
      background-color: ${colors.BG2_ACTIVE_INPUT};
      outline: 1px solid ${colors.primaryBlue};
    }

    &:hover {
      background-color: ${colors.BG2_ACTIVE_INPUT};
      box-shadow: 0 0 0 1px ${colors.primaryBlue};
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

    .MuiInput-input.MuiInputBase-input {
      padding: 8px;
    }

    .MuiInput-root {
      padding: 0;
    }
  }
`
