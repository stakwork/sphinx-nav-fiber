import { Box, Button, Popover } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import SearchFilterIcon from '~/components/Icons/SearchFilterIcon'
import { useDataStore, useNodeTypes } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { FilterGroup } from './FilterGroup'

const followerRanges = [
  { label: '< 1000', value: 'lt_1000' },
  { label: '1000 - 10,000', value: '1000_10000' },
  { label: '> 10,000', value: 'gt_10000' },
]

const followerRangeTypes = followerRanges.map((range) => range.label)

const dateRanges = [
  { label: 'Last Day', value: 'last_day' },
  { label: 'Last Week', value: 'last_week' },
  { label: 'Last Month', value: 'last_month' },
  { label: 'Last Year', value: 'last_year' },
]

const dateRangeTypes = dateRanges.map((range) => range.label)

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
  const [dateRangeFilter, setDateRangeFilter] = useGraphStore((s) => [s.dateRangeFilter, s.setDateRangeFilter])
  const { normalizedSchemasByType } = useSchemaStore((s) => s)

  const location = useLocation()
  const isTweetMindset = location.pathname.includes('/tweet/')

  const selectedFollowersType = followersFilter
    ? [followerRanges.find((range) => range.value === followersFilter)?.label || '']
    : []

  const selectedDateRangeType = dateRangeFilter
    ? [dateRanges.find((range) => range.value === dateRangeFilter)?.label || '']
    : []

  const getNodeTypeColor = (type: string) => {
    const schema = normalizedSchemasByType[type]

    return schema?.secondary_color || colors.white
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFollowersTypeClick = (type: string) => {
    const selectedRange = followerRanges.find((range) => range.label === type)

    setFollowersFilter(selectedRange ? selectedRange.value : '')
  }

  const setSelectedDateRangeType = (type: string) => {
    const selectedRange = dateRanges.find((range) => range.label === type)

    setDateRangeFilter(selectedRange ? selectedRange.value : '')
  }

  const resetDateRangeFilter = () => {
    setDateRangeFilter('')
  }

  const resetFollowersFilter = () => {
    setFollowersFilter('')
  }

  const open = Boolean(anchorEl)
  const id = open ? 'filter-popover' : undefined

  return (
    <div>
      <FilterButton
        aria-describedby={id}
        isActive={Boolean(anchorEl)}
        onClick={handleClick}
        startIcon={<SearchFilterIcon />}
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
              onResetClick={resetDateRangeFilter}
              onTypeClick={setSelectedDateRangeType}
              selectedTypes={selectedDateRangeType}
              title="Range"
              types={dateRangeTypes}
            />
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
    background-color: ${({ isActive }) => (isActive ? colors.white : colors.BUTTON1)};
    color: ${({ isActive }) => (isActive ? colors.GRAY9 : colors.white)};
    border-radius: 200px;
    text-transform: none;
    padding: 6px 16px;
    font-family: Barlow;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }

    &:hover {
      background-color: ${colors.white};
      color: ${colors.GRAY9};
    }

    &:active {
      background-color: ${colors.white};
      opacity: 0.8;
    }
  }
`

const FilterContent = styled(Box)`
  max-height: 420px;
  border-radius: 12px;
  background: ${colors.BG2};
`

const FilterSection = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  position: relative;
  height: 100%;
`
