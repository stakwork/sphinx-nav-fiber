import { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'
import { ChevronRight } from '../Icon/ChevronRight'
import { isValidMediaUrl } from './utils'

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setInputValue(value)
    setError(value !== '' && !isValidMediaUrl(value))
  }

  const handleSubmit = () => {
    if (isValidMediaUrl(inputValue)) {
      console.log('Valid media URL:', inputValue)
    }
  }

  return (
    <Wrapper>
      <Title>Ideas have shapes</Title>
      <InputWrapper>
        <Input
          error={error}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Paste podcast or video link"
          value={inputValue}
        />
        <IconWrapper error={error} onClick={!error ? handleSubmit : undefined}>
          <ChevronRight />
        </IconWrapper>
      </InputWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  background: #16161de3;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  font-family: 'Barlow';
  z-index: 40;
`

const Title = styled(Flex)`
  color: ${colors.white};
  font-family: Barlow;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  max-width: 450px;
  padding: 12px 28px 12px 16px;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.error ? 'red' : colors.DIVIDER_4)};
  background: ${colors.INPUT_BG};
  color: ${colors.white};
  font-family: Barlow;
  font-size: 16px;

  &::placeholder {
    color: ${colors.INPUT_PLACEHOLDER};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? 'red' : colors.primaryBlue)};
  }
`

const InputWrapper = styled.div`
  position: relative;
  width: 450px;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div<{ error?: boolean }>`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${colors.white};
  font-size: 20px;
  cursor: ${(props) => (props.error ? 'not-allowed' : 'pointer')};

  svg {
    width: 8px;
    height: 17px;
    color: ${colors.GRAY6};
  }
`
