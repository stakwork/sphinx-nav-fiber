import { Button } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { requiredRule } from '~/constants'

type Props = {
  type: string
  sourceLink?: string
  name: string
  onNextStep: () => void
  onPrevStep: () => void
}

export const SourceStep: FC<Props> = ({ type, onNextStep, onPrevStep, name, sourceLink }) => {
  const allowNextStep = type === 'Image' ? name && sourceLink : name

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Add Item</StyledText>
        </Flex>
      </Flex>

      <Flex mb={12}>
        <TextInput
          id="cy-item-name"
          maxLength={250}
          name="name"
          placeholder="Paste name here..."
          rules={{
            ...requiredRule,
          }}
        />
      </Flex>
      {type === 'Image' ? (
        <Flex mb={12}>
          <TextInput
            id="cy-item-link"
            maxLength={250}
            name="sourceLink"
            placeholder="Paste link here..."
            rules={{
              ...requiredRule,
            }}
          />
        </Flex>
      ) : null}
      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={onPrevStep} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" disabled={!allowNextStep} onClick={onNextStep} size="large" variant="contained">
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
