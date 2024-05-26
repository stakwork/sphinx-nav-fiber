import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { MapNodeTypeModalStepID, SelectedValues } from '..'
import { parseJson, parsedObjProps } from '../../BlueprintModal/Body/Editor/utils'

type Props = {
  skipToStep: (step: MapNodeTypeModalStepID) => void
  nodeType: string
  handleSelectType: (val: string) => void
  selectedNodeType: string
  selectedValues: SelectedValues
  setSelectedValues: (values: React.SetStateAction<SelectedValues>) => void
}

export const MapPropertiesStep: FC<Props> = ({
  handleSelectType,
  skipToStep,
  selectedNodeType,
  nodeType,
  selectedValues,
  setSelectedValues,
}) => {
  const [loading, setLoading] = useState(false)
  const [attributes, setAttributes] = useState<parsedObjProps[]>()
  const [selectedAttributes, setSelectedAttributes] = useState<parsedObjProps[]>()

  const { watch } = useFormContext()

  useEffect(() => {
    const init = async (type: string, setter: (data: parsedObjProps[]) => void) => {
      setLoading(true)

      const data = await getNodeType(type)

      const parsedData = parseJson(data)

      setter(parsedData)

      setLoading(false)
    }

    if (nodeType) {
      init(nodeType, setAttributes)
    }

    if (selectedNodeType) {
      init(selectedNodeType, setSelectedAttributes)
    }
  }, [nodeType, selectedNodeType, watch])

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

  const sortedSelectedAttributes = selectedAttributes
    ? [...selectedAttributes].sort((a, b) => {
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

  useEffect(() => {
    if (attributes && selectedAttributes) {
      const initialSelectedValues = selectedAttributes.reduce((acc, attr) => {
        const match = attributes.find((a) => a.key === attr.key)

        acc[attr.key] = match ? attr.key : 'none'

        return acc
      }, {} as SelectedValues)

      setSelectedValues(initialSelectedValues)
    }
  }, [attributes, selectedAttributes, setSelectedValues])

  const handleSelectChange = (key: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [key]: value }))
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
              <SmallHeading>{capitalizeFirstLetter(selectedNodeType)}</SmallHeading>
              {sortedSelectedAttributes.map(({ key }: parsedObjProps) => (
                <AttributeItem key={key}>
                  <Text>{capitalizeFirstLetter(key)}</Text>
                </AttributeItem>
              ))}
            </AttributesContainer>

            <DropdownContainer>
              <SmallHeading>{capitalizeFirstLetter(nodeType)}</SmallHeading>
              {sortedSelectedAttributes.map(({ key }: parsedObjProps) => {
                const selectedValue = selectedValues[key] || 'none'

                const autoCompleteOptions: TAutocompleteOption[] = sortedAttributes
                  .filter((attr) => !Object.values(selectedValues).includes(attr.key) || attr.key === selectedValue)
                  .map((attr) => ({
                    label: capitalizeFirstLetter(attr.key),
                    value: attr.key,
                  }))

                autoCompleteOptions.unshift({ label: 'None', value: 'none' })

                return (
                  <Flex key={key}>
                    <AutoComplete
                      isLoading={loading}
                      onSelect={(option) => handleSelectChange(key, option ? option.value : 'none')}
                      options={autoCompleteOptions}
                      selectedValue={autoCompleteOptions.find((option) => option.value === selectedValue)}
                    />
                  </Flex>
                )
              })}
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
            disabled={loading}
            onClick={() => {
              const allRequiredSet = sortedSelectedAttributes.every(
                ({ key, required }) => !required || (required && selectedValues[key] && selectedValues[key] !== 'none'),
              )

              if (allRequiredSet) {
                skipToStep('createConfirmation')
              } else {
                skipToStep('requiredProperties')
              }
            }}
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
  justify-content: space-between;
`

const AttributesContainer = styled.div`
  flex: 1;
  margin-right: 16px;
`

const AttributeItem = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 38px;
`

const DropdownContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SmallHeading = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  font-family: 'Barlow';
  color: white;
  margin-bottom: 15px;
`
