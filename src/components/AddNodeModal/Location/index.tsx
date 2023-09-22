import { FC, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils/colors'
import { requiredRule } from '..'
import { CheckBoxWrapper } from '../SourceUrl'
import { TextInput } from '../TextInput'

const latitudeReg = /^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/
const longitudeReg = /^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/

type Props = {
  latitude?: string
  longitude?: string
  setValue?: (field: string, value: boolean) => void
}

export const Location: FC<Props> = ({ setValue, latitude, longitude }) => {
  const [enableLocation, setEnableLocation] = useState(false)

  console.log(latitude)
  console.log(longitude)

  const showLocation = () => {
    if (setValue) {
      setValue('withLocation', !enableLocation)
    }

    setEnableLocation(!enableLocation)
  }

  const validateLatitude = (valueString: string) => {
    const value = Number(valueString)

    if (value < -90 || value > 90) {
      return 'Latitude must be between -90 and 90.'
    }

    if (!value && value !== 0) {
      return 'Latitude is required.'
    }

    return true
  }

  const validateLongitude = (value: number) => {
    if (value < -180 || value > 180) {
      return 'Longitude must be between -180 and 180.'
    }

    if (!value && value !== 0) {
      return 'Longitude is required.'
    }

    return true
  }

  return (
    <>
      <Flex direction="row" pt={12}>
        <CheckBoxWrapper>
          Add location
          <button className="checkbox" id="add-node-location-checkbox" onClick={showLocation} type="button">
            {enableLocation && <FaCheck color={colors.lightBlue500} />}
          </button>
        </CheckBoxWrapper>
      </Flex>

      {enableLocation && (
        <>
          <Flex direction="row" pt={12}>
            <Flex basis="50%" pr={16}>
              <TextInput
                id="add-node-latitude"
                label="Latitude"
                message="Enter latitude coordinates"
                name="latitude"
                placeholder="Enter latitude (-90 to 90)"
                rules={{
                  ...requiredRule,
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

            <Flex basis="50%" pl={16}>
              <TextInput
                id="add-node-location-longitude"
                label="Longitude"
                message="Enter longitude coordinates"
                name="longitude"
                placeholder="Enter longitude (-180 to 180)"
                rules={{
                  ...requiredRule,
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
        </>
      )}
    </>
  )
}
