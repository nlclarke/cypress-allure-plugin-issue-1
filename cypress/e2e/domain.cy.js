/// <reference types='cypress' />

describe('Domain', () => {
  it('Visit Site 1 - Google', () => {
    cy.visit('https://www.google.com')
  })

  it('Visit Site 2 - Bing', () => {
    cy.visit('https://www.bing.com')
  })
})