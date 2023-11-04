import { Props, TypeTweet } from '.'

function unixTimestampInSeconds() {
  return Math.floor(Date.now() / 1000)
}

describe('TypeTweet', () => {
  const currentUnixTimestamp = unixTimestampInSeconds()

  it('should not render when date is false', () => {
    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: 0,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )

    cy.get('[data-testid="date-text"]').should('not.be.visible')
  })

  it('should display "15 seconds ago"', () => {
    const timeValueFromNow = Date.now() - 15 * 1000
    const t = new Date(timeValueFromNow).getTime() / 1000

    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: t,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )

    cy.findByText('15 seconds ago').should('be.visible')
  })

  it('should display "1 minute ago"', () => {
    const twoDaysAgo = currentUnixTimestamp - 60

    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: twoDaysAgo,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )

    cy.findByText('1 minute ago').should('be.visible')
  })

  it('should display "25 mins ago"', () => {
    const timeFromNow = currentUnixTimestamp - 1500

    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: timeFromNow,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )
  })

  it('should display "1 hour ago"', () => {
    const twoDaysAgo = currentUnixTimestamp - 3600

    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: twoDaysAgo,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )

    cy.findByText('1 hour ago').should('be.visible')
  })

  it('should display "2 hours ago"', () => {
    const twoDaysAgo = currentUnixTimestamp - 3600

    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: twoDaysAgo,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )

    cy.findByText('2 hours ago').should('be.visible')
  })

  it('should display "23 hours ago"', () => {
    const timeValueFromNow = unixTimestampInSeconds() - 82800

    const props: Props = {
      text: 'Hello, world! This is a test tweet.',
      date: timeValueFromNow,
      name: 'Test User',
      twitterHandle: 'testuser',
      verified: false,
    }

    cy.mount(
      <div style={{ backgroundColor: 'black' }}>
        <TypeTweet {...props} />
      </div>,
    )

    cy.findByText('23 hours ago').should('be.visible')
  })
})
