import { Table as MaterialTable, TableRow } from '@mui/material'
import moment from 'moment'
import React, { useState } from 'react'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { putNodeData } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead, StyledTableRow } from '../../common'
import { TopicTableProps } from '../../types'

const Table: React.FC<TopicTableProps> = ({ data, showMuted }) => {
  const [setTopics] = useDataStore((s) => [s.setTopics])
  const [loadingId, setLoadingId] = useState('')

  const handleMute = async (refId: string, shouldMute: boolean) => {
    if (data?.length) {
      setLoadingId(refId)

      try {
        await putNodeData({ ref_id: refId, node_name: 'muted_topic', node_value: shouldMute })
        setTopics(data.filter((i) => i.ref_id !== refId))
      } catch (error) {
        console.warn(error)
      }
    }
  }

  return !data?.length ? (
    <Flex>
      <Text>There is not any results for selected filters</Text>
      <FilterOffIcon />
    </Flex>
  ) : (
    <MaterialTable component="table">
      <StyledTableHead>
        <TableRow component="tr">
          <StyledTableCell className="empty" />
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell>Edge Count</StyledTableCell>
          <StyledTableCell>Edge list</StyledTableCell>
          <StyledTableCell>Date</StyledTableCell>
          <StyledTableCell>{showMuted ? 'Unmute' : 'Mute'}</StyledTableCell>
        </TableRow>
      </StyledTableHead>
      {data?.length && (
        <tbody>
          {data?.map((i: Topic) => (
            <StyledTableRow key={i.topic}>
              <StyledTableCell className="empty" />
              <StyledTableCell>{i.topic}</StyledTableCell>
              <StyledTableCell>{i.edgeCount}</StyledTableCell>
              <StyledTableCell>
                {i.edgeList.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </StyledTableCell>
              <StyledTableCell>
                {i.date_added_to_graph ? <span>{moment(i.date_added_to_graph).format('MM.DD.YYYY')}</span> : null}
              </StyledTableCell>

              <StyledTableCell className="cell-center">
                <Flex direction="row" justify="space-between">
                  <div className="approve-wrapper">
                    {loadingId === i.ref_id ? (
                      <ClipLoader color={colors.white} size={16} />
                    ) : (
                      <>
                        {i.muted_topic ? (
                          <IconWrapper className="centered" onClick={() => handleMute(i.ref_id, false)}>
                            <MdCheckCircle color={colors.primaryGreen} fontSize={24} />
                          </IconWrapper>
                        ) : (
                          <IconWrapper className="centered" onClick={() => handleMute(i.ref_id, true)}>
                            <MdCancel color={colors.primaryRed} fontSize={24} />
                          </IconWrapper>
                        )}
                      </>
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
