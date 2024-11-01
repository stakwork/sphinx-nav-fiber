import { Button } from '@mui/material'
import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import styled from 'styled-components'
import { noSpacePattern } from '~/components/AddItemModal/SourceTypeStep/constants'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { colors } from '~/utils'

type Props = {
  onSubmit: () => void
  error?: string
}

export const GraphDetailsStep: FC<Props> = ({ onSubmit, error }) => {
  const {
    formState: { isSubmitting },
    watch,
  } = useFormContext()

  const title = watch('title')
  const description = watch('description')

  const isFormValid = !!title?.trim() && !!description?.trim()

  useEffect(() => {
    const titleInput = document.getElementById('graph-title') as HTMLInputElement

    if (titleInput) {
      titleInput.focus()
    }
  }, [])

  return (
    <Flex>
      <Flex direction="column" justify="space-between">
        <StyledText>Welcome to SecondBrain</StyledText>
        <StyledSubText>Set a name and short description for your graph.</StyledSubText>
      </Flex>

      <StyledWrapper>
        <Flex className="input__wrapper">
          <TextInput
            id="graph-title"
            label="Title"
            maxLength={50}
            name="title"
            placeholder="Type graph title here..."
            rules={{
              ...requiredRule,
              pattern: {
                message: 'No leading whitespace allowed',
                value: noSpacePattern,
              },
            }}
          />
          <TextInput
            id="graph-description"
            label="Description"
            maxLength={100}
            name="description"
            placeholder="Type graph description here..."
            rules={{
              ...requiredRule,
              pattern: {
                message: 'No leading whitespace allowed',
                value: noSpacePattern,
              },
            }}
          />
        </Flex>
      </StyledWrapper>

      <Flex mt={10}>
        <Button
          color="secondary"
          disabled={isSubmitting || !!error || !isFormValid}
          onClick={onSubmit}
          size="large"
          variant="contained"
        >
          Confirm
        </Button>
      </Flex>
      {error ? (
        <StyledError>
          <StyledErrorText>
            <MdError className="errorIcon" />
            <span>{error}</span>
          </StyledErrorText>
        </StyledError>
      ) : null}
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
  margin-bottom: 10px;
`

const StyledSubText = styled(Text)`
  font-size: 14px;
  font-family: 'Barlow';
  margin-bottom: 20px;
`

const StyledWrapper = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 23px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`

const StyledErrorText = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;

  .errorIcon {
    display: block;
    font-size: 13px;
    min-height: 13px;
    min-width: 13px;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    letter-spacing: 0.2px;
    padding-left: 4px;
    font-size: 13px;
    font-family: Barlow;
    line-height: 18px;
  }
`

const StyledError = styled(Flex)`
  display: flex;
  align-items: center;
  color: ${colors.primaryRed};
  position: relative;
  margin-top: 20px;
`
