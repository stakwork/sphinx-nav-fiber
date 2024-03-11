import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { SourcesView } from '..'
import { useFeatureFlagStore } from '../../../../stores/useFeatureFlagStore'
import { useUserStore } from '../../../../stores/useUserStore'

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: jest.fn(),
}))

jest.mock('~/stores/useFeatureFlagStore', () => ({
  useFeatureFlagStore: jest.fn(),
}))

const useFeatureFlagStoreMock = useFeatureFlagStore as jest.MockedFunction<typeof useFeatureFlagStore>
const useUserStoreMock = useUserStore as jest.MockedFunction<typeof useUserStore>

describe('Test SourceView', () => {
  it('assserts that when queuedSourceFlag is false, queued sources column is hidden', () => {
    useFeatureFlagStoreMock.mockReturnValue([false])
    useUserStoreMock.mockReturnValue([false])

    const { queryByText } = render(<SourcesView />)

    expect(queryByText('Queued sources')).not.toBeInTheDocument()
  })
})
