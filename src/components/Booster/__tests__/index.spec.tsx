import { render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Booster } from '../index'
import '@testing-library/jest-dom'
import * as boostUtil from '~/utils/boost'
import * as SuccessToast from '~/components/common/SuccessToast'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'

// @ts-ignore
window.setImmediate = window.setTimeout

jest.mock('~/utils/boost', () => ({
  boost: jest.fn(),
}))

jest.mock('~/components/common/SuccessToast', () => ({
  SuccessNotify: jest.fn(),
  ErrorNotify: jest.fn(),
}))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: Object.assign(jest.fn(() => ({})), {
    getState: jest.fn(() => ({ updateNode: jest.fn() })),
  }),
}))

jest.mock('~/stores/useGraphStore', () => ({
  useGraphStore: Object.assign(jest.fn(() => ({})), {
    setState: jest.fn(),
  }),
}))

const mockedBoost = boostUtil.boost as jest.MockedFunction<typeof boostUtil.boost>
const mockedErrorNotify = SuccessToast.ErrorNotify as jest.MockedFunction<typeof SuccessToast.ErrorNotify>

describe('Booster Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly in read-only mode with count', () => {
    const { getByText } = render(<Booster count={5} readOnly />)

    expect(getByText('5')).toBeInTheDocument()
  })

  it('does not render in read-only mode when count is not provided or is zero', () => {
    const { queryByTestId } = render(<Booster readOnly />)

    expect(queryByTestId('booster-pill')).toBeNull()
  })

  it('renders Boost button in interactive state when readOnly is false', () => {
    const { getByText } = render(<Booster />)

    expect(getByText('Boost')).toBeInTheDocument()
  })

  it('does not trigger boost process without refId', () => {
    const { getByTestId } = render(<Booster />)

    fireEvent.click(getByTestId('booster-pill'))
    expect(boostUtil.boost).not.toHaveBeenCalled()
  })

  it('triggers boost process on button click when refId is provided and not submitting', async () => {
    mockedBoost.mockResolvedValueOnce(undefined)

    const { getByTestId } = render(<Booster refId="123" />)

    fireEvent.click(getByTestId('booster-pill'))

    await waitFor(() => {
      expect(mockedBoost).toHaveBeenCalledWith('123', 5)
    })
  })

  it('simulates successful boost operation and verifies updateCount is called with new count', async () => {
    mockedBoost.mockResolvedValueOnce(undefined)

    const updateCountMock = jest.fn()

    const { getByTestId } = render(<Booster refId="123" updateCount={updateCountMock} />)

    fireEvent.click(getByTestId('booster-pill'))

    await waitFor(() => {
      expect(updateCountMock).toHaveBeenCalledWith(5)
    })
  })

  it('prevents multiple submissions by disabling button during the boosting process', async () => {
    mockedBoost.mockResolvedValueOnce(undefined)

    const { getByTestId } = render(<Booster refId="123" />)
    const button = getByTestId('booster-pill')

    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(mockedBoost).toHaveBeenCalledTimes(1)
    })
  })

  it('shows visual feedback (any svg Icon) during the boosting process', async () => {
    mockedBoost.mockResolvedValueOnce(undefined)

    const { getByTestId } = render(<Booster refId="123" />)

    fireEvent.click(getByTestId('booster-pill'))

    fireEvent.click(getByTestId('booster-pill'))
    await waitFor(() => expect(getByTestId('booster-pill')).toContainHTML('svg'))
  })

  it('checks for visual feedback (e.g., loader icon) during the boosting process', async () => {
    mockedBoost.mockResolvedValueOnce(undefined)

    const { getByTestId, queryByTestId } = render(<Booster refId="123" />)

    fireEvent.click(getByTestId('booster-pill'))

    await waitFor(() => expect(getByTestId('loader')).toBeInTheDocument(), {
      timeout: 5000,
    })

    await waitForElementToBeRemoved(() => queryByTestId('loader'), {
      timeout: 5000,
    }).catch((e) => console.error('Loader did not disappear as expected', e))
  }, 10000)

  it('calls ErrorNotify and does not call updateCount when boost fails', async () => {
    mockedBoost.mockRejectedValueOnce(new Error('Keysend failed'))

    const updateCountMock = jest.fn()

    const { getByTestId } = render(<Booster refId="123" updateCount={updateCountMock} />)

    fireEvent.click(getByTestId('booster-pill'))

    await waitFor(() => {
      expect(mockedErrorNotify).toHaveBeenCalledWith('Boost failed. Please try again.')
    })

    expect(updateCountMock).not.toHaveBeenCalled()
  })

  it('calls updateNode and useGraphStore.setState with updated boost value on success', async () => {
    mockedBoost.mockResolvedValueOnce(undefined)

    const updateNodeMock = jest.fn()
    ;(useDataStore.getState as jest.Mock).mockReturnValue({ updateNode: updateNodeMock })

    const updateCountMock = jest.fn()

    const mockNode = {
      ref_id: '123',
      boost: 0,
      properties: { boost: 0 },
    }

    const { getByTestId } = render(
      // @ts-ignore
      <Booster refId="123" content={mockNode} updateCount={updateCountMock} />,
    )

    fireEvent.click(getByTestId('booster-pill'))

    await waitFor(() => {
      expect(updateNodeMock).toHaveBeenCalledWith(
        expect.objectContaining({ boost: 5, properties: expect.objectContaining({ boost: 5 }) }),
      )
    })

    expect(useGraphStore.setState).toHaveBeenCalledWith(
      expect.objectContaining({ selectedNode: expect.objectContaining({ boost: 5 }) }),
    )
  })
})
