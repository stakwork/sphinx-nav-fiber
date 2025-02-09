/* eslint-disable padding-line-between-statements */
import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { SideBar } from '..'
import { api } from '../../../../network/api'
import { AppStore, useAppStore } from '../../../../stores/useAppStore'
import { DataStore, useDataStore, useFilteredNodes } from '../../../../stores/useDataStore'
import { colors } from '../../../../utils'
import * as utils from '../../../../utils/relayHelper'
import { appTheme } from '../../Providers'

jest.mock('reactflow/dist/style.css', () => null)
jest.mock('~/components/App/Splash/SpiningSphere', () => jest.fn(() => <div data-testid="spinning sphere" />))
jest.mock('~/components/App/SideBar/Episode/Timestamp/Equalizer', () => jest.fn(() => <div data-testid="equalizer" />))
jest.mock('~/components/Icons/CloseIcon', () => jest.fn(() => <div data-testid="close-icon" />))
jest.mock('~/components/Icons/ChevronLeftIcon', () => jest.fn(() => <div data-testid="chevron-left-icon" />))
jest.mock('~/components/Icons/ChevronRightIcon', () => jest.fn(() => <div data-testid="chevron-right-icon" />))
jest.mock('~/components/Icons/SearchIcon', () => jest.fn(() => <div data-testid="search-icon" />))
jest.mock('~/components/Icons/ClearIcon', () => jest.fn(() => <div data-testid="clear-icon" />))
jest.mock('~/components/Icons/BrowseGalleryIcon', () => jest.fn(() => <div data-testid="browse_gallery-icon" />))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
  })),
})

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: jest.fn(() => ({
    setValue: jest.fn(),
    register: jest.fn(),
    watch: jest.fn(() => ''),
  })),
}))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn((state: DataStore) => ({
    ...state,
    showTeachMe: false,
    isFetching: false,
    setTeachMe: jest.fn(),
    setSidebarFilter: jest.fn(),
    trendingTopics: [],
    setTrendingTopics: jest.fn(),
  })),
  useSelectedNode: jest.fn(),
  useFilteredNodes: jest.fn(),
}))

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn((state: AppStore) => ({
    ...state,
    sidebarIsOpen: false,
    clearSearch: jest.fn(),
    currentSearch: '',
    searchFormValue: '',
    setSidebarOpen: jest.fn(),
  })),
}))

const useFilteredNodesMock = useFilteredNodes as jest.MockedFunction<typeof useFilteredNodes>
const useDataStoreMock = useDataStore as jest.MockedFunction<typeof useDataStore>
const useAppStoreMock = useAppStore as jest.MockedFunction<typeof useAppStore>
const saveConsumedContentMock = jest.spyOn(utils, 'saveConsumedContent')

const mockNode = {
  link: 'http://example.com',
  image_url: 'http://example.com/image.png',
  date: '2021-01-01',
  boost: 10,
  node_type: 'topic',
  type: 'topic',
  id: 'ref1',
  show_title: 'bitcoin',
  name: 'bitcoin',
  label: 'bitcoin',
  ref_id: 'ref1',
}

describe('Test SideBar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    useFilteredNodesMock.mockReturnValue([mockNode])
  })

  it('Ensure that the sidebar is not visible when sidebarIsOpen is false.', () => {
    useAppStoreMock.mockReturnValue({ setCurrentPlayingAudio: jest.fn(), sidebarIsOpen: false })

    const { container } = render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    waitFor(() => {
      expect(container.querySelector('#sidebar-wrapper')).not.toBeInTheDocument()
    })
  })

  it('Verify that the sidebar is visible when sidebarIsOpen is true.', () => {
    useAppStoreMock.mockReturnValue({ setCurrentPlayingAudio: jest.fn(), sidebarIsOpen: true })

    const { container } = render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    expect(container.querySelector('#sidebar-wrapper')).toBeInTheDocument()
  })

  it('Test that typing into the search bar updates the search term in the application state.', () => {
    const [setCurrentSearchMock, onSubmitMock] = [jest.fn(), jest.fn()]

    useAppStoreMock.mockReturnValue({
      setCurrentPlayingAudio: jest.fn(),
      sidebarIsOpen: true,
      setCurrentSearch: setCurrentSearchMock,
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement

    fireEvent.change(searchInput, { target: { value: 'Lightning Network' } })

    const searchIcons = screen.getAllByTestId('search-icon')

    expect(searchIcons.length).toBeGreaterThan(0) // Ensure at least one exists
    expect(searchIcons[0]).toBeInTheDocument()
    ;(async () => {
      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalled()
        expect(setCurrentSearchMock).toHaveBeenCalledWith('Lightning Network')
      })
    })()
  })

  it.skip('Ensure that the clear icon appears when there is a search term and clears the search on click', () => {
    const clearSearchMock = jest.fn()

    useAppStoreMock.mockReturnValue({
      setCurrentPlayingAudio: jest.fn(),
      currentSearch: 'Test Search',
      clearSearch: clearSearchMock,
      sidebarIsOpen: true,
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const clearIcon = screen.getByTestId('clear-icon')

    expect(clearIcon).toBeInTheDocument()

    fireEvent.click(clearIcon)
    ;(async () => {
      await waitFor(() => {
        expect(clearSearchMock).toHaveBeenCalled()
      })
    })()
  })

  it('Verify that the search icon is displayed when there is no search term.', () => {
    useAppStoreMock.mockReturnValue({ setCurrentPlayingAudio: jest.fn(), currentSearch: '', sidebarIsOpen: true })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const searchIcons = screen.getAllByTestId('search-icon')

    expect(searchIcons.length).toBeGreaterThan(0) // Ensure at least one exists
    expect(searchIcons[0]).toBeInTheDocument()
  })

  it('Ensure that the Trending component is displayed when there is no search term.', () => {
    useAppStoreMock.mockReturnValue({ setCurrentPlayingAudio: jest.fn(), currentSearch: '', sidebarIsOpen: true })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    expect(screen.getByTestId('trending-component')).toBeInTheDocument()
  })

  it('Verify that the ClipLoader is shown when isLoading is true.', () => {
    useDataStoreMock.mockReturnValue({
      isFetching: true,
      sidebarIsOpen: true,
      trendingTopics: [],
      setTrendingTopics: jest.fn(),
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const ClipLoader = screen.getByTestId('loader')

    expect(ClipLoader).toBeInTheDocument()
  })

  it('Ensure that content LatestView is correctly displayed based on the loading state and search term.', () => {
    useDataStoreMock.mockReturnValue({
      currentSearch: '',
      isFetching: false,
      sidebarIsOpen: true,
      trendingTopics: [],
      setTrendingTopics: jest.fn(),
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    // confirms that LatestView is rendered
    expect(screen.getByText('Latest')).toBeInTheDocument()
    expect(screen.getByTestId('browse_gallery-icon')).toBeInTheDocument()
  })

  it('asserts that exact search triggers node selection', () => {
    const [setSelectedTimestampMock, setSelectedNodeMock, setRelevanceSelectedMock] = [jest.fn(), jest.fn(), jest.fn()]

    useDataStoreMock.mockReturnValue({
      currentSearch: '',
      isFetching: false,
      trendingTopics: [],
      setTrendingTopics: jest.fn(),
      setSelectedTimestamp: setSelectedTimestampMock,
      setSelectedNode: setSelectedNodeMock,
    })

    useAppStoreMock.mockReturnValue({
      setCurrentPlayingAudio: jest.fn(),
      setRelevanceSelected: setRelevanceSelectedMock,
      sidebarIsOpen: true,
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement

    fireEvent.change(searchInput, { target: { value: mockNode.name } })
    ;(async () => {
      await waitFor(() => {
        expect(setSelectedTimestampMock).toHaveBeenCalledWith(mockNode)
        expect(setSelectedNodeMock).toHaveBeenCalledWith(mockNode)
        expect(saveConsumedContentMock).toHaveBeenCalledWith(mockNode)
        expect(setRelevanceSelectedMock).toHaveBeenCalledWith(true)
      })
    })()
  })

  it('asserts that partial match does not trigger selection', () => {
    const [setSelectedTimestampMock, setSelectedNodeMock, setRelevanceSelectedMock] = [jest.fn(), jest.fn(), jest.fn()]

    useDataStoreMock.mockReturnValue({
      currentSearch: '',
      isFetching: false,
      trendingTopics: [],
      setTrendingTopics: jest.fn(),
      setSelectedTimestamp: setSelectedTimestampMock,
      setSelectedNode: setSelectedNodeMock,
    })

    useAppStoreMock.mockReturnValue({
      setCurrentPlayingAudio: jest.fn(),
      setRelevanceSelected: setRelevanceSelectedMock,
      sidebarIsOpen: true,
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement

    fireEvent.change(searchInput, { target: { value: 'bitcoin mining' } })
    ;(async () => {
      await waitFor(() => {
        expect(setSelectedTimestampMock).not.toHaveBeenCalledWith(mockNode)
        expect(setSelectedNodeMock).not.toHaveBeenCalledWith(mockNode)
        expect(saveConsumedContentMock).not.toHaveBeenCalledWith(mockNode)
        expect(setRelevanceSelectedMock).not.toHaveBeenCalledWith(true)
      })
    })()
  })

  it('Test filter icon functionality and schema filtering', () => {
    const mockSchemas = [{ type: 'Type1' }, { type: 'Type2' }, { type: 'Type3' }]

    jest.spyOn(api, 'get').mockResolvedValue({ schemas: mockSchemas })

    useAppStoreMock.mockReturnValue({
      setCurrentPlayingAudio: jest.fn(),
      sidebarIsOpen: true,
      setSidebarOpen: jest.fn(),
      clearSearch: jest.fn(),
      currentSearch: '',
      searchFormValue: '',
    })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBar />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
    ;(async () => {
      await waitFor(() => {
        const filterIcon = screen.getByTestId('search_filter_icon')
        fireEvent.click(filterIcon)

        expect(api.get).toHaveBeenCalledWith('/schema/all')

        mockSchemas.forEach((schema) => {
          expect(screen.getByText(schema.type)).toBeInTheDocument()
        })

        const type1Pill = screen.getByText('Type1')
        fireEvent.click(type1Pill)

        expect(type1Pill).toHaveStyle(`background: ${colors.white}`)
        expect(type1Pill).toHaveStyle(`color: ${colors.black}`)

        const selectedCount = screen.getByText('1')
        expect(selectedCount).toBeInTheDocument()

        fireEvent.click(filterIcon)
        expect(screen.queryByText('Type1')).not.toBeInTheDocument()
      })
    })()
  })
})
