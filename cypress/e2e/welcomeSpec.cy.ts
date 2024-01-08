describe('welcome spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4173/')
  })

  it('should have the required page title', () => {
    cy.visit('http://localhost:4173/')
    cy.contains('Vite + React')
  })
})