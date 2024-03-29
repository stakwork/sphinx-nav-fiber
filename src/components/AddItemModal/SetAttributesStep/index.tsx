import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TextInput } from '~/components/common/TextInput'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors, parseJson } from '~/utils'
import { parsedObjProps } from '~/utils/parseJson'
import { AddItemModalStepID } from '..'

type Props = {
  skipToStep: (step: AddItemModalStepID) => void
  nodeType: string
}

export const SetAttributesStep: FC<Props> = ({ skipToStep, nodeType }) => {
  const [loading, setLoading] = useState(false)
  const [attributes, setAttributes] = useState<parsedObjProps[]>()
  const { setValue, register } = useFormContext()

  useEffect(() => {
    const init = async () => {
      setLoading(true)

      const data = await getNodeType(nodeType.toLowerCase())

      const parsedData = parseJson(data)

      setAttributes(parsedData)

      let nodeData = {}

      parsedData.forEach(({ key, required }) => {
        const value = required ? 'Required' : 'Optional'

        setValue(`${key.toLocaleLowerCase()}`, value)

        nodeData = { ...nodeData, [key]: value }
      })

      setValue('node_data', nodeData)

      setLoading(false)
    }

    init()
  }, [nodeType, register, setValue])

  return (
    <Flex>
      <Flex align="center" direction="row" justify="space-between" mb={18}>
        <Flex align="center" direction="row">
          <StyledText>Set Attributes</StyledText>
        </Flex>
      </Flex>

      <StyledWrapper>
        {loading ? (
          <Flex style={{ margin: 'auto' }}>
            <ClipLoader color={colors.SECONDARY_BLUE} />
          </Flex>
        ) : (
          <Flex className="input__wrapper">
            {attributes?.map(({ key }: parsedObjProps) => (
              <>
                <TextFeildWrapper>
                  <Text>{key.replace('_', ' ')}</Text>
                  <TextInput disabled id="item-name" name={key} />
                </TextFeildWrapper>
              </>
            ))}
          </Flex>
        )}
      </StyledWrapper>

      <Flex direction="row">
        <Flex grow={1}>
          <Button color="secondary" onClick={() => skipToStep('sourceType')} size="large" variant="contained">
            Prev
          </Button>
        </Flex>
        <Flex grow={1} ml={20}>
          <Button color="secondary" onClick={() => skipToStep('setBudget')} size="large" variant="contained">
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
  }
`

const TextFeildWrapper = styled(Flex)`
  display: flex;
  gap: 10px;

  #item-name {
    color: ${colors.GRAY7};
    -webkit-text-fill-color: ${colors.GRAY7};
  }
`
