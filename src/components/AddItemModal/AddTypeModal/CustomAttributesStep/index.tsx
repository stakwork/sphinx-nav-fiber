import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { getNodeType } from '~/network/fetchSourcesData'
import { colors } from '~/utils'
import { parseJson } from '~/utils/parseJson'
import { FormData } from '..'
import { FormInput } from './FormInput'

interface Props {
  parent?: string
}

export const CreateCustomNodeAttribute: FC<Props> = ({ parent }) => {
  const [loading, setLoading] = useState(true)

  const { setValue } = useFormContext<FormData>()

  const parentParam = parent?.toLowerCase()

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)

        const data = await getNodeType(parentParam as string)

        const parsedData = parseJson(data)

        parsedData.forEach((item, index) => {
          Object.entries(item).forEach(([key, value]) => {
            if (value !== undefined) {
              setValue(`attrs[${index}].${key}` as string, String(value))
            }
          })
        })
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [parentParam, setValue])

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
          <Flex>
            <FormInput />
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
