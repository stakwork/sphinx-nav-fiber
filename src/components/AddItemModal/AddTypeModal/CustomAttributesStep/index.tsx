import { Button } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { parseJson, parsedObjProps } from '~/utils/parseJson'
import { FormInput } from './FormInput'

interface Props {
  parent?: string
  typeName: string
}

export const CreateCustomNodeAttribute: FC<Props> = ({ parent, typeName }) => {
  const [schemaData, setSchemaData] = useState<parsedObjProps[]>([])
  const defaultSchemaOptions = { required: false, type: '', key: '' }
  const [loading, setLoading] = useState(true)

  console.log(typeName)

  const addAttributes = () => {
    setSchemaData((prev) => [...(prev ?? []), defaultSchemaOptions])
  }

  const parentParam = parent?.toLowerCase()

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)

        const data = await getNodeType(parentParam as string)

        const parsedData = parseJson(data)

        setSchemaData(parsedData)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [parentParam])

  const updateAttrs = (index: number, values: parsedObjProps) => {
    const newSchemaData = [...schemaData]

    newSchemaData[index] = values

    setSchemaData(newSchemaData)
  }

  return (
    <Flex>
      {loading ? (
        <Flex>
          <ClipLoader color={colors.SECONDARY_BLUE} size="30" />
        </Flex>
      ) : (
        <>
          <Flex direction="row" mb={10}>
            <StyledTableHeader style={{ marginRight: 180 }}>Attributes</StyledTableHeader>
            <StyledTableHeader style={{ marginRight: 130 }}>Type</StyledTableHeader>
            <StyledTableHeader>Required</StyledTableHeader>
          </Flex>
          <Flex direction="column" style={{ maxHeight: '280px', overflow: 'auto' }}>
            {schemaData?.map((k, index) => (
              <FormInput
                key={k.key}
                id={index}
                onUpdate={(values) => {
                  updateAttrs(index, values)
                }}
                values={k}
              />
            ))}
          </Flex>
          <Flex direction="row" grow={1} mt={20}>
            <Button color="secondary" onClick={addAttributes} size="large" variant="contained">
              Add Attributes
            </Button>
          </Flex>
          <Flex direction="row" justify="center" mt={20}>
            <Button onClick={addAttributes} size="large" variant="contained">
              Save
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  )
}

const StyledTableHeader = styled(Text)`
  font-size: 15px;
  color: gray;
`
