import { NodeType } from '..';

describe('Show the nodeDetails only if not a person or guess', () => {

  const number = Math.round(Math.random() * 2);

  it('Show the nodeDetails if is Admin', async () => {
    const panelDetails = NodeType[3] === 'guest'

    expect(panelDetails).toBeTruthy()
  })

  it('If is not admin the panels will not showed', async () => {
    const panelDetails = NodeType[number] === 'guest'

    expect(panelDetails).toBeFalsy()
  })
})
