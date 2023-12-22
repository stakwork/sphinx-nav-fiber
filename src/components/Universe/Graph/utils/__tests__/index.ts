import { showResults } from '..'

describe('Show the nodeDetails only if not a person or guess', () => {
  it('Show the nodeDetails if is Admin', async () => {
    const panelDetails = showResults(true)
    expect(panelDetails).toBeTruthy()
  })

  it('If is not admin the panels will not showed', async () => {
    const panelDetails = showResults(false)
    expect(panelDetails).toBeFalsy()
  })
})
