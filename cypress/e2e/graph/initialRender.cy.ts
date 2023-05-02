import { getMockNodesLength, getScenenChildrens, host } from '../../support'

describe('Initial graph render / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept({
      hostname: host,
      method: 'GET',
      url: '/stats',
    }).as('stats')

    cy.wait('@stats', { responseTimeout: 10000 })
  })

  it('The graph is rendered', () => {
    getMockNodesLength().should('exist')
    getScenenChildrens().should('exist')

    // checking that threejs state has a scene with some child of root wich has the same length as our mockdata array
    getMockNodesLength().then((length: number) => {
      getScenenChildrens().then((children) => {
        const someOfChildrenHasSameLength = children.some((item) => item?.children?.length === length)

        expect(someOfChildrenHasSameLength).to.be.true
      })
    })
  })
})
