import { Grid } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { FormInput } from './FormInput'

interface Props {
  parent?: string
}

export const CreateCustomNodeAttribute: FC<Props> = ({ parent }) => {
  const parentParam = parent

  return (
    <Flex>
      <Flex direction="row" mb={10}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <StyledTableHeader style={{ marginRight: 180 }}>Attributes</StyledTableHeader>
          </Grid>
          <Grid item xs={4}>
            <StyledTableHeader style={{ marginRight: 130 }}>Type</StyledTableHeader>
          </Grid>
          <Grid item xs={3}>
            <StyledTableHeader>Required</StyledTableHeader>
          </Grid>
        </Grid>
      </Flex>
      {parentParam && <FormInput key={parentParam} parentParam={parentParam} />}
    </Flex>
  )
}

const StyledTableHeader = styled(Text)`
  font-size: 15px;
  color: gray;
`
