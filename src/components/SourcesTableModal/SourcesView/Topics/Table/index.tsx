import { Table as MaterialTable, TableRow } from '@mui/material'
import React from 'react'
import { MdCheckCircle, MdCancel } from 'react-icons/md'
import styled from 'styled-components'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { putNodeData } from '~/network/fetchSourcesData'
// import { useDataStore } from '~/stores/useDataStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead, StyledTableRow } from '../../common'
import { TopicTableProps } from '../../types'

const Table: React.FC<TopicTableProps> = ({ data, showMuted }) => {
  // const setSources = useDataStore((s) => s.setQueuedSources)

  const handleMute = async (refId: string, shouldMute: boolean) => {
    if (data?.length) {
      try {
        await putNodeData({ ref_id: refId, node_name: 'muted_topic', node_value: shouldMute })

        // setSources(data.filter((i) => i.ref_id !== id))
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
          <StyledTableCell>{showMuted ? 'Unmute' : 'Mute'}</StyledTableCell>
        </TableRow>
      </StyledTableHead>
      {data?.length && (
        <tbody>
          {data?.map((i: Topic) => (
            <StyledTableRow key={i.topic}>
              <StyledTableCell className="empty" />
              <StyledTableCell>{i.topic}</StyledTableCell>

              <StyledTableCell className="cell-center">
                <Flex direction="row" justify="space-between">
                  <div className="approve-wrapper">
                    {i.muted_topic ? (
                      <IconWrapper className="centered" onClick={() => handleMute(i.ref_id, false)}>
                        <MdCheckCircle color={colors.primaryGreen} fontSize={24} />
                      </IconWrapper>
                    ) : (
                      <IconWrapper className="centered" onClick={() => handleMute(i.ref_id, true)}>
                        <MdCancel color={colors.primaryRed} fontSize={24} />
                      </IconWrapper>
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
