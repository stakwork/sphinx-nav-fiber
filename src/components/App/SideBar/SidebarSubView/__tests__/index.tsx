/* eslint-disable padding-line-between-statements */
import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import moment from 'moment'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { SideBarSubView } from '..'
import { useAppStore } from '../../../../../stores/useAppStore'
import { useDataStore } from '../../../../../stores/useDataStore'
import { useGraphStore, useSelectedNode } from '../../../../../stores/useGraphStore'
import { appTheme } from '../../../Providers'

jest.mock('reactflow/dist/style.css', () => null)
jest.mock('~/components/App/Splash/SpiningSphere', () => jest.fn(() => <div data-testid="spinning sphere" />))
jest.mock('~/components/App/SideBar/Episode/Timestamp/Equalizer', () => jest.fn(() => <div data-testid="equalizer" />))
jest.mock('~/components/Icons/CloseIcon', () => jest.fn(() => <div data-testid="close-icon" />))
jest.mock('~/components/Icons/ChevronLeftIcon', () => jest.fn(() => <div data-testid="chevron-icon" />))

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
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn((fn) => (event) => fn(event)),
    reset: jest.fn((fn) => () => fn()),
  })),
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

jest.mock('~/stores/useGraphStore', () => ({
  useGraphStore: jest.fn(),
  useSelectedNode: jest.fn(),
}))

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn(),
}))

jest.mock('~/components/Universe/useNodeNavigation', () => ({
  useNodeNavigation: () => ({
    navigateToNode: jest.fn(),
  }),
}))

const useDataStoreMock = useDataStore as jest.MockedFunction<typeof useDataStore>
const useSelectedNodeMock = useSelectedNode as jest.MockedFunction<typeof useSelectedNode>
const useAppStoreMock = useAppStore as jest.MockedFunction<typeof useAppStore>
const useGraphStoreMock = useGraphStore as jest.MockedFunction<typeof useGraphStore>

const mockSelectedNode = {
  date: moment().unix(),
  boost: 10,
  text: 'Example tweet text',
  name: 'John Doe',
  verified: true,
  profile_picture: 'http://example.com/image.png',
  twitter_handle: 'johndoe',
  ref_id: '1',
  tweet_id: '123456789',
}

describe('Test SideBarSubView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    useDataStoreMock.mockReturnValue({ setTeachMe: jest.fn(), showTeachMe: false, setAbortRequests: jest.fn() })
    useGraphStoreMock.mockReturnValue({ setSelectedNode: jest.fn() })
    useSelectedNodeMock.mockReturnValue(mockSelectedNode)
    useAppStoreMock.mockReturnValue({ setSidebarOpen: jest.fn() })
  })

  it('asserts that the component is not visible when open is false', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <SideBarSubView open={false} />
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    expect(getByTestId('sidebar-sub-view')).toHaveStyle({ visibility: 'hidden' })
  })

  it('asserts that close button resets the selected node and hides the teach me', () => {
    const [setSelectedNodeMock, setTeachMeMock] = new Array(2).fill(jest.fn())

    useDataStoreMock.mockReturnValue({
      setTeachMe: setTeachMeMock,
      showTeachMe: false,
    })

    useGraphStoreMock.mockReturnValue({
      setSelectedNode: setSelectedNodeMock,
    })

    const { getByTestId } = render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <SideBarSubView open={false} />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

    expect(getByTestId('close-icon')).toBeInTheDocument()

    fireEvent.click(getByTestId('close-icon'))
    ;(async () => {
      await waitFor(() => {
        expect(setSelectedNodeMock).toHaveBeenCalledWith(null)
        expect(setTeachMeMock).toHaveBeenCalledWith(false)
      })
    })()
  })

  it('asserts that the collapse button arrow renders correctly in both states', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <SideBarSubView open={false} />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

    expect(getByTestId('chevron-icon')).toBeInTheDocument()
  })

  it('asserts that the collapse button set the sidebar to close', () => {
    const setSidebarOpenMock = jest.fn()

    useAppStoreMock.mockReturnValue({ setSidebarOpen: setSidebarOpenMock })

    const { getByTestId } = render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <SideBarSubView open={false} />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

    expect(getByTestId('chevron-icon')).toBeInTheDocument()

    fireEvent.click(getByTestId('chevron-icon'))
    ;(async () => {
      await waitFor(() => {
        expect(setSidebarOpenMock).toHaveBeenCalledWith(false)
      })
    })()
  })

  it('asserts that SideBarSubView component and interacts with necessary hooks', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <SideBarSubView open={false} />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    ;(async () => {
      await waitFor(() => {
        expect(useAppStoreMock).toHaveBeenCalled()
        expect(useDataStoreMock).toHaveBeenCalled()
        expect(useGraphStoreMock).toHaveBeenCalled()
        expect(useSelectedNodeMock).toHaveBeenCalled()
      })
    })()
  })
})
