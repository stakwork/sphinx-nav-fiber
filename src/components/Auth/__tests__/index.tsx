import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import * as sphinx from 'sphinx-bridge'
import * as network from '../../../network/auth'
import { useUserStore } from '../../../stores/useUserStore'
import * as utils from '../../../utils/getSignedMessage'
import { App } from '../../App'
import { AuthGuard } from '../index'

jest.mock('sphinx-bridge')
jest.mock('~/stores/useUserStore')
jest.mock('~/stores/useDataStore')
jest.mock('../../../../src/utils/versionHelper', () => null)
jest.mock('react-toastify/dist/ReactToastify.css', () => null)
jest.mock('~/components/App/Splash/SpiningSphere', () => jest.fn(() => <div data-testid="spinning sphere" />))

const useUserStoreMock = useUserStore as jest.MockedFunction<typeof useUserStore>
const getSignedMessageFromRelayMock = jest.spyOn(utils, 'getSignedMessageFromRelay')
const getIsAdminMock = jest.spyOn(network, 'getIsAdmin')

const message = 'This is a private Graph, Contact Admin'

describe('Auth Component', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    localStorage.clear()
    sessionStorage.clear()
  })

  beforeEach(() => {
    localStorage.clear()
    jest.resetAllMocks()
  })

  test.skip('should set authenticated state to true upon successful authentication', async () => {
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
      <AuthGuard>
        <App />
      </AuthGuard>,
    )

    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })

  test('should update appropriate state and local storage if user is an admin', async () => {
    const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

    useUserStoreMock.mockReturnValue({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    })

    getIsAdminMock.mockResolvedValue({ data: { isAdmin: true } })
    getSignedMessageFromRelayMock.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(
      <AuthGuard>
        <App />
      </AuthGuard>,
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
      <AuthGuard>
        <App />
      </AuthGuard>,
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
      <AuthGuard>
        <App />
      </AuthGuard>,
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
      <AuthGuard>
        <App />
      </AuthGuard>,
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
      <AuthGuard>
        <App />
      </AuthGuard>,
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
      <AuthGuard>
        <App />
      </AuthGuard>,
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
      <AuthGuard>
        <App />
      </AuthGuard>,
    )

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(''))
    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })
})
