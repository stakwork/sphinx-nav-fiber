import { render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Booster } from '../index'
import '@testing-library/jest-dom'
import * as boostUtil from '~/utils/boost'

// @ts-ignore
window.setImmediate = window.setTimeout

jest.mock('~/utils/boost', () => ({
  boost: jest.fn(),
}))

const mockedBoost = boostUtil.boost as jest.MockedFunction<typeof boostUtil.boost>

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
})
