import { Box, Button, Popover } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'

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

  const handleNodeTypeClick = (type: string) => {
    setSelectedNodeTypes(type)
  }

  const handleLinkTypeClick = (type: string) => {
    setSelectedLinkTypes(type)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'filter-popover' : undefined

  const needMultipleColumns = nodeTypes.length > 8 || linkTypes.length > 8

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
            <FilterColumn>
              <FilterList needMultipleColumns={needMultipleColumns}>
                <FilterItem isActive={!selectedNodeTypes.length} onClick={resetSelectedNodeTypes}>
                  <RadioButton isActive={!selectedNodeTypes.length} />
                  <FilterText isActive={!selectedNodeTypes.length}>All Nodes</FilterText>
                </FilterItem>

                {nodeTypes.map((type: string) => (
                  <FilterItem
                    key={type}
                    isActive={selectedNodeTypes.includes(type)}
                    onClick={() => handleNodeTypeClick(type)}
                  >
                    <RadioButton color={getNodeTypeColor(type)} isActive={selectedNodeTypes.includes(type)} />
                    <FilterText isActive={selectedNodeTypes.includes(type)}>{type}</FilterText>
                  </FilterItem>
                ))}
              </FilterList>
            </FilterColumn>

            <FilterColumn>
              <FilterList needMultipleColumns={needMultipleColumns}>
                <FilterItem isActive={!selectedLinkTypes.length} onClick={resetSelectedLinkTypes}>
                  <RadioButton isActive={!selectedLinkTypes.length} />
                  <FilterText isActive={!selectedLinkTypes.length}>All Edges</FilterText>
                </FilterItem>

                {linkTypes.map((type: string) => (
                  <FilterItem
                    key={type}
                    isActive={selectedLinkTypes.includes(type)}
                    onClick={() => handleLinkTypeClick(type)}
                  >
                    <RadioButton isActive={selectedLinkTypes.includes(type)} />
                    <FilterText isActive={selectedLinkTypes.includes(type)}>{type}</FilterText>
                  </FilterItem>
                ))}
              </FilterList>
            </FilterColumn>
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
  padding: 16px;
  min-width: 350px;
  border-radius: 12px;
  background: #16171d;
`

const FilterSection = styled(Flex)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    bottom: 16px;
    left: 50%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const FilterColumn = styled(Flex)`
  flex-direction: column;
  gap: 12px;
`

const FilterList = styled(Flex)<{ needMultipleColumns?: boolean }>`
  flex-direction: column;
  gap: 8px;

  max-height: ${({ needMultipleColumns }) => (needMultipleColumns ? '300px' : 'none')};
  overflow-y: ${({ needMultipleColumns }) => (needMultipleColumns ? 'auto' : 'visible')};
`

const FilterItem = styled(Flex)<{ isActive: boolean }>`
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;

  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`

const FilterText = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#BAC1C6' : '#6B7A8D')};
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};
  font-family: Barlow;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const RadioButton = styled.div<{ isActive: boolean; color?: string }>`
  width: 12px;
  height: 12px;
  background: ${({ isActive, color }) => (isActive ? color || colors.white : '#303342')};
  border-radius: 50%;
  margin-right: 8px;
  transition: all 0.3s ease;
`
