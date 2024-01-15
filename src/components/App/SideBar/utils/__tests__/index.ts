import { NodeType } from '..';

describe('Show the nodeDetails only if not a person or guess', () => {

  const number = Math.round(Math.random() * NodeType.length);

  it('Show the sideBarSubView if selected node is not person or guest', async () => {
    const selectedNodeType = NodeType[number]
    const sideBarSubView = selectedNodeType !== 'guest'

    expect(sideBarSubView).toBeTruthy();
  })

  it('sideBarSubview is not showed if selected node type is equal to guest or person', async () => {
    const selectedNodeType = 'guest'
    const sideBarSubView = selectedNodeType !== 'guest'

    expect(sideBarSubView).toBeFalsy()
  })
})
