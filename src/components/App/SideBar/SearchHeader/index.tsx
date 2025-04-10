import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BeatLoader, ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { SelectWithPopover } from '~/components/App/SideBar/Dropdown'
import { FilterSearch } from '~/components/App/SideBar/FilterSearch'
import ChatStarsIcon from '~/components/Icons/ChatStarsIcon'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchFilterCloseIcon from '~/components/Icons/SearchFilterCloseIcon'
import SearchFilterIcon from '~/components/Icons/SearchFilterIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { Flex } from '~/components/common/Flex'
import { useAiSummaryStore } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { useUserStore } from '~/stores/useUserStore'
import { colors } from '~/utils/colors'
import { AIChatInput } from '../AIChatSearch'
import { AnimatedSearchWrapper } from './animation'

export const SearchHeader = () => {
  const { isFetching: isLoading, setSidebarFilter, abortFetchData } = useDataStore((s) => s)
  const { navigateToNode } = useNodeNavigation()
  const { setNewLoading } = useAiSummaryStore((s) => s)
  const filteredNodes = useFilteredNodes()
  const { currentSearch: searchTerm, clearSearch, searchFormValue } = useAppStore((s) => s)

  const { setValue, watch } = useFormContext()
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const [isAIChatActive, setIsAIChatActive] = useState(false)

  const { setAbortRequests, resetData } = useDataStore((s) => s)
  const { setBudget } = useUserStore((s) => s)

  const resetAiSummaryAnswer = useAiSummaryStore((s) => s.resetAiSummaryAnswer)
  const fetchAIData = useAiSummaryStore((s) => s.fetchAIData)

  const handleChatButtonClick = () => {
    setValue('search', '')
    clearSearch()
    setSidebarFilter('all')
    navigateToNode(null)
    navigate('/')

    setValue('aiChat', '')

    setNewLoading({
      question: '',
      answerLoading: false,
      sourcesLoading: false,
      shouldRender: true,
    })

    setIsAIChatActive(true)
  }

  const handleCloseAi = () => {
    setNewLoading(null)
    abortFetchData()
    resetAiSummaryAnswer()
    navigate('/')
  }

  const handleSearchIconClick = () => {
    setIsAIChatActive(false)
    handleCloseAi()
  }

  useEffect(() => {
    setValue('search', query || searchFormValue)
  }, [setValue, searchFormValue, query])

  useEffect(() => {
    const component = componentRef.current

    if (!component) {
      return
    }

    const handleScroll = () => {
      setIsScrolled(component?.scrollTop > 0)
    }

    component.addEventListener('scroll', handleScroll)
  }, [])

  const typing = watch('search')

  const handleFilterIconClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isFilterOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }

    setIsFilterOpen((prev) => !prev)
  }

  const handleCloseFilterSearch = () => {
    setIsFilterOpen(false)
    setAnchorEl(null)
  }

  const navigate = useNavigate()

  const handleSubmitQuestion = async (questionToSubmit: string) => {
    if (questionToSubmit) {
      resetAiSummaryAnswer()
      resetData()
      await fetchAIData(setBudget, setAbortRequests, questionToSubmit)
    }
  }

  return (
    <SearchWrapper className={clsx({ 'has-shadow': isScrolled })}>
      <SearchFilterIconWrapper>
        <AnimatedSearchWrapper isAIChatActive={isAIChatActive}>
          {isAIChatActive ? (
            <AIChatSearch className="ai-chat-section">
              <SearchIconButton data-testid="search_toggle_icon" onClick={handleSearchIconClick}>
                <SearchIcon />
              </SearchIconButton>
              <AIChatInput onSubmit={handleSubmitQuestion} />
            </AIChatSearch>
          ) : (
            <>
              <Search className="search-section">
                <SearchBar />
                <InputButton
                  data-testid="search_action_icon"
                  onClick={() => {
                    if (searchTerm) {
                      setValue('search', '')
                      clearSearch()
                      setSidebarFilter('all')
                      navigateToNode(null)
                      navigate(`/`)

                      return
                    }

                    if (typing.trim() === '') {
                      return
                    }

                    const encodedQuery = typing.replace(/\s+/g, '+')

                    navigate(`/search?q=${encodedQuery}`)
                  }}
                >
                  {!isLoading ? (
                    <>{searchTerm?.trim() ? <ClearIcon /> : <SearchIcon />}</>
                  ) : (
                    <ClipLoader color={colors.SECONDARY_BLUE} data-testid="loader" size="20" />
                  )}
                </InputButton>
              </Search>

              <IconWrapper data-testid="search_filter_icon" isFilterOpen={isFilterOpen} onClick={handleFilterIconClick}>
                {isFilterOpen ? <SearchFilterCloseIcon /> : <SearchFilterIcon />}
              </IconWrapper>

              <ChatButton onClick={handleChatButtonClick}>
                <ChatIconWrapper>
                  <ChatStarsIcon />
                </ChatIconWrapper>
                Chat
              </ChatButton>

              <FilterSearch anchorEl={anchorEl} onClose={handleCloseFilterSearch} setAnchorEl={setAnchorEl} />
            </>
          )}
        </AnimatedSearchWrapper>
      </SearchFilterIconWrapper>
      {searchTerm && (
        <SearchDetails>
          {isLoading ? (
            <SearchLoader>
              Searching <BeatLoader color={colors.SECONDARY_BLUE} size={2} />
            </SearchLoader>
          ) : (
            <>
              <div className="left">
                <span className="count">{filteredNodes.length}</span>
                <span className="label"> results</span>
              </div>
              <div className="right" style={{ alignItems: 'center' }}>
                <SelectWithPopover />
              </div>
            </>
          )}
        </SearchDetails>
      )}
    </SearchWrapper>
  )
}

const SearchWrapper = styled(Flex).attrs({
  direction: 'column',
  justify: 'center',
  align: 'stretch',
})(({ theme }) => ({
  padding: theme.spacing(3.75, 2),
  [theme.breakpoints.up('sm')]: {
    padding: '12px',
  },

  '&.has-shadow': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    background: colors.BG1,
    boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.20)',
  },
}))

const Search = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
  align: 'center',
})`
  width: 62%;
  padding: 3px 0;
`

const SearchDetails = styled(Flex).attrs({
  direction: 'row',
  justify: 'space-between',
  align: 'center',
})`
  flex-grow: 1;
  color: ${colors.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${colors.white};
  }

  .right {
    display: flex;
  }
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

  &:hover {
    /* background-color: ${colors.gray200}; */
  }

  ${SearchWrapper} input:focus + & {
    color: ${colors.primaryBlue};
  }
`

const SearchFilterIconWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const IconWrapper = styled.div<{ isFilterOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin-left: 5px;
  border: 1px solid ${colors.addAttributeBtn};
  cursor: pointer;
  border-radius: ${({ isFilterOpen }) => (isFilterOpen ? '8px' : '50%')};
  width: ${({ isFilterOpen }) => (isFilterOpen ? '34px' : '40px')};
  height: ${({ isFilterOpen }) => (isFilterOpen ? '34px' : '40px')};
  background-color: ${({ isFilterOpen }) => (isFilterOpen ? colors.white : 'transparent')};

  &:hover {
    background-color: ${({ isFilterOpen }) => (isFilterOpen ? 'rgba(255, 255, 255, 0.85)' : 'transparent')};
    border-color: ${colors.GRAY_FILTER_ICON};
  }

  svg {
    width: 15px;
    height: ${({ isFilterOpen }) => (isFilterOpen ? '11px' : '24px')};
    color: ${({ isFilterOpen }) => (isFilterOpen ? colors.black : colors.GRAY7)};
    fill: none;
  }
`

const ChatButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${colors.BUTTON1};
  border: none;
  border-radius: 20px;
  padding: 8px 14px;
  color: ${colors.white};
  font-family: Barlow;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    opacity: 0.9;
  }
`

const ChatIconWrapper = styled.div`
  svg {
    width: 20px;
    height: 20px;
    color: ${colors.white};
    fill: none;
    margin-left: calc(0px - 3px);
  }
`

const SearchIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.BG2};
  border: none;
  cursor: pointer;
  margin-right: 8px;

  svg {
    width: 45px;
    height: 45px;
    color: ${colors.GRAY7};

    &:hover {
      color: ${colors.lightGray};
    }
  }

  &:hover {
    background: ${colors.black};
  }
`

const AIChatSearch = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
  align: 'center',
})`
  width: 100%;
  padding: 3px 1px;
`

const SearchLoader = styled(Flex)`
  display: flex;
  align-items: baseline;
  flex-direction: row;
`
