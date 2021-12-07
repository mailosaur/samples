/// <reference types="cypress" />

describe('Password reset', () => {
  it('performs a password reset', () => {
    const mailosaurServerId = 'YOUR_SERVER_ID'
    const mailosaurServerDomain = `${mailosaurServerId}.mailosaur.net`

    // Random test email address (this uses a catch-all pattern)
    const randomString = (Math.random() + 1).toString(36).substring(7)
    const testEmailAddress = `${randomString}@${mailosaurServerDomain}`

    // 1 - Request password reset
    cy.visit(`https://example.mailosaur.com/password-reset`)

    cy.get('#email').type(testEmailAddress)
    cy.get('button[type="submit"]').click()

    // 2 - Get the email sent to reset the password
    cy.mailosaurGetMessage(mailosaurServerId, {
      sentTo: testEmailAddress
    }).then((email) => {
      expect(email.subject).to.equal('Set your new password for ACME Product')

      // 3 - Navigate to the link extraced by Mailosaur
      const passwordResetLink = email.html.links[0].href
      cy.visit(passwordResetLink)
      cy.get('#password').type(randomString)
      cy.get('#confirmPassword').type(randomString)
      cy.get('button[type="submit"]').click()

      cy.get('h1').contains('Your new password has been set!')
    })
  })
})
