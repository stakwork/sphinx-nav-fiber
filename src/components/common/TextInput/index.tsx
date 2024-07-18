import { useEffect, useState } from 'react'
import { Controller, get, RegisterOptions, useFormContext } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import InputMask from 'react-input-mask'
import styled from 'styled-components'
import { BaseTextInput, BaseTextInputProps } from '~/components/BaseTextInput'
import { defaultProps } from '~/components/BaseTextInput/defaultProps'
import { WebTextInput } from '~/components/BaseTextInput/WebTextInput'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import InfoIcon from '~/components/Icons/InfoIcon'
import { colors } from '~/utils/colors'

type WrapperProps = {
  hasContent: boolean
  isFocused: boolean
  hasError: boolean
  isHovered: boolean
}

const getBorderColor = (props: WrapperProps): string => {
  if (props.hasError) {
    return colors.primaryRed
  }

  if (props.hasContent || props.isFocused || props.isHovered) {
    return colors.primaryBlue
  }

  return 'transparent'
}

const Wrapper = styled(Flex)<WrapperProps>`
  background: ${colors.inputBg2};
  border-radius: 8px;
  border: 1px solid ${getBorderColor};
  padding: 12px 8px;
`

type QuestionIconProps = {
  name: string
}

const QuestionIcon = styled(Flex)<QuestionIconProps>`
  cursor: default;
  margin: 0 0 6px 6px;
  position: relative;
  color: ${colors.placeholderText};

  .tooltip {
    position: absolute;
    background-color: ${colors.dashboardHeader};
    border: 1px solid ${colors.secondaryText4};
    border-radius: 4px;
    color: ${colors.white};
    top: 22px;
    padding: 4px 8px;
    font-size: 13px;
    visibility: hidden;
    width: auto;
    white-space: nowrap;
    z-index: 1;
  }

  ${(props) =>
    props.name === 'endTime' &&
    `
    .tooltip {
      left: -68px;
    }
  `}

  &:hover .tooltip {
    visibility: visible;
  }

  &:focus .tooltip {
    visibility: visible;
  }
`

const Label = styled.label`
  color: ${colors.lightGray};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  background: transparent;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
  resize: none;
  font-family: 'Barlow';
  white-space: pre-wrap;
  overflow-wrap: break-word;
  box-sizing: border-box;
  outline: none;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: left;
`

type Props = BaseTextInputProps & {
  id: string
  label?: string
  message?: string
  rules?: RegisterOptions
  mask?: string
  showMask?: boolean
  maskPlaceholder?: string | null
  isTextArea?: boolean
  placeholder?: string
  maxLength?: number
  dataTestId?: string
}

export const TextInput = ({
  id,
  dataTestId,
  label,
  mask = '',
  message,
  name,
  rules,
  showMask = false,
  maskPlaceholder = null,
  isTextArea = false,
  placeholder = '',
  maxLength,
  ...props
}: Props) => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
  } = useFormContext() || {}

  const error = get(errors, name)
  const fieldValue = getValues(name)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  useEffect(() => {
    const inputElement = document.getElementById(id)

    if (inputElement) {
      inputElement.focus()
    }
  }, [id])

  return (
    <Flex shrink={1}>
      <Flex align="center" direction="row">
        {label && <Label htmlFor={id}>{label}</Label>}
        {message && (
          <QuestionIcon name={name} role="tooltip">
            <InfoIcon />
            <div className="tooltip">{message}</div>
          </QuestionIcon>
        )}
      </Flex>
      <Wrapper
        hasContent={!!fieldValue}
        hasError={!!error}
        isFocused={isFocused}
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Controller
          control={control}
          {...register(name)}
          render={({ field: { onBlur, onChange, value, ref } }) => {
            const { disabled = defaultProps.disabled, textAlign = defaultProps.textAlign } = props

            if (isTextArea) {
              return (
                <StyledTextArea
                  ref={ref}
                  data-testid={dataTestId}
                  disabled={disabled}
                  id={id}
                  maxLength={maxLength}
                  onBlur={() => {
                    setIsFocused(false)
                    onBlur()
                  }}
                  onChange={onChange}
                  onFocus={() => setIsFocused(true)}
                  placeholder={placeholder}
                  value={value || ''}
                />
              )
            }

            return mask ? (
              <InputMask
                alwaysShowMask={showMask}
                disabled={false}
                inputRef={ref}
                mask={mask}
                {...register(name)}
                maskPlaceholder={maskPlaceholder}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              >
                <WebTextInput
                  colorName="white"
                  data-testid={dataTestId}
                  disabled={disabled}
                  {...register(name)}
                  id={id}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  placeholderTextColor="inputPlaceholder"
                  textAlign={textAlign}
                />
              </InputMask>
            ) : (
              <BaseTextInput
                {...props}
                colorName="white"
                dataTestId={dataTestId}
                id={id}
                {...register(name)}
                onBlur={() => {
                  setIsFocused(false)
                  onBlur()
                }}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                placeholder={placeholder}
                placeholderTextColor="inputPlaceholder"
                value={value || ''}
              />
            )
          }}
          rules={rules}
        />
      </Wrapper>

      {error && (
        <Flex pl={4} pt={8} shrink={1} tabIndex={0}>
          <Text color="primaryRed" kind="regularBold">
            <Flex align="center" direction="row" shrink={1}>
              <MdError fontSize={18} />
              <Flex pl={4} shrink={1}>
                {error.message !== '' ? error.message : 'Please enter a valid URL'}
              </Flex>
            </Flex>
          </Text>
        </Flex>
      )}
    </Flex>
  )
}
