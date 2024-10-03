/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'

import { colors } from '~/utils/colors'

export const ColorPicker = () => (
  <Wrapper direction="column" justify="flex-end">
    <TableWrapper align="center" justify="center">
      <p>this is color wrapper</p>
    </TableWrapper>
  </Wrapper>
)

const Wrapper = styled(Flex)`
  flex: 1;

  .title {
    font-size: 20px;
    color: ${colors.white};
    font-family: Barlow;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .subtitle {
    color: ${colors.GRAY3};
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & .filters {
    overflow-x: auto;
  }

  .load-more {
    margin: 8px auto;
    align-self: center;
  }
`

const TableWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
