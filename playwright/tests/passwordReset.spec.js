const { test, expect } = require('@playwright/test');
const MailosaurClient = require('mailosaur');
const mailosaur = new MailosaurClient('YOUR_API_KEY');

test('Password reset', async ({ page }) => {
    const mailosaurServerId = 'YOUR_SERVER_ID';
    const mailosaurServerDomain = `${mailosaurServerId}.mailosaur.net`;

    // Random test email address (this uses a catch-all pattern)
    const randomString = (Math.random() + 1).toString(36).substring(7);
    const testEmailAddress = `${randomString}@${mailosaurServerDomain}`;

    // 1 - Request password reset
    await page.goto(`https://example.mailosaur.com/password-reset`);

    await page.fill('#email', testEmailAddress);
    await page.click('button[type="submit"]');

    // 2 - Get the email sent to reset the password
    const email = await mailosaur.messages.get(mailosaurServerId, {
        sentTo: testEmailAddress
    });
    await expect(email.subject).toEqual('Set your new password for ACME Product');

    // 3 - Navigate to the link extraced by Mailosaur
    passwordResetLink = email.html.links[0].href;
    await page.goto(passwordResetLink);
    await page.fill('#password', randomString);
    await page.fill('#confirmPassword', randomString);
    await page.click('button[type="submit"]');
    await expect(page.locator('h1')).toHaveText('Your new password has been set!');
});