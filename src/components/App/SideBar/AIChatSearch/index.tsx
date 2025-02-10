import { Button } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import ArrowForwardIcon from '~/components/Icons/ArrowForwardIcon'
import { colors } from '~/utils/colors'

type Props = {
  placeholder?: string
  onSubmit?: (question: string) => void
  onClick?: () => void
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`

const StyledButton = styled(Button)`
  z-index: 2;
  && {
    position: absolute;
    right: 5px;
    height: 32px;
    border-radius: 16px;
    min-width: 32px;
  }

  &&.MuiButton-root {
    padding: 0 10px 0 12px;
  }

  svg {
    margin-top: 1px;
    width: 11px;
    height: 11px;
  }
`

const Input = styled.input.attrs(() => ({
  autoCorrect: 'off',
  autoComplete: 'off',
}))`
  pointer-events: auto;
  height: 40px;
  padding: 0 48px 0 16px;
  z-index: 2;
  width: 100%;
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 200px;
  background: ${colors.BG2};

  -webkit-autofill,
  -webkit-autocomplete,
  -webkit-contacts-auto-fill,
  -webkit-credentials-auto-fill {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
    position: absolute !important;
    right: 0 !important;
  }

  &:focus {
    outline: 1px solid ${colors.primaryBlue};
  }

  &:hover {
    background: ${colors.black};
  }

  &::placeholder {
    color: ${colors.GRAY7};
  }
`

export const AIChatInput = ({ placeholder = 'What do you want to know?', onSubmit, onClick }: Props) => {
  const { register, watch } = useFormContext()
  const typing = watch('aiChat')
  const isTextEntered = typing?.trim().length > 0

  return (
    <InputWrapper onClick={onClick}>
      <Input
        {...register('aiChat')}
        data-testid="ai_chat_input"
        id="ai-chat-input"
        onKeyPress={(event) => {
          if (event.key === 'Enter' && typing?.trim() !== '' && onSubmit) {
            onSubmit(typing)
          }
        }}
        placeholder={placeholder}
        type="text"
      />
      <StyledButton
        color="secondary"
        disabled={!isTextEntered}
        onClick={() => {
          if (isTextEntered && onSubmit) {
            onSubmit(typing)
          }
        }}
        variant="contained"
      >
        <ArrowForwardIcon />
      </StyledButton>
    </InputWrapper>
  )
}
