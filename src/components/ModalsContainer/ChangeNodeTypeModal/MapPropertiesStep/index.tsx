import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import {
  parseJson,
  parsedObjProps,
} from '~/components/SettingsModal/SettingsView/GraphBlueprint/BlueprintModal/Body/Editor/utils'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { MapNodeTypeModalStepID } from '..'

type Props = {
  skipToStep: (step: MapNodeTypeModalStepID) => void
  nodeType: string
  handleSelectType: (val: string) => void
}

export const MapPropertiesStep: FC<Props> = ({ handleSelectType, skipToStep, nodeType }) => {
  const [loading, setLoading] = useState(false)
  const [attributes, setAttributes] = useState<parsedObjProps[]>()

  const {
    watch,
    formState: { isValid },
  } = useFormContext()

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      const data = await getNodeType(nodeType)

      const parsedData = parseJson(data)

      setAttributes(parsedData)

      setLoading(false)
    }

    init()
  }, [nodeType, watch])

  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, ' ')

  const sortedAttributes = attributes
    ? [...attributes].sort((a, b) => {
        if (a.required && !b.required) {
          return -1
        }

        if (!a.required && b.required) {
          return 1
        }

        return 0
      })
    : []

  const handlePrevButton = () => {
    handleSelectType('')
    skipToStep('sourceType')
  }

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Map Properties</StyledText>
        </Flex>
      </Flex>

      <StyledWrapper>
        {loading ? (
          <Flex style={{ margin: 'auto' }}>
            <ClipLoader color={colors.SECONDARY_BLUE} />
          </Flex>
        ) : (
          <FlexContainer>
            <AttributesContainer>
              {sortedAttributes?.map(({ key }: parsedObjProps) => (
                <AttributeItem key={key}>
                  <Text>{capitalizeFirstLetter(key)}</Text>
                </AttributeItem>
              ))}
            </AttributesContainer>

            <DropdownContainer>
              {sortedAttributes?.map(({ key }: parsedObjProps) => (
                <SelectInput key={key}>
                  {sortedAttributes.map(({ key: sKey }: parsedObjProps) => (
                    <option key={sKey} value={sKey}>
                      {sKey}
                    </option>
                  ))}
                </SelectInput>
              ))}
            </DropdownContainer>
          </FlexContainer>
        )}
      </StyledWrapper>

      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={handlePrevButton} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button
            color="secondary"
            disabled={!isValid || loading || attributes?.some((attr) => attr.required && !watch(attr.key))}
            onClick={() => skipToStep('source')}
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

const StyledWrapper = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 15px 0;

  .input__wrapper {
    display: flex;
    gap: 15px;
    max-height: 225px;
    overflow-y: auto;
    padding-right: 20px;
    width: calc(100% + 20px);
  }
`

const FlexContainer = styled.div`
  display: flex;
`

const AttributesContainer = styled.div`
  flex: 1;
  margin-right: 16px;
`

const AttributeItem = styled.div`
  margin-bottom: 8px;
`

const DropdownContainer = styled.div`
  width: 200px;
`

const SelectInput = styled.select`
  width: 100%;
  color: #fff;
  font-size: 15px;
  box-shadow: none;
  border-radius: 6px;
  pointer-events: auto;
  background-color: ${colors.BG2};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  padding: 0 8px;
`
