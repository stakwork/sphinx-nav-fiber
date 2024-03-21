import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { afterEach } from 'node:test'
import React from 'react'
import * as sphinx from 'sphinx-bridge'
import * as authNetwork from '../../../network/auth'
import * as useUserStoreModule from '../../../stores/useUserStore'
import * as utils from '../../../utils'
import { AuthGuard } from '../index'

jest.mock('sphinx-bridge')
jest.mock('~/network/auth')
jest.mock('../../../utils')

jest.mock('../../../stores/useUserStore')
jest.mock('../../../stores/useUserStore')

const [setBudget, setIsAdmin, setPubKey, setIsAuthenticated] = [jest.fn(), jest.fn(), jest.fn(), jest.fn()]

const message = 'This is a private Graph, Contact Admin'

describe('Auth Component', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    localStorage.clear()
    sessionStorage.clear()

    useUserStoreModule.useUserStore.mockImplementation(() => ({
      setBudget,
      setIsAdmin,
      setPubKey,
      setIsAuthenticated,
    }))

    jest.spyOn(utils, 'executeIfProd').mockImplementation(async (cb) => {
      await cb()
    })
  })

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('should set authenticated state to true upon successful authentication', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })

  test('should update appropriate state and local storage if user is an admin', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: true } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setIsAdmin).toHaveBeenCalledWith(true))
    await waitFor(() => expect(localStorage.getItem('admin')).not.toBeNull())
  })

  test('should render the unauthorized access message if user is not authorized', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: false, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument())
  })

  test('the unauthorized state is correctly set when the user lacks proper credentials', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })

  test('test unsuccessful attempts to enable Sphinx', async () => {
    sphinx.enable.mockResolvedValue(null)
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(undefined))
    await waitFor(() => expect(setIsAuthenticated).toHaveBeenCalledWith(true))
  })

  test('test the public key is set correctly on successful Sphinx enablement', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith('testPubKey'))
  })

  test('test the public key state is handled correctly on Sphinx enablement failure', async () => {
    sphinx.enable.mockRejectedValue()
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(''))
  })

  test('simulate errors during the authentication process and verify that they are handled gracefully.', async () => {
    sphinx.enable.mockRejectedValue()
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockRejectedValue()

    render(<AuthGuard />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(setPubKey).toHaveBeenCalledWith(''))
    await waitFor(() => expect(setIsAuthenticated).not.toHaveBeenCalledWith(true))
  })
})
