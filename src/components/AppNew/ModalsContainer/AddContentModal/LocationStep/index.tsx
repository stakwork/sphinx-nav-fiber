import { Button } from '@mui/material'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { colors } from '~/utils'
import { FormData } from '..'
import { validateLatitude, validateLongitude } from './utils'

const latitudeReg = /^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/
const longitudeReg = /^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/

type Props = {
  latitude?: string
  longitude?: string
  onNextStep: () => void
  form: UseFormReturn<FormData>
}

export const LocationStep: FC<Props> = ({ latitude, longitude, onNextStep, form }) => {
  const handleNextStep = () => {
    const { errors } = form.formState

    if (!Object.keys(errors).length) {
      onNextStep()
    }
  }

  const handleSkip = () => {
    form.setValue('latitude', '')
    form.setValue('longitude', '')
    onNextStep()
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={20}>
        <Flex align="center" direction="row">
          <StyledText>Add Location</StyledText>
        </Flex>
      </Flex>

      <Flex direction="row" mb={20}>
        <Flex basis="100px" grow={1}>
          <TextInput
            id="add-node-latitude"
            label="Latitude"
            message="Enter latitude coordinates"
            name="latitude"
            placeholder="-90 to 90"
            rules={{
              pattern: {
                message: 'Incorrect longitude format',
                value: latitudeReg,
              },
              validate: {
                latitude: validateLatitude,
              },
            }}
          />
        </Flex>

        <Flex basis="100px" grow={1} ml={20}>
          <TextInput
            id="add-node-location-longitude"
            label="Longitude"
            message="Enter longitude coordinates"
            name="longitude"
            placeholder="-180 to 180"
            rules={{
              pattern: {
                message: 'Incorrect longitude format',
                value: longitudeReg,
              },
              validate: {
                longitude: validateLongitude,
              },
            }}
          />
        </Flex>
      </Flex>
      <Flex direction="row">
        <Flex grow={1}>
          <StyledButton color="secondary" disabled={false} onClick={handleSkip} size="large" variant="contained">
            Skip
          </StyledButton>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button
            color="secondary"
            data-testid="skip-location-btn"
            disabled={!latitude || !longitude}
            onClick={handleNextStep}
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

const StyledButton = styled(Button)`
  && {
    background: ${colors.white};
    color: ${colors.BG2};

    &:active,
    &:hover,
    &:focus {
      background: ${colors.white};
      color: ${colors.BG2};
    }
  }
`
