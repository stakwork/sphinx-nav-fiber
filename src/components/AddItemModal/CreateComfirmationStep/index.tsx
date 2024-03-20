import { FC } from 'react'
import { Flex } from '~/components/common/Flex'
import { postCustomType } from '~/network/fetchSourcesData'
import { AddItemModalStepID } from '..'
import styled from 'styled-components'
import { Text } from '~/components/common/Text'
import { Button } from '@mui/material'

type Props = {
  skipToStep: (step: AddItemModalStepID) => void
  // eslint-disable-next-line react/no-unused-prop-types
  onSelectType: (val: string) => void
  // eslint-disable-next-line react/no-unused-prop-types
  parent?: string
  // eslint-disable-next-line react/no-unused-prop-types
  name?: string
  // eslint-disable-next-line react/no-unused-prop-types
  sourceLink?: string
  // eslint-disable-next-line react/no-unused-prop-types
  type?: string
}

export const CreateConfirmation: FC<Props> = ({ skipToStep, type }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async () => {
    await postCustomType({ type: 'video', parent: 'thing', name: 'big', age: 2 })
  }

  return (
    <Flex>
      <Flex mb={20}>
        <StyledText>Comfirm New Type</StyledText>
      </Flex>
      <Flex mb={25}>
        <StyledText>Type: {type}</StyledText>
      </Flex>
      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('selectParent')} size="large" variant="contained">
            Cancel
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" size="large" type="submit" variant="contained">
            Comfirm
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
