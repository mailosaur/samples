const MailosaurClient = require('mailosaur');
const mailosaur = new MailosaurClient('YOUR_API_KEY');

describe('Password reset', () => {
    let passwordResetLink;

    it('should send a password reset email', async () => {
        const mailosaurServerId = 'YOUR_SERVER_ID';
        const mailosaurServerDomain = `${mailosaurServerId}.mailosaur.net`;

        // Random test email address (this uses a catch-all pattern)
        const randomString = (Math.random() + 1).toString(36).substring(7);
        const testEmailAddress = `${randomString}@${mailosaurServerDomain}`;

        // 1 - Request password reset
        await browser.url(`https://example.mailosaur.com/password-reset`);

        await $('#email').setValue(testEmailAddress);
        await $('button[type="submit"]').click();

        // 2 - Get the email sent to reset the password
        const email = await mailosaur.messages.get(mailosaurServerId, {
            sentTo: testEmailAddress
        });
        await expect(email.subject).toEqual('Set your new password for ACME Product');

        // 3 - Navigate to the link extraced by Mailosaur
        passwordResetLink = email.html.links[0].href;
        await browser.url(passwordResetLink);
        await $('#password').setValue(randomString);
        await $('#confirmPassword').setValue(randomString);
        await $('button[type="submit"]').click();
        await expect($('h1')).toHaveText('Your new password has been set!');
    });
});

