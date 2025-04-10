import { Button, Popper } from '@mui/material'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import { Flex } from '~/components/common/Flex'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { FastFilters } from './FastFilters'
import { Hops } from './Hops'
import { MaxResults } from './MaxResults'
import { NodeTypes } from './NodeTypes'
import { SourceNodes } from './SourceNodes'

type Props = {
  anchorEl: HTMLElement | null
  setAnchorEl: (value: HTMLElement | null) => void
  onClose: () => void
}

const defaultValues = {
  selectedTypes: [] as string[],
  hops: 1,
  sourceNodes: 10,
  maxResults: 30,
}

export const FilterSearch = ({ anchorEl, setAnchorEl, onClose }: Props) => {
  const [schemaAll, setSchemaAll] = useSchemaStore((s) => [s.schemas, s.setSchemas])
  const { abortFetchData, resetGraph, setFilters, resetData } = useDataStore((s) => s)
  const [selectedTypes, setSelectedTypes] = useState<string[]>(defaultValues.selectedTypes)
  const [hops, setHops] = useState(defaultValues.hops)
  const [sourceNodes, setSourceNodes] = useState<number>(defaultValues.sourceNodes)
  const [maxResults, setMaxResults] = useState<number>(defaultValues.maxResults)
  const { fastFiltersFeatureFlag } = useFeatureFlagStore((s) => s)

  useEffect(() => {
    const fetchSchemaData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas.filter((schema) => !schema.is_deleted))
      } catch (error) {
        console.error('Error fetching schema:', error)
      }
    }

    fetchSchemaData()
  }, [setSchemaAll])

  const handleSchemaTypeClick = (type: string) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type) ? prevSelectedTypes.filter((t) => t !== type) : [...prevSelectedTypes, type],
    )
  }

  const handleSchemaTypesSelect = (types: string[]) => {
    setSelectedTypes(types)
  }

  const resetToDefaultValues = () => {
    setSelectedTypes(defaultValues.selectedTypes)
    setHops(defaultValues.hops)
    setSourceNodes(defaultValues.sourceNodes)
    setMaxResults(defaultValues.maxResults)
  }

  const handleClear = async () => {
    resetToDefaultValues()
    abortFetchData()
    resetGraph()
  }

  const handleFiltersApply = async () => {
    setFilters({
      node_type: selectedTypes,
      limit: maxResults,
      depth: hops.toString(),
      top_node_count: sourceNodes.toString(),
    })

    resetData()

    setAnchorEl(null)
    onClose()
  }

  return (
    <SearchFilterPopover
      anchorEl={anchorEl}
      disablePortal
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ]}
      open={Boolean(anchorEl)}
      placement="bottom-end"
    >
      {fastFiltersFeatureFlag && (
        <>
          <FastFilters handleFastFiltersSelect={handleSchemaTypesSelect} />
          <LineBar />
        </>
      )}

      <NodeTypes handleSchemaTypeClick={handleSchemaTypeClick} schemaAll={schemaAll} selectedTypes={selectedTypes} />
      <LineBar />
      <SourceNodes setSourceNodes={setSourceNodes} sourceNodes={sourceNodes} />
      <LineBar />
      <Hops hops={hops} setHops={setHops} />
      <LineBar />
      <MaxResults maxResults={maxResults} setMaxResults={setMaxResults} />
      <PopoverFooter>
        <LineBar />
        <ButtonsWrapper>
          <ClearButton
            color="secondary"
            onClick={handleClear}
            size="large"
            style={{ marginRight: 20 }}
            variant="contained"
          >
            <ClearButtonWrapper>
              <ClearIcon />
            </ClearButtonWrapper>
            Clear
          </ClearButton>
          <ShowResultButton color="secondary" onClick={handleFiltersApply} size="large" variant="contained">
            Apply
          </ShowResultButton>
        </ButtonsWrapper>
      </PopoverFooter>
    </SearchFilterPopover>
  )
}

const SearchFilterPopover = styled(Popper)`
  &&.MuiPopper-root {
    background: ${colors.BG2};
    padding: 16px;
    max-height: calc(100% - 20%);
    color: ${colors.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    overflow-x: hidden;
    padding-bottom: 0 !important;
    overflow-y: auto;
    border: 1px solid ${colors.black};
    z-index: 100;
    position: relative;
    &::-webkit-scrollbar {
      width: 3px;
      height: auto;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.BG2};
      border-radius: 9px;
      margin-top: 5px;
      margin-bottom: 68px;
      overflow-y: hidden;
    }
  }
`

const PopoverFooter = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px 8px 8px;
  position: sticky;
  bottom: 0;
  background: ${colors.BG2};
  width: calc(100% + 32px);
  margin: -16px;
`

const LineBar = styled.div`
  border: 1px solid ${colors.black};
  width: calc(100% + 32px);
  margin: 13px -16px;
`

const ClearButton = styled(Button)`
  && {
    color: ${colors.white};
    background-color: ${colors.BUTTON1};
    padding-left: 4px;
    &:hover,
    &:active,
    &:focus {
      color: rgba(255, 255, 255, 0.85);
      background-color: ${colors.BUTTON1};
    }
  }
`

const ClearButtonWrapper = styled.span`
  svg {
    width: 32px;
    height: 32px;
    color: ${colors.GRAY7};
    fill: none;
    margin-top: 4px;
  }
`

const ShowResultButton = styled(Button)`
  && {
    flex: 1;
    padding: 2px 55px;
  }
`

export const SubHeading = styled.div`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.6px;
  text-align: left;
  margin-top: 10px;
  color: ${colors.modalAuth};
`

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`

export const VolumeControl = styled(Flex)`
  margin: 10px auto;

  .volume-slider {
    display: block;
    color: ${colors.modalShield};
    height: 4px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-rail {
      background-color: ${colors.black};
    }
    .MuiSlider-thumb {
      width: 20px;
      height: 20px;
      background-color: ${colors.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`

export const SourceNodesStepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
`

export const ButtonsWrapper = styled(Flex)`
  flex-direction: row;
  margin: 0 0 6px 3px;
`

export const PopoverBody = styled.div`
  padding: 13px 0;
  position: relative;
`
