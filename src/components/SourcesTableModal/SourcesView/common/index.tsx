import { Button, TableCell, TableHead, TableRow } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils/colors'

export const StyledTableCell = styled(TableCell)`
  && {
    color: ${colors.white};
    border: none;
    padding: 6px 27px 6px 0;
    color: ${colors.GRAY3};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.empty {
    width: 36px;
    padding: 0;
  }
`

export const StyledTableRow = styled(TableRow)`
  && {
    height: 48px;
    padding: 0 36px;
  }
  &:nth-child(odd) {
    background-color: ${colors.BG3};
  }
`

export const StyledTableHead = styled(TableHead)`
  && {
    border-bottom: 1px solid ${colors.black};
  }

  ${StyledTableCell} {
    color: ${colors.white};
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 163.636% */
    letter-spacing: 1.1px;
    text-transform: uppercase;
  }
`

export const StyledPill = styled(Button)`
  &.selected {
    background: ${colors.white};
    color: ${colors.BG1};
    pointer-events: none;
  }

  & + & {
    margin-left: 16px;
  }
`

export const Heading = styled(Flex)`
  margin-bottom: 16px;
  padding: 0 36px;
  ${Text} {
    margin-bottom: 0;
  }
`
