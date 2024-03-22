import { render } from '@testing-library/react'
import React from 'react'
import { DataRetriever } from '..'
import { useDataStore } from '../../../stores/useDataStore'
import { useUserStore } from '../../../stores/useUserStore'

jest.mock('~/stores/useDataStore')
jest.mock('~/stores/useUserStore')

const useDataStoreMock = useDataStore as jest.MockedFunction<typeof useDataStore>
const useUserStoreMock = useUserStore as jest.MockedFunction<typeof useUserStore>

describe('DataRetriever Component', () => {
  it('calls fetchData with setBudget', () => {
    const fetchDataMock = jest.fn()
    const setBudgetMock = jest.fn()

    useDataStoreMock.mockReturnValue({ fetchData: fetchDataMock })
    useUserStoreMock.mockReturnValue([setBudgetMock])

    render(<DataRetriever />)

    expect(fetchDataMock).toHaveBeenCalledWith(setBudgetMock)
  })

  it('calls fetchData on mount', () => {
    const fetchDataMock = jest.fn()
    const setBudgetMock = jest.fn()

    useDataStoreMock.mockReturnValue({ fetchData: fetchDataMock })
    useUserStoreMock.mockReturnValue([setBudgetMock])

    render(<DataRetriever />)

    expect(fetchDataMock).toHaveBeenCalledTimes(1)
  })

  it('renders its children', () => {
    const ChildComponent = () => <div>Child Component</div>

    const { getByText } = render(
      <DataRetriever>
        <ChildComponent />
      </DataRetriever>,
    )

    expect(getByText('Child Component')).toBeInTheDocument()
  })
})
