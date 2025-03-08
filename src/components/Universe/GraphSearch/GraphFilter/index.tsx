import { Box, Button, Popover } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import FilterIcon from '~/components/Icons/FilterIcon'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { FilterGroup } from './FilterGroup/FilterGroup'

const followerRanges = [
  { label: '< 1000', value: 'lt_1000' },
  { label: '1000 - 10,000', value: '1000_10000' },
  { label: '> 10,000', value: 'gt_10000' },
]

const followerRangeTypes = followerRanges.map((range) => range.label)

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
  const [followersFilter, setFollowersFilter] = useGraphStore((s) => [s.followersFilter, s.setFollowersFilter])
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const location = useLocation()
  const isTweetMindset = location.pathname.includes('/tweet/')

  const selectedFollowersType = followersFilter
    ? [followerRanges.find((range) => range.value === followersFilter)?.label || '']
    : []

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

  const handleFollowersTypeClick = (type: string) => {
    const selectedRange = followerRanges.find((range) => range.label === type)

    setFollowersFilter(selectedRange ? selectedRange.value : null)
  }

  const resetFollowersFilter = () => {
    setFollowersFilter(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'filter-popover' : undefined

  return (
    <div>
      <FilterButton aria-describedby={id} isActive={Boolean(anchorEl)} onClick={handleClick} startIcon={<FilterIcon />}>
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
              marginTop: '8px',
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
            {isTweetMindset && (
              <FilterGroup
                onResetClick={resetFollowersFilter}
                onTypeClick={handleFollowersTypeClick}
                selectedTypes={selectedFollowersType}
                title="Followers"
                types={followerRangeTypes}
              />
            )}
          </FilterSection>
        </FilterContent>
      </Popover>
    </div>
  )
}

const FilterButton = styled(Button)<{ isActive: boolean }>`
  && {
    transition: all 0.2s ease;
    background-color: ${({ isActive }) => (isActive ? colors.white : '#303342')};
    color: ${({ isActive }) => (isActive ? '#353a46' : colors.white)};
    border-radius: 200px;
    text-transform: none;
    padding: 6px 16px;
    font-family: Barlow;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    height: 32px;

    &:hover {
      background-color: ${colors.white};
      background: white;
      color: #353a46;
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
