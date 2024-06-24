import { Button } from '@mui/material'
import Popover from '@mui/material/Popover'
import styled from 'styled-components'
import ClearIcon from '~/components/Icons/ClearIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { Flex } from '~/components/common/Flex'
import { api } from '~/network/api'
import { colors } from '~/utils/colors'

type Props = {
  showAllSchemas: boolean
  setShowAllSchemas: (value: boolean) => void
  setSelectedTypes: (value: string[] | ((prevSelectedTypes: string[]) => string[])) => void
  setIsFilterOpen: (value: boolean) => void
  setAnchorEl: (value: HTMLElement | null) => void
  selectedTypes: string[]
  schemaAll: SchemaExtended[]
  anchorEl: HTMLElement | null
}

export const FilterSearch = ({
  showAllSchemas,
  setShowAllSchemas,
  setSelectedTypes,
  setIsFilterOpen,
  setAnchorEl,
  selectedTypes,
  schemaAll,
  anchorEl,
}: Props) => {
  const handleSchemaTypeClick = (type: string) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type) ? prevSelectedTypes.filter((t) => t !== type) : [...prevSelectedTypes, type],
    )
  }

  const handleClear = async () => {
    setSelectedTypes([])
  }

  const handleSave = async () => {
    const endPoint = 'graph/search'

    const queryParams = new URLSearchParams({
      node_type: selectedTypes.join(','),
    })

    try {
      await api.get(`/${endPoint}?${queryParams.toString()}`)
    } catch (error) {
      console.warn(error)
    }
  }

  const handleViewMoreClick = () => {
    setShowAllSchemas(true)
  }

  return (
    <SearchFilterPopover
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      anchorPosition={{
        top: 200,
        left: 0,
      }}
      onClose={() => {
        setAnchorEl(null)
        setIsFilterOpen(false)
      }}
      open={Boolean(anchorEl)}
      PaperProps={{
        style: {
          marginTop: '13px',
          marginLeft: '30px',
        },
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
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
          {(showAllSchemas ? schemaAll : schemaAll.slice(0, 15)).map((schema) => (
            <SchemaType
              key={schema.type}
              isSelected={selectedTypes.includes(schema.type as string)}
              onClick={() => handleSchemaTypeClick(schema?.type as string)}
            >
              {schema.type}
            </SchemaType>
          ))}
        </SchemaTypeWrapper>
        {!showAllSchemas && schemaAll.length > 15 && (
          <ViewMoreButton onClick={handleViewMoreClick}>
            <PlusIconWrapper>
              <PlusIcon /> View More
            </PlusIconWrapper>
          </ViewMoreButton>
        )}
      </PopoverBody>
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
          <ShowResultButton color="secondary" onClick={handleSave} size="large" variant="contained">
            Show Results
          </ShowResultButton>
        </Flex>
      </PopoverFooter>
    </SearchFilterPopover>
  )
}

const SearchFilterPopover = styled(Popover)`
  .MuiPaper-root {
    background: ${colors.BG2};
    padding: 16px;
    min-width: 360px;
    color: ${colors.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    border: 1px solid ${colors.black};
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

const PopoverBody = styled.div`
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
