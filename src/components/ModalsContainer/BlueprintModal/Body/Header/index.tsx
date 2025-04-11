import { useState } from 'react'
import styled from 'styled-components'
import { AutoComplete, TAutocompleteOption } from '~/components/common/AutoComplete'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import FamilyHistoryIcon from '~/components/Icons/FamilyHistoryIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { Schema } from '~/network/fetchSourcesData'
import { colors } from '~/utils/colors'

interface HeaderProps {
  onClose: () => void
  activeTab: 'all' | 'parent'
  setActiveTab: (tab: 'all' | 'parent') => void
  onSchemaSelect: (schemaId: string) => void
  schemas: Schema[]
}

interface TabProps {
  active: boolean
}

export const Header = ({ onClose, activeTab, setActiveTab, onSchemaSelect, schemas }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const searchOptions = schemas
    .filter((schema): schema is Schema & { ref_id: string } => schema.ref_id !== undefined && schema.type !== undefined)
    .map((schema) => ({
      label: schema.type,
      value: schema.ref_id,
    }))

  return (
    <HeaderWrapper>
      <IconWrapper>
        <FamilyHistoryIcon />
        <Title>Blueprint</Title>
      </IconWrapper>

      <SearchSection>
        <StyledAutoComplete
          handleInputChange={(value) => setSearchTerm(value)}
          onSelect={(option: TAutocompleteOption | null) => {
            if (option?.value) {
              onSchemaSelect(option.value)
            }
          }}
          options={searchOptions}
          placeholder="Search"
        />
        <InputButton data-testid="search_action_icon">{searchTerm?.trim() ? null : <SearchIcon />}</InputButton>
      </SearchSection>

      <TabsWrapper>
        <Tab active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
          Show All
        </Tab>
        <Tab active={activeTab === 'parent'} onClick={() => setActiveTab('parent')}>
          Parent Only
        </Tab>
      </TabsWrapper>

      <CloseButton onClick={onClose}>
        <ClearIcon />
      </CloseButton>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled(Flex)`
  background-color: ${colors.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
  border-bottom: 1px solid ${colors.black};
  z-index: 2000;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${colors.GRAY6};
    margin-left: 6px;
  }
`

const Title = styled.span`
  color: ${colors.white};
  font-weight: 400;
  font-family: Barlow;
  margin-left: 15px;
  font-size: 22px;
`

const InputButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  font-size: 32px;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;
  width: 30px;
`

const TabsWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${colors.divider2};
  border-radius: 6px;
  padding: 2px;
`

const Tab = styled.div<TabProps>`
  color: ${(props) => (props.active ? colors.white : colors.GRAY6)};
  background-color: ${(props) => (props.active ? colors.BUTTON1 : 'transparent')};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  margin-left: 2px;
  font-family: Barlow;

  &:first-child {
    margin-left: 0;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${colors.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  position: fixed;
  transform: translateY(-6px);
  margin-left: 11%;

  &:has(.MuiTextField-root:focus-within) {
    ${InputButton} {
      color: ${colors.primaryBlue};
    }
  }
`

const StyledAutoComplete = styled(AutoComplete)`
  .MuiTextField-root {
    pointer-events: auto;
    height: 40px !important;
    z-index: 2;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    color: #fff;
    box-shadow: none;
    border: none;
    border-radius: 200px !important;
    background: ${colors.BG2};

    .MuiInput-input.MuiInputBase-input {
      padding: 1px 40px 1px 18px;
      height: 40px !important;

      -webkit-autofill,
      -webkit-autocomplete,
      -webkit-contacts-auto-fill,
      -webkit-credentials-auto-fill {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        position: absolute !important;
        right: 0 !important;
      }
    }

    &:focus-within {
      outline: 1px solid ${colors.primaryBlue};
    }

    &:hover {
      background: ${colors.black};
    }

    input::placeholder {
      color: ${colors.GRAY7};
    }

    .MuiAutocomplete-endAdornment {
      display: none;
    }
  }
`
