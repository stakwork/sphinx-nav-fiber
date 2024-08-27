import { Button, Table as MaterialTable, styled, TableRow } from '@mui/material'
import React from 'react'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import ContentIcon from '~/components/Icons/ContentIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { Node } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { StyledTableCell, StyledTableHead } from '../../common'
import { TopicRow } from './TableRow'

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
