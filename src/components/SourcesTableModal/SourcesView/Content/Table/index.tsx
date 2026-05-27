import { Button, Table as MaterialTable, styled, TableRow } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import ContentIcon from '~/components/Icons/ContentIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import SortFilterIcon from '~/components/Icons/SortFilterIcon'
import { Node } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { StyledTableCell, StyledTableHead } from '../../common'
import { TopicRow } from './TableRow'

interface TableProps {
  nodes: Node[]
}

type SortField = 'date' | 'status'
type SortDirection = 'asc' | 'desc'

const getNodeDate = (node: Node) => {
  const rawDate = node.properties?.date_added_to_graph || node.properties?.date
  const numericDate = Number(rawDate)

  if (!Number.isNaN(numericDate)) {
    return numericDate
  }

  const parsedDate = Date.parse(String(rawDate))

  return Number.isNaN(parsedDate) ? 0 : parsedDate
}

const getNodeStatus = (node: Node) => String(node.properties?.status || 'processing').toLowerCase()

export const Table: React.FC<TableProps> = ({ nodes }) => {
  const { open: openContentAddModal } = useModal('addContent')
  const [sortField, setSortField] = useState<SortField>('date')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')

  const handleAddContent = async () => {
    openContentAddModal()
  }

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')

      return
    }

    setSortField(field)
    setSortDirection(field === 'date' ? 'desc' : 'asc')
  }

  const sortedNodes = useMemo(() => {
    const direction = sortDirection === 'asc' ? 1 : -1

    return [...nodes].sort((a, b) => {
      if (sortField === 'status') {
        return getNodeStatus(a).localeCompare(getNodeStatus(b)) * direction
      }

      return (getNodeDate(a) - getNodeDate(b)) * direction
    })
  }, [nodes, sortDirection, sortField])

  return !nodes || nodes?.length === 0 ? (
    <>
      <AddContentSection>
        <IconWrapper>
          <ContentIcon />
        </IconWrapper>
        <Subtitle>
          <Text className="subtitle">Contribute to the graph by adding your first content.</Text>
        </Subtitle>
        <Flex justify="center">
          <Button
            color="secondary"
            onClick={handleAddContent}
            size="medium"
            startIcon={<PlusIcon />}
            type="submit"
            variant="contained"
          >
            Add Content
          </Button>
        </Flex>
      </AddContentSection>
    </>
  ) : (
    <MaterialTable component="table">
      <StyledTableHead>
        <TableRow component="tr">
          <StyledTableCell className="empty" />
          <StyledTableCell>
            <SortedHeaderButton onClick={() => handleSort('date')} type="button">
              Date <SortFilterIcon />
            </SortedHeaderButton>
          </StyledTableCell>
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell>Source</StyledTableCell>
          <StyledTableCell>
            <SortedHeaderButton onClick={() => handleSort('status')} type="button">
              Status <SortFilterIcon />
            </SortedHeaderButton>
          </StyledTableCell>
        </TableRow>
      </StyledTableHead>
      <tbody>
        {sortedNodes?.map((node) => (
          <TopicRow key={node?.ref_id} node={node} />
        ))}
      </tbody>
    </MaterialTable>
  )
}

const AddContentSection = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 150px auto;
  width: 100%;
  flex-direction: column;
`

const Subtitle = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 200px;
  margin-bottom: 25px;
  text-align: center;

  .subtitle {
    color: ${colors.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

const IconWrapper = styled(Flex)`
  margin-bottom: 20px;

  svg {
    fill: none;
    height: 60px;
    width: 60px;
  }
`

const SortedHeaderButton = styled('button')`
  align-items: center;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  gap: 4px;
  padding: 0;

  svg {
    height: 16px;
    width: 16px;
  }
`
