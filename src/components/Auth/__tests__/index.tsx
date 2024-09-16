import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { setupJestCanvasMock } from 'jest-canvas-mock'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import * as sphinx from 'sphinx-bridge'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import * as network from '../../../network/auth'
import { useDataStore } from '../../../stores/useDataStore'
import { useUserStore } from '../../../stores/useUserStore'
import * as utils from '../../../utils/getSignedMessage'
import { App } from '../../App'
import { appTheme } from '../../App/Providers'
import { AuthGuard } from '../index'

jest.mock('sphinx-bridge')
jest.mock('~/stores/useUserStore')
jest.mock('~/stores/useDataStore')
jest.mock('~/utils/versionHelper', () => null)
jest.mock('react-toastify/dist/ReactToastify.css', () => null)
jest.mock('~/components/App/Splash/SpiningSphere', () => jest.fn(() => <div data-testid="spinning sphere" />))

jest.mock('~/components/Universe', () => ({
  Universe: () => <div>Mocked Universe Component</div>,
}))

Object.defineProperty(navigator, 'userAgent', {
  value: 'Sphinx',
  configurable: true,
})

const useDataStoreMock = useDataStore as jest.MockedFunction<typeof useDataStore>
const useUserStoreMock = useUserStore as jest.MockedFunction<typeof useUserStore>
const getSignedMessageFromRelayMock = jest.spyOn(utils, 'getSignedMessageFromRelay')
const getIsAdminMock = jest.spyOn(network, 'getIsAdmin')

const message = 'This is a private Graph, Contact Admin'

describe('Auth Component', () => {
  afterEach(cleanup)

  beforeAll(() => {
    jest.clearAllMocks()
    localStorage.clear()
    sessionStorage.clear()
  })

  beforeEach(() => {
    localStorage.clear()
    jest.resetAllMocks()
    setupJestCanvasMock(window)

    useDataStoreMock.mockReturnValue({
      fetchData: jest.fn(),
      setCategoryFilter: jest.fn(),
      setAbortRequests: jest.fn(),
      addNewNode: jest.fn(),
      splashDataLoading: false,
    })

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        removeEventListener: jest.fn(),
      })),
    })
  })

  test('should set authenticated state to true upon successful authentication', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockResolvedValue()
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: true } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  }, 50000)

  test('should update appropriate state and local storage if user is an admin', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      isAdmin: true,
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    getIsAdminMock.mockResolvedValue({ data: { isAdmin: true } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setIsAdmin).toHaveBeenCalledWith(true))
    await waitFor(() => expect(localStorage.getItem('admin')).not.toBeNull())
  })

  test('should render the unauthorized access message if user is not authorized', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubkey' })
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: false, isMember: false } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument())
  })

  test('the unauthorized state is correctly set when the user lacks proper credentials', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: '' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })

  test('test unsuccessful attempts to enable Sphinx', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockResolvedValue(null)
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: '' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(undefined))
    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })

  test('test the public key is set correctly on successful Sphinx enablement', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubkey' })
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: '' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith('testPubkey'))
  })

  test('test the public key state is handled correctly on Sphinx enablement failure', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockRejectedValue()
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: '' })

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(''))
  })

  test('simulate errors during the authentication process and verify that they are handled gracefully.', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sphinx.enable.mockRejectedValue()
    getIsAdminMock.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    getSignedMessageFromRelayMock.mockRejectedValue(null)

    render(
      <MemoryRouter>
        <ThemeProvider theme={appTheme}>
          <StyleThemeProvider theme={appTheme}>
            <AuthGuard>
              <App />
            </AuthGuard>
          </StyleThemeProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(''))
    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })
})
