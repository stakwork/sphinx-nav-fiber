import { actionMenu, addNodeModal, addNodeSubmitButton, host, toast } from '../../support'
import { checkbox, description, endTime, link, startTime, tagError, tags } from './const'

describe('Add Node Form / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const modal = () => cy.get(addNodeModal)
  const submitButton = () => cy.get(addNodeSubmitButton)
  const tagErrorMessage = () => cy.get(tagError)
  const linkInput = () => cy.get(link)
  const startTimeInput = () => cy.get(startTime)
  const endTimeInput = () => cy.get(endTime)
  const descriptionInput = () => cy.get(description)
  const tagsInput = () => cy.get(tags)
  const toastBody = () => cy.get(toast)
  const checkboxButton = () => cy.get(checkbox)

  it('submitting the form with all fields empty yields 5 error messages', () => {
    cy.get(actionMenu).click({ waitForAnimations: false })
    cy.get('#cy-add-content-menu').click({ waitForAnimations: false })

    cy.get('div.react-dropdown-select').click({ waitForAnimations: false })

    cy.get('span.react-dropdown-select-item').eq(0).click({ waitForAnimations: false })

    checkboxButton().click({ waitForAnimations: false })

    submitButton().click({ waitForAnimations: false })

    cy.contains(/the field is required/i).should('be.visible')

    tagErrorMessage()
      .should('be.visible')
      .and('contain.text', 'You need to enter at least 1 topic tag to submit a node.')
  })

  it('all fields filled out correctly submits the form and checkbox checked, closes the modal and displays custom success message', () => {
    cy.intercept(
      {
        hostname: host,
        method: 'POST',
        url: '/add_node',
      },
      {
        body: {
          success: true,
        },
        statusCode: 200,
      },
    ).as('add_node')

    cy.get(actionMenu).click({ waitForAnimations: false })
    cy.get('#cy-add-content-menu').click({ waitForAnimations: false })

    cy.get('div.react-dropdown-select').click({ waitForAnimations: false })

    cy.get('span.react-dropdown-select-item').eq(0).click({ waitForAnimations: false })

    checkboxButton().click({ waitForAnimations: false })

    linkInput().type('youtube.com/watch?v=Midgx8bBDMk', {
      waitForAnimations: false,
    })

    startTimeInput().type('000000')
    endTimeInput().type('000030')
    descriptionInput().type('description')
    tagsInput().type('test').type('{enter}')

    submitButton().click({ waitForAnimations: false })

    cy.wait('@add_node', { timeout: 10000 })

    modal().should('not.exist')

    // Waiting for Toast opacity keyframe to complete
    cy.wait(3000)

    toastBody().should('be.visible').and('contain.text', 'Submitted!')
  })

  it('checkbox checked, submitting the form but receiving an error response from the server, displays custom error message', () => {
    cy.intercept(
      {
        hostname: host,
        method: 'POST',
        url: '/add_node',
      },
      {
        body: { error: { message: 'Payment required' } },
        statusCode: 402,
      },
    ).as('add_node')

    cy.get(actionMenu).click({ waitForAnimations: false })
    cy.get('#cy-add-content-menu').click({ waitForAnimations: false })

    cy.get('div.react-dropdown-select').click({ waitForAnimations: false })

    cy.get('span.react-dropdown-select-item').eq(0).click({ waitForAnimations: false })

    checkboxButton().click({ waitForAnimations: false })

    linkInput().type('youtube.com/watch?v=Midgx8bBDMk', {
      waitForAnimations: false,
    })

    startTimeInput().type('000000')
    endTimeInput().type('000030')
    descriptionInput().type('description')
    tagsInput().type('test').type('{enter}')

    submitButton().click({ waitForAnimations: false })

    cy.wait('@add_node', { timeout: 10000 })

    // Waiting for Toast opacity keyframe to complete
    cy.wait(3000)

    toastBody().should('be.visible').and('contain.text', 'Submission failed, please try again.')
  })
})
