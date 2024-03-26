import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { FormInput } from './FormInput'

interface Props {
  parent?: string
}

export const CreateCustomNodeAttribute: FC<Props> = ({ parent }) => {
  const parentParam = parent?.toLowerCase()

  return (
    <Flex>
      <Flex direction="row" mb={10}>
        <StyledTableHeader style={{ marginRight: 180 }}>Attributes</StyledTableHeader>
        <StyledTableHeader style={{ marginRight: 130 }}>Type</StyledTableHeader>
        <StyledTableHeader>Required</StyledTableHeader>
      </Flex>
      {parentParam && (
        <Flex>
          <FormInput key={parentParam} parentParam={parentParam} />
        </Flex>
      )}
    </Flex>
  )
}

const StyledTableHeader = styled(Text)`
  font-size: 15px;
  color: gray;
`
