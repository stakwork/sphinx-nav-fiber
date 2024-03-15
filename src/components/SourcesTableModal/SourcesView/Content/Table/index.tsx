import { Button, styled, Table as MaterialTable, TableRow } from '@mui/material'
import React from 'react'
import { StyledTableCell, StyledTableHead } from '../../common'
import { TopicRow } from './TableRow'
import { Flex } from '~/components/common/Flex'
import { useModal } from '~/stores/useModalStore'
import PlusIcon from '~/components/Icons/PlusIcon'
import { Node } from '~/network/fetchSourcesData'
import { Text } from '~/components/common/Text'
import { colors } from '~/utils'

interface TableProps {
  nodes: Node[]
}

export const Table: React.FC<TableProps> = ({ nodes }) => {
  const { open: openContentAddModal } = useModal('addContent')

  const handleAddContent = async () => {
    openContentAddModal()
  }

  return !nodes || nodes?.length === 0 ? (
    <>
      <AddContentSection>
        <Subtitle align="center" direction="row" justify="space-between">
          <Text className="subtitle">Contribute to the graph by adding content.</Text>
        </Subtitle>
        <Flex>
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
          <StyledTableCell>Date</StyledTableCell>
          <StyledTableCell>Type</StyledTableCell>
          <StyledTableCell>Source</StyledTableCell>
          <StyledTableCell>Status</StyledTableCell>
        </TableRow>
      </StyledTableHead>
      <tbody>
        {nodes?.map((node) => (
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
  margin: 100px auto;
  width: 100%;
`

const Subtitle = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;

  .subtitle {
    color: ${colors.GRAY3};
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
