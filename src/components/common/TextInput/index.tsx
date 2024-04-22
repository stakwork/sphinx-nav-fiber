import { useEffect } from 'react'
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

const Wrapper = styled(Flex).attrs({
  background: 'inputBg2',
  px: 8,
  py: 12,
})`
  border-radius: 8px;
`

type QuestionIconProps = {
  name: string
}

type Props = BaseTextInputProps & {
  id: string
  label?: string
  message?: string
  rules?: RegisterOptions
  mask?: string
  showMask?: boolean
  maskPlaceholder?: string | null
}

export const TextInput = ({
  id,
  label,
  mask = '',
  message,
  name,
  rules,
  showMask = false,
  maskPlaceholder = null,
  ...props
}: Props) => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
  } = useFormContext() || {}

  const error = get(errors, name)
  const feildValue = getValues(name)

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
      <Wrapper>
        <Controller
          control={control}
          {...register(name)}
          render={({ field: { onBlur, onChange, value, ref } }) => {
            const { disabled = defaultProps.disabled, textAlign = defaultProps.textAlign } = props

            return mask ? (
              <InputMask
                alwaysShowMask={showMask}
                disabled={false}
                inputRef={ref}
                mask={mask}
                {...register(name)}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore: maskPlaceholder prop exist, but is not added to types
                maskPlaceholder={maskPlaceholder}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              >
                <WebTextInput
                  colorName="white"
                  disabled={disabled}
                  {...register(name)}
                  id={id}
                  placeholderTextColor="inputPlaceholder"
                  textAlign={textAlign}
                />
              </InputMask>
            ) : (
              <BaseTextInput
                {...props}
                colorName="white"
                id={id}
                {...register(name)}
                onBlur={onBlur}
                onChange={onChange}
                placeholderTextColor="inputPlaceholder"
                value={value || ''}
              />
            )
          }}
          rules={rules}
        />
      </Wrapper>

      {feildValue && error && (
        <Flex pl={4} pt={8} shrink={1} tabIndex={0}>
          <Text color="primaryRed" kind="regularBold">
            <Flex align="center" direction="row" shrink={1}>
              <MdError fontSize={18} />

              <Flex pl={4} shrink={1}>
                {error.message}
              </Flex>
            </Flex>
          </Text>
        </Flex>
      )}
    </Flex>
  )
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
    width: 175px;
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
