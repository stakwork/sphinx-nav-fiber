import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { useAppStore } from '~/stores/useAppStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { colors } from '~/utils'
import { GraphFilter } from './GraphFilter'

export const GraphSearch = () => {
  const [setSearchQuery, searchQuery] = useGraphStore((s) => [s.setSearchQuery, s.searchQuery])
  const universeQuestionIsOpen = useAppStore((s) => s.universeQuestionIsOpen)
  const { open } = useModal('claim')
  const { episodeId } = useParams()

  if (universeQuestionIsOpen) {
    return null
  }

  return (
    <Wrapper>
      <TopBarContainer>
        <SearchWrapper>
          <Input
            id="graph-search"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search graph"
            type="text"
            value={searchQuery}
          />

          {searchQuery?.trim() ? (
            <InputButton
              data-testid="search_action_icon"
              onClick={() => {
                setSearchQuery('')
              }}
            >
              <ClearIcon />
            </InputButton>
          ) : (
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          )}
        </SearchWrapper>
        <GraphFilter />
        {episodeId && <Button onClick={() => open()}>Claims</Button>}
      </TopBarContainer>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  padding: 16px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`

const TopBarContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 0 auto;
  gap: 12px;
`

const SearchWrapper = styled(Flex)`
  flex-direction: row;
  position: relative;
  width: 250px;
`

const SearchIconWrapper = styled(Flex)`
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;

  width: 28px;
  height: 28px;

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${colors.GRAY8};
    }
  }
`

const Input = styled.input.attrs(() => ({
  autoCorrect: 'off',
  autoComplete: 'off',
}))<{ loading?: boolean }>`
  box-sizing: border-box;
  pointer-events: auto;
  height: 32px;
  padding: 11px 16px;
  z-index: 2;
  width: 100%;
  border: none;
  border-radius: 200px;
  background: ${colors.BG2};

  font-size: 15px;
  font-weight: 500;
  color: ${colors.white};

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

  &:focus {
    outline: 1px solid ${colors.primaryBlue};
  }

  &::placeholder {
    color: ${colors.GRAY7};
  }

  ${({ loading }) =>
    loading &&
    css`
      background-image: url('https://i.gifer.com/ZZ5H.gif');
      background-size: 25px 25px;
      background-position: right center;
      background-position-x: 95%;
      background-repeat: no-repeat;
    `}
`

const InputButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
})`
  font-size: 20px;
  color: ${colors.GRAY7};
  cursor: pointer;
  transition-duration: 0.2s;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 20px;
  height: 20px;

  &:hover {
    color: ${colors.white};
  }
`
