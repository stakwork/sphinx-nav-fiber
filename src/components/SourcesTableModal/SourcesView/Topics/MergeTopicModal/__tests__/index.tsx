/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { postMergeTopics } from '~/network/fetchSourcesData'
import * as TopicsStore from '~/stores/useTopicsStore'
import { MergeTopicModal } from '../index'

jest.mock('~/stores/useTopicsStore')
jest.mock('~/network/fetchSourcesData')

describe('MergeTopicModal', () => {
  it('removes the merged node from the table', async () => {
    const mockClose = jest.fn()
    const mockPostMergeTopics = jest.fn().mockResolvedValue(undefined)
    const mockSetState = jest.fn()

    jest.spyOn(TopicsStore, 'useTopicsStore').mockImplementation(() => ({
      ids: ['1', '2', '3'],
      total: 3,
      setState: mockSetState,
    }))
    ;(postMergeTopics as jest.Mock).mockImplementation(mockPostMergeTopics)

    const { getByTestId } = render(
      <MergeTopicModal
        multiTopics={[
          {
            ref_id: '1',
            name: 'Topic 1',
            node_type: 'Type',
            is_muted: 'no',
            edgeList: [],
            edgeCount: 0,
            date_added_to_graph: new Date().toISOString(),
          },
        ]}
        onClose={mockClose}
      />,
    )

    waitFor(async () => {
      fireEvent.click(getByTestId('merge-topics-button'))
      await waitFor(() => expect(mockPostMergeTopics).toHaveBeenCalled())

      expect(mockSetState).toHaveBeenCalledWith(expect.any(Function))

      const updateFn = mockSetState.mock.calls[0][0]
      const newState = updateFn({ ids: ['1', '2', '3'], total: 3 })

      expect(newState.ids).not.toContain('1')
      expect(newState.total).toBe(2)
    })
  })

  it('Merge Topics Button should be enabled on swap and on selecting a node', async () => {
    const mockClose = jest.fn()

    const { getByTestId } = render(
      <MergeTopicModal
        multiTopics={[
          {
            ref_id: '1',
            name: 'Topic 1',
            node_type: 'Type',
            is_muted: 'no',
            edgeList: [],
            edgeCount: 0,
            date_added_to_graph: new Date().toISOString(),
          },
        ]}
        onClose={mockClose}
      />,
    )

    waitFor(async () => {
      const mergeButton = getByTestId('merge-topics-button')

      expect(mergeButton).toBeDisabled()

      const toNodeDropdown = getByTestId('to-node')

      fireEvent.change(toNodeDropdown, { target: { value: 'Renewable Energy' } })
      fireEvent.keyDown(toNodeDropdown, { key: 'Enter', code: 'Enter' })
      expect(mergeButton).toBeEnabled()

      const swapIcon = getByTestId('swap-icon')

      fireEvent.click(swapIcon)
      expect(mergeButton).toBeEnabled()
    })
  })
})
