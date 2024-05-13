import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'
import { AddItemModalStepID } from '..'

type Props = {
  type: string
  sourceLink?: string
  name: string
  skipToStep: (step: AddItemModalStepID) => void
}

export const SourceStep: FC<Props> = ({ type, skipToStep, name, sourceLink }) => {
  const noSpacePattern = /^[^\s].*$/

  const isValidInput = (input: string | undefined) => noSpacePattern.test(input ?? '')

  const allowNextStep = type === 'Image' ? isValidInput(name) && isValidInput(sourceLink) : isValidInput(name)

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Enter details</StyledText>
        </Flex>
      </Flex>

      <Flex mb={4}>
        <Text>{type} name</Text>
      </Flex>
      <Flex mb={12}>
        <TextInput
          id="cy-item-name"
          maxLength={250}
          name="typeName"
          placeholder="Paste name here..."
          rules={{
            ...requiredRule,
            pattern: {
              message: 'Please avoid special characters and spaces',
              value: noSpacePattern,
            },
          }}
        />
      </Flex>
      {type === 'Image' ? (
        <>
          <Flex mb={4}>
            <Text>Link</Text>
          </Flex>

          <Flex mb={12}>
            <TextInput
              id="cy-item-link"
              maxLength={250}
              name="sourceLink"
              placeholder="Paste link here..."
              rules={{
                ...requiredRule,
                pattern: {
                  message: 'Please avoid special characters and spaces',
                  value: noSpacePattern,
                },
              }}
            />
          </Flex>
        </>
      ) : null}
      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('sourceType')} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button
            color="secondary"
            disabled={!allowNextStep}
            onClick={() => skipToStep('setBudget')}
            size="large"
            variant="contained"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

const StyledText = styled(Text)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`
