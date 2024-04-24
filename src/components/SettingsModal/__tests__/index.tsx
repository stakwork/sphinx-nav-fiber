/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { SettingsModal } from '../index'
import * as modalStore from '~/stores/useModalStore'

jest.mock('~/stores/useModalStore', () => ({
  useModalStore: jest.fn(),
  useModal: jest.fn().mockImplementation((id) => ({
    close: jest.fn(),
    open: jest.fn(),
    visible: id === 'settings',
  })),
  useSomeModalIsOpen: jest.fn(),
}))

describe('SettingsModal', () => {
  it('Settings Modal does not close on overlay click', () => {
    const { getByTestId } = render(<SettingsModal />)

    const overlay = getByTestId('modal-overlay')

    fireEvent.click(overlay)

    // Check Settings modal is still open
    const modalContent = getByTestId('settings-modal')
    expect(modalContent).toBeInTheDocument()

    // Check close function was not called
    const { close } = modalStore.useModal('settings')

    expect(close).not.toHaveBeenCalled()
  })
})
