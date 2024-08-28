describe('Test Curation Table', () => {
  it.skip('Search Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&search=Bitcoin*',
    }).as('searchTopic')

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('input[placeholder="Search ..."]').type('Bitcoin')

    cy.wait('@searchTopic')

    cy.get('tbody').find('tr').should('have.length.greaterThan', 0)

    cy.get('[data-testid="topic-search-container"]').find('button[type="button"]').click()
  })

  it.skip('Rename a Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info*',
    }).as('loadTopics')

    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:8444/api/node*',
    }).as('renameTopic')

    const newTopic = 'Testing Rename Topic'

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text()

        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="rename"]').click()

    cy.get('#editTopic').should('exist')

    cy.get('#cy-topic').clear().type(newTopic)
    cy.contains('button', 'Save').click()

    cy.wait('@renameTopic')

    cy.get('#editTopic').should('not.exist')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()

        expect(tdValue).to.equal(newTopic)
      })
    })
  })

  it.skip('Merge Two Topics', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info*',
    }).as('loadTopics')

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/curation/merge*',
    }).as('mergeTopic')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/curation/search/authenticity*',
    }).as('topicSearch')

    const mergeTopic = 'authenticity'
    let specificValue = ''
    let matchFound = false

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    // Get node content intercept
    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()

        specificValue = tdValue
        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="merge"]').click()

    cy.get('#blur-on-select').type(mergeTopic)

    cy.wait('@topicSearch')
    cy.get('div[data-testid="authenticity"]').click()

    cy.get('[data-testid="merge-topics-button"]').click()

    cy.wait('@mergeTopic')

    cy.get('#mergeTopic').should('not.exist')

    cy.get('thead').contains('Muted').click()

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === specificValue) {
              matchFound = true
            }
          })
      })
      .then(() => {
        expect(matchFound).to.be.true
      })
  })

  it.skip('Mute Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:8444/api/node*',
    }).as('muteTopic')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=True&sort_by=date&node_type=Topic*',
    }).as('loadMutedTopics')

    let specificValue = ''
    let secondSpecificValue = ''
    let firstMatchFound = false
    let secondMatchFound = false

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()

        specificValue = tdValue
        cy.get('.approve-wrapper button').eq(0).click()
      })
    })

    cy.wait('@muteTopic')

    cy.get('thead').contains('Muted').click()

    cy.wait('@loadMutedTopics')

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === specificValue) {
              firstMatchFound = true
            }
          })
      })
      .then(() => {
        expect(firstMatchFound).to.be.true
      })

    cy.get('thead').contains('Muted').click()

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        const tdValue = $td.text().trim()

        secondSpecificValue = tdValue
        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="mute"]').click()

    cy.wait('@muteTopic')

    cy.get('thead').contains('Muted').click()

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === secondSpecificValue) {
              secondMatchFound = true
            }
          })
      })
      .then(() => {
        expect(secondMatchFound).to.be.true
      })
  })

  it.skip('Unmute Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:8444/api/node*',
    }).as('muteTopic')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=True&sort_by=date&node_type=Topic*',
    }).as('loadMutedTopics')

    let specificValue = ''
    let secondSpecificValue = ''
    let firstMatchFound = false
    let secondMatchFound = false

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('thead').contains('Muted').click()

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()

        specificValue = tdValue
        cy.get('.approve-wrapper button').eq(0).click()
      })
    })

    cy.wait('@muteTopic')

    cy.get('thead').contains('Muted').click()

    cy.wait('@loadTopics')

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === specificValue) {
              firstMatchFound = true
            }
          })
      })
      .then(() => {
        expect(firstMatchFound).to.be.true
      })

    cy.get('thead').contains('Muted').click()

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        const tdValue = $td.text().trim()

        secondSpecificValue = tdValue
        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="unmute"]').click()

    cy.wait('@muteTopic')

    cy.get('thead').contains('Muted').click()

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === secondSpecificValue) {
              secondMatchFound = true
            }
          })
      })
      .then(() => {
        expect(secondMatchFound).to.be.true
      })
  })

  it.skip('Add Edge Between Two Nodes', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/curation/search/Racism*',
    }).as('searchNode')

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/curation/edge*',
    }).as('addEdge')

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics').then((interception) => {
      const responseBody = interception.response.body

      const responseData = responseBody.data

      let currentTopic

      let topicName

      const edgeTopicName = 'Racism'

      const edgeType = 'RELATED_TO'

      cy.get('tbody > tr:first')
        .within(() => {
          cy.get('td:nth-child(2)').then(($td) => {
            topicName = $td.text().trim()
            cy.get('.approve-wrapper button').eq(1).click()
          })
        })
        .then(() => {
          cy.get('div[data-testid="add_edge"]').click()

          cy.get('#addEdge').should('exist')

          cy.contains('label', 'Type').closest('div').find('input').type(edgeType)

          cy.contains('label', 'Type').closest('div').parent().find('div[data-testid="RELATED_TO"]').click()

          cy.contains('label', 'To').closest('div').find('input').type(edgeTopicName)

          cy.contains('label', 'To').closest('div').parent().find('div[data-testid="Racism"]').click()

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

  it.skip('Filter topics', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    let firstCount

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(4)').then(($td) => {
        const tdValue = $td.text().trim()

        firstCount = parseInt(tdValue)
      })
    })

    cy.get('thead').contains('Count').click()

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(4)').then(($td) => {
        const tdValue = parseInt($td.text().trim())

        expect(tdValue).to.be.gt(firstCount)
      })
    })
  })
})
