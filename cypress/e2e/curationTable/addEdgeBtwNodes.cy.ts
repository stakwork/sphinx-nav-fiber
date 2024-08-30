describe('Add Edge between two nodes', () => {
  it('Add Edge Between Two Nodes', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/curation/edge*',
    }).as('addEdge')

    cy.intercept({
      method: 'GET',
      url: `http://localhost:8444/api/curation/search/*`,
    }).as('searchNode')

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics').then((interception) => {
      const responseBody = interception.response.body

      const responseData = responseBody.data

      let currentTopic

      let topicName

      let edgeTopicName

      const edgeType = 'RELATED_TO'

      cy.get('tbody > tr:first')
        .within(() => {
          cy.get('td:nth-child(2)').then(($td) => {
            topicName = $td.text().trim()
            cy.get('.approve-wrapper button').eq(1).click()
          })
        })
        .then(() => {
          cy.get('tbody > tr:nth-child(4)')
            .within(() => {
              cy.get('td:nth-child(2)').then(($td) => {
                edgeTopicName = $td.text().trim()
              })
            })
            .then(() => {
              cy.get('div[data-testid="add_edge"]').click()
              cy.get('#addEdge').should('exist')
              cy.contains('label', 'Type').closest('div').find('input').type(edgeType)
              cy.contains('label', 'Type').closest('div').parent().find('div[data-testid="RELATED_TO"]').click()

              cy.contains('label', 'To').closest('div').find('input').type(edgeTopicName)

              cy.contains('label', 'To').closest('div').parent().find(`div[data-testid="${edgeTopicName}"]`).click()
              cy.wait('@searchNode')

              for (let i = 0; i < responseData.length; i++) {
                const data = responseData[i]
                if (data.name === topicName) {
                  currentTopic = { ...data }
                  break
                }
              }
              cy.contains('button', 'Confirm').click()
              cy.wait('@addEdge').then((interception) => {
                expect(interception.response.statusCode).to.eq(200)
              })
              cy.request(`http://localhost:8444/api/prediction/graph/edges/${currentTopic.ref_id}`).then((response) => {
                const responseBody = response.body
                let node
                let edge
                for (let i = 0; i < responseBody.nodes.length; i++) {
                  if (responseBody.nodes[i].name === edgeTopicName) {
                    node = { ...responseBody.nodes[i] }
                    break
                  }
                }
                expect(edgeTopicName).to.equal(node?.name)
                for (let i = 0; i < responseBody.edges.length; i++) {
                  if (responseBody.edges[i].target === node.ref_id) {
                    edge = { ...responseBody.edges[i] }
                    break
                  }
                }
                expect(edge.edge_type).to.equal(edgeType)
              })
              cy.get('#addEdge').should('not.exist')
            })
        })
    })
  })
})
