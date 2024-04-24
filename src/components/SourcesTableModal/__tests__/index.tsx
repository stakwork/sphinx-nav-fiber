/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import * as modalStore from '~/stores/useModalStore'
import { SourcesTableModal } from '../index'

jest.mock('~/stores/useModalStore', () => ({
  useModalStore: jest.fn(),
  useModal: jest.fn().mockImplementation((id) => ({
    close: jest.fn(),
    open: jest.fn(),
    visible: id === 'sourcesTable',
  })),
  useSomeModalIsOpen: jest.fn(),
}))

describe('SourcesTable Modal', () => {
  it('SourcesTable Modal does not close on overlay click', () => {
    const { getByTestId } = render(<SourcesTableModal />)

    const overlay = getByTestId('modal-overlay')

    fireEvent.click(overlay)

    // Check SourcesTable modal is still open
    const modalContent = getByTestId('sources-table')
    expect(modalContent).toBeInTheDocument()

    // Check close function was not called
    const { close } = modalStore.useModal('sourcesTable')

    expect(close).not.toHaveBeenCalled()
  })
})
