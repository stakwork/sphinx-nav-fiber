import { Table as MaterialTable, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import * as sphinx from 'sphinx-bridge'
import styled from 'styled-components'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import ConfirmPopover from '~/components/common/ConfirmPopover'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { approveRadarData, deleteRadarData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { Sources } from '~/types'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead, StyledTableRow } from '../../common'
import { TWITTER_LINK, sourcesMapper } from '../../constants'
import { Props } from '../../types'

const Table: React.FC<Props> = ({ data }) => {
  const setSources = useDataStore((s) => s.setQueuedSources)

  const [loadingId, setLoadingId] = useState('')

  const handleApprove = async (id: string) => {
    if (data?.length) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const enable = await sphinx.enable()

        await approveRadarData(id, enable.pubkey)

        setSources(data.filter((i: Sources) => i.ref_id !== id))
      } catch (error) {
        console.warn(error)
      }
    }
  }

  const handleRemove = async (id: string) => {
    if (!id || !data?.length) {
      return
    }

    setLoadingId(id)

    try {
      await deleteRadarData(id)
      setSources(data?.filter((i) => i.ref_id !== id))
    } catch (error) {
      console.warn(error)
    } finally {
      setLoadingId('')
    }
  }

  return !data?.length ? (
    <Flex>
      <Text>There are no results for selected filters</Text>
      <FilterOffIcon />
    </Flex>
  ) : (
    <MaterialTable component="table">
      <StyledTableHead>
        <TableRow component="tr">
          <StyledTableCell className="empty" />
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell>Source</StyledTableCell>
          <StyledTableCell />
          <StyledTableCell className="empty" />
        </TableRow>
      </StyledTableHead>
      {data?.length && (
        <tbody>
          {data?.map((i: Sources) => (
            <StyledTableRow key={i.source}>
              <StyledTableCell className="empty" />
              <StyledTableCell>{sourcesMapper[i.source_type]}</StyledTableCell>
              <StyledTableCell width="268px">
                {i.source_type === 'twitter_handle' ? (
                  <StyledLink href={`${TWITTER_LINK}/${i.source}?open=system`} target="_blank">
                    @{i.source}
                  </StyledLink>
                ) : (
                  <StyledLink href={`${i.source}?open=system`} target="_blank">
                    {i.source}
                  </StyledLink>
                )}
              </StyledTableCell>
              <StyledTableCell className="cell-center">
                <Flex direction="row" justify="space-between">
                  <div className="approve-wrapper">
                    <IconWrapper className="centered" onClick={() => handleApprove(i.ref_id)}>
                      <MdCheckCircle color={colors.primaryGreen} fontSize={24} />
                    </IconWrapper>
                  </div>
                  <div className="delete-wrapper">
                    {loadingId === i.ref_id ? (
                      <ClipLoader color={colors.white} size={16} />
                    ) : (
                      <ConfirmPopover message="Are you sure ?" onConfirm={() => handleRemove(i.ref_id)}>
                        <IconWrapper className="centered">
                          <MdCancel color={colors.primaryRed} fontSize={24} />
                        </IconWrapper>
                      </ConfirmPopover>
                    )}
                  </div>
                </Flex>
              </StyledTableCell>
              <StyledTableCell className="empty" />
            </StyledTableRow>
          ))}
        </tbody>
      )}
    </MaterialTable>
  )
}

export default Table

const IconWrapper = styled(Flex)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  color: ${colors.lightBlue500};
  &.centered {
    margin: 0 auto;
  }

  & + & {
    margin-left: 4px;
  }
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  &:visited {
    color: ${colors.white};
  }
  &:hover {
    cursor: pointer;
  }
`
