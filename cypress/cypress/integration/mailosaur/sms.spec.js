/// <reference types="cypress" />

describe('SMS', () => {
  it('finds SMS message', () => {
    const mailosaurServerId = 'YOUR_SERVER_ID'
    const mailosaurServerDomain = `${mailosaurServerId}.mailosaur.net`

    // Number shown in the SMS tab within Mailosaur
    const phoneNumber = '18005551234';

    // 1 - Perform an action that sends an SMS message to your number
    // ...
    // ...

    // 2 - Find a message sent to that number
    cy.mailosaurGetMessage(mailosaurServerId, {
      sentTo: phoneNumber
    }).then((sms) => {
      expect(sms.text.body).to.contain('Your verification code is')
    })
  })
})
