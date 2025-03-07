import { Box, Button, Popover } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { FilterGroup } from './FilterGroup/FilterGroup'

export const GraphFilter = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const nodeTypes = useNodeTypes()
  const linkTypes = useDataStore((s) => s.linkTypes)
  const selectedNodeTypes = useGraphStore((s) => s.selectedNodeTypes)
  const selectedLinkTypes = useGraphStore((s) => s.selectedLinkTypes)
  const setSelectedNodeTypes = useGraphStore((s) => s.setSelectedNodeTypes)
  const setSelectedLinkTypes = useGraphStore((s) => s.setSelectedLinkTypes)
  const resetSelectedNodeTypes = useGraphStore((s) => s.resetSelectedNodeTypes)
  const resetSelectedLinkTypes = useGraphStore((s) => s.resetSelectedLinkTypes)
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const getNodeTypeColor = (type: string) => {
    const schema = normalizedSchemasByType[type]

    return schema?.primary_color || '#ffffff'
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'filter-popover' : undefined

  return (
    <FilterWrapper>
      <FilterButton
        aria-describedby={id}
        onClick={handleClick}
        startIcon={
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        }
      >
        Filter
      </FilterButton>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={id}
        onClose={handleClose}
        open={open}
        slotProps={{
          paper: {
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderRadius: '12px',
              marginTop: '16px',
              overflow: 'visible',
            },
            className: 'filter-popover-paper',
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <FilterContent>
          <FilterSection>
            <FilterGroup
              getColor={getNodeTypeColor}
              onResetClick={resetSelectedNodeTypes}
              onTypeClick={setSelectedNodeTypes}
              selectedTypes={selectedNodeTypes}
              title="Nodes"
              types={nodeTypes}
            />
            <FilterGroup
              onResetClick={resetSelectedLinkTypes}
              onTypeClick={setSelectedLinkTypes}
              selectedTypes={selectedLinkTypes}
              title="Edges"
              types={linkTypes}
            />
          </FilterSection>
        </FilterContent>
      </Popover>
    </FilterWrapper>
  )
}

const FilterWrapper = styled(Flex)`
  margin-left: 16px;
`

const FilterButton = styled(Button)`
  && {
    background-color: ${colors.white};
    color: ${colors.BG1};
    border-radius: 200px;
    text-transform: none;
    padding: 6px 16px;
    font-family: Barlow;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    height: 32px;

    .MuiButton-startIcon {
      margin-right: 8px;
    }

    &:hover {
      background-color: ${colors.white};
      opacity: 0.5;
    }

    &:active {
      background-color: ${colors.white};
      opacity: 0.8;
    }
  }
`

const FilterContent = styled(Box)`
  min-width: 350px;
  max-height: 420px;
  border-radius: 12px;
  background: #16171d;
`

const FilterSection = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  position: relative;
  height: 100%;
`
