import { useAppStore } from '..'

describe('useAppStore', () => {
  beforeEach(() => {
    useAppStore.setState({ universeQuestionIsOpen: false })
  })

  it('can explicitly open and close the universe question splash', () => {
    useAppStore.getState().setUniverseQuestionIsOpen(true)

    expect(useAppStore.getState().universeQuestionIsOpen).toBe(true)

    useAppStore.getState().setUniverseQuestionIsOpen(false)

    expect(useAppStore.getState().universeQuestionIsOpen).toBe(false)
  })

  it('preserves toggle behavior when no explicit state is provided', () => {
    useAppStore.getState().setUniverseQuestionIsOpen()

    expect(useAppStore.getState().universeQuestionIsOpen).toBe(true)
  })
})
