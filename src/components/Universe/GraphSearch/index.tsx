import { useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import { useAppStore } from '~/stores/useAppStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils'
import { FollowersFilter } from './FollowersFilter'
import { GraphFilter } from './GraphFilter'

export const GraphSearch = () => {
  const [setSearchQuery, searchQuery] = useGraphStore((s) => [s.setSearchQuery, s.searchQuery])
  const universeQuestionIsOpen = useAppStore((s) => s.universeQuestionIsOpen)
  const location = useLocation()
  const isTweetMindset = location.pathname.includes('/tweet/')

  if (universeQuestionIsOpen) {
    return null
  }

  return (
    <Wrapper>
      <TopBarContainer>
        <SearchWrapper>
          <SearchIconWrapper>
            <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                stroke="#6E6E7E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </SearchIconWrapper>
          <Input
            id="graph-search"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search graph"
            type="text"
            value={searchQuery}
          />
          {searchQuery?.trim() && (
            <InputButton
              data-testid="search_action_icon"
              onClick={() => {
                setSearchQuery('')
              }}
            >
              <ClearIcon />
            </InputButton>
          )}
        </SearchWrapper>
        <GraphFilter />
      </TopBarContainer>
      {isTweetMindset && <FollowersFilter />}
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
  width: 100%;
  z-index: 100;
`

const TopBarContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 12px;
`

const SearchWrapper = styled(Flex)`
  flex-direction: row;
  position: relative;
  width: 320px;
`

const SearchIconWrapper = styled(Flex)`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;
`

const Input = styled.input.attrs(() => ({
  autoCorrect: 'off',
  autoComplete: 'off',
}))<{ loading?: boolean }>`
  pointer-events: auto;
  height: 48px;
  padding: 0 40px 0 48px;
  z-index: 2;
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 200px;
  background: ${colors.BG2};

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
  p: 5,
})`
  font-size: 20px;
  color: ${colors.GRAY7};
  cursor: pointer;
  transition-duration: 0.2s;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 20px;
  height: 20px;

  &:hover {
    color: ${colors.white};
  }
`
