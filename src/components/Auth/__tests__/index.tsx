import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { afterEach } from 'node:test'
import React from 'react'
import * as sphinx from 'sphinx-bridge'
import { Auth } from '..'
import * as authNetwork from '../../../network/auth'
import * as useUserStoreModule from '../../../stores/useUserStore'
import * as utils from '../../../utils'

jest.mock('sphinx-bridge')
jest.mock('~/network/auth')
jest.mock('../../../utils')

jest.mock('../../../stores/useUserStore')

const [mockSetBudget, mockSetIsAdmin, mockSetPubKey] = [jest.fn(), jest.fn(), jest.fn()]

const message = 'This is a private Graph, Contact Admin'

describe('Auth Component', () => {
  beforeAll(() => {
    jest.clearAllMocks()
    localStorage.clear()
    sessionStorage.clear()

    useUserStoreModule.useUserStore.mockImplementation(() => [mockSetBudget, mockSetIsAdmin, mockSetPubKey])

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
    const mockSetAuthenticated = jest.fn()

    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<Auth setAuthenticated={mockSetAuthenticated} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetAuthenticated).toHaveBeenCalledWith(true))
  })

  test('should update appropriate state and local storage if user is an admin', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: true } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<Auth setAuthenticated={jest.fn()} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetIsAdmin).toHaveBeenCalledWith(true))
    await waitFor(() => expect(localStorage.getItem('admin')).not.toBeNull())
  })

  test('should render the unauthorized access message if user is not authorized', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: false, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<Auth setAuthenticated={jest.fn()} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument())
  })

  test('the unauthorized state is correctly set when the user lacks proper credentials', async () => {
    const mockSetAuthenticated = jest.fn()

    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<Auth setAuthenticated={mockSetAuthenticated} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetAuthenticated).toHaveBeenCalledWith(true))
  })

  test('test unsuccessful attempts to enable Sphinx', async () => {
    const mockSetAuthenticated = jest.fn()

    sphinx.enable.mockResolvedValue(null)
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<Auth setAuthenticated={mockSetAuthenticated} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetPubKey).toHaveBeenCalledWith(undefined))
    await waitFor(() => expect(mockSetAuthenticated).toHaveBeenCalledWith(true))
  })

  test('test the public key is set correctly on successful Sphinx enablement', async () => {
    const mockSetAuthenticated = jest.fn()

    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<Auth setAuthenticated={mockSetAuthenticated} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetPubKey).toHaveBeenCalledWith('testPubKey'))
  })

  test('test the public key state is handled correctly on Sphinx enablement failure', async () => {
    const mockSetAuthenticated = jest.fn()

    sphinx.enable.mockRejectedValue()
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage' })

    render(<Auth setAuthenticated={mockSetAuthenticated} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetPubKey).toHaveBeenCalledWith(''))
  })

  test('simulate errors during the authentication process and verify that they are handled gracefully.', async () => {
    const mockSetAuthenticated = jest.fn()

    sphinx.enable.mockRejectedValue()
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: true, isMember: false } })
    utils.getSignedMessageFromRelay.mockRejectedValue()

    render(<Auth setAuthenticated={mockSetAuthenticated} />)

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(mockSetPubKey).toHaveBeenCalledWith(''))
    await waitFor(() => expect(mockSetAuthenticated).not.toHaveBeenCalledWith(true))
  })

  test('displays a loading indicator while the authentication process is ongoing', async () => {
    sphinx.enable.mockResolvedValue({ pubkey: 'testPubKey' })
    authNetwork.getIsAdmin.mockResolvedValue({ data: { isAdmin: false, isPublic: false, isMember: false } })
    utils.getSignedMessageFromRelay.mockResolvedValue({ message: 'testMessage', signature: 'testSignature' })

    render(<Auth setAuthenticated={jest.fn()} />)

    expect(screen.getByTestId('PropagateLoader')).toBeInTheDocument()

    jest.advanceTimersByTime(5000)

    await waitFor(() => expect(screen.queryByTestId('PropagateLoader')).not.toBeInTheDocument())
  })
})
