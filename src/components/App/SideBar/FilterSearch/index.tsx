import { Button, Popper } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { Hops } from './Hops'
import { MaxResults } from './MaxResults'
import { SourceNodes } from './SourceNodes'

type Props = {
  showAllSchemas: boolean
  setShowAllSchemas: (value: boolean) => void
  schemaAll: SchemaExtended[]
  anchorEl: HTMLElement | null
}

export const FilterSearch = ({ showAllSchemas, setShowAllSchemas, schemaAll, anchorEl }: Props) => {
  const handleSchemaTypeClick = (type: string) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type) ? prevSelectedTypes.filter((t) => t !== type) : [...prevSelectedTypes, type],
    )
  }

  const { setFilters } = useDataStore((s) => s)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [hops, setHops] = useState(1)
  const [sourceNodes, setSourceNodes] = useState<number>(10)
  const [maxResults, setMaxResults] = useState<number>(30)

  const handleClear = async () => {
    setSelectedTypes([])
  }

  const handleViewMoreClick = () => {
    setShowAllSchemas(true)
  }

  const handleFiltersApply = () => {
    setFilters({
      node_type: selectedTypes,
      limit: maxResults.toString(),
      depth: hops.toString(),
      top_node_count: sourceNodes.toString(),
    })
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
      <PopoverHeader>
        <div>Type</div>
        <CountSelectedWrapper>
          <Count>{selectedTypes.length}</Count>
          <SelectedText>Selected</SelectedText>
        </CountSelectedWrapper>
      </PopoverHeader>
      <PopoverBody>
        <SchemaTypeWrapper>
          {(showAllSchemas ? schemaAll : schemaAll.slice(0, 4)).map((schema) => (
            <SchemaType
              key={schema.type}
              isSelected={selectedTypes.includes(schema.type as string)}
              onClick={() => handleSchemaTypeClick(schema?.type as string)}
            >
              {schema.type}
            </SchemaType>
          ))}
        </SchemaTypeWrapper>
        {!showAllSchemas && schemaAll.length > 4 && (
          <ViewMoreButton onClick={handleViewMoreClick}>
            <PlusIconWrapper>
              <PlusIcon /> View More
            </PlusIconWrapper>
          </ViewMoreButton>
        )}
      </PopoverBody>
      <LineBar />

      <SourceNodes setSourceNodes={setSourceNodes} sourceNodes={sourceNodes} />

      <LineBar />
      <Hops hops={hops} setHops={setHops} />
      <LineBar />
      <MaxResults maxResults={maxResults} setMaxResults={setMaxResults} />
      <LineBar />
      <PopoverFooter>
        <Flex direction="row" mb={6}>
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
            Show Results
          </ShowResultButton>
        </Flex>
      </PopoverFooter>
    </SearchFilterPopover>
  )
}

const SearchFilterPopover = styled(Popper)`
  &&.MuiPopper-root {
    margin-top: 10px !important;
    background: ${colors.BG2};
    padding: 16px;
    min-width: 360px;
    max-height: calc(100% - 20%);
    color: ${colors.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    overflow: auto;
    border: 1px solid ${colors.black};
    z-index: 100;
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.BG2};
      border-radius: 9px;
      margin: 5px;
      overflow-y: hidden;
    }
  }
`

const PopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-family: Barlow;
  font-size: 18px;
  font-weight: 500;
`

const CountSelectedWrapper = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
`

const Count = styled.span`
  color: ${colors.white};
`

const SelectedText = styled.span`
  color: ${colors.GRAY3};
  margin-left: 4px;
`

export const PopoverBody = styled.div`
  padding: 13px 0;
  position: relative;
`

const PopoverFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`

const LineBar = styled.div`
  border: 1px solid ${colors.black};
  width: calc(100% + 32px);
  margin: 13px -16px;
`

const PlusIconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  svg {
    width: 23px;
    height: 23px;
    fill: none;
    margin-top: 2px;
  }
`

const SchemaTypeWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-right: calc(0px - 16px);
`

const SchemaType = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? colors.black : colors.white)};
  background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 3px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  }

  &:active {
    background: ${colors.white};
    color: ${colors.black};
  }
`

const ViewMoreButton = styled.button`
  background: transparent;
  color: ${colors.white};
  border: none;
  padding: 6px 12px 6px 3px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
  }

  &:active {
    background: ${colors.BUTTON1_PRESS};
  }
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
    margin-top: 2px;
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
