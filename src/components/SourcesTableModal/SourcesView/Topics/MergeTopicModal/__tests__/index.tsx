import { render, fireEvent, waitFor } from '@testing-library/react'
import { MergeTopicModal } from '../index'
import * as TopicsStore from '~/stores/useTopicsStore'
import '@testing-library/jest-dom'
import { postMergeTopics } from '~/network/fetchSourcesData'

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
})
