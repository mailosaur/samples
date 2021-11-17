using System;
using Xunit;
using Mailosaur;
using Mailosaur.Models;
using System.Net.Mail;
using System.Net;

namespace dotnet_xunit
{
    public class EmailTests
    {
        [Fact]
        public void GetEmail()
        {
            // Do not leave your API key in code when writing actual tests!
            var mailosaurApiKey = "YOUR_API_KEY";

            var mailosaurServerId = "YOUR_SERVER_ID";
            var mailosaurServerDomain = $"{mailosaurServerId}.mailosaur.net";

            // Random test email address (this uses a catch-all pattern)
            var randomString = Guid.NewGuid().ToString();
            var testEmailAddress = $"{randomString}@{mailosaurServerDomain}";

            // 1 - Send an email into Mailosaur
            // https://mailosaur.com/docs/email-testing/sending-to-mailosaur/
            var testEmailSubject = "My test subject";
            var testEmailBody = "Hello world!";
            MockEmailSend(testEmailAddress, testEmailSubject, testEmailBody);

            // 2 - Get the email from Mailosaur
            var mailosaur = new MailosaurClient(mailosaurApiKey);
            var searchCriteria = new SearchCriteria() { SentTo = testEmailAddress };
            var email = mailosaur.Messages.Get(mailosaurServerId, searchCriteria);

            // 3 - Perform assertions on the email content
            Assert.Equal(testEmailSubject, email.Subject);
            Assert.Contains(testEmailBody, email.Html.Body);
            Assert.Equal(0, email.Attachments.Count);
            Assert.Equal(0, email.Attachments.Count);
        }

        /// <summary>
        /// You should only need this method for a proof of concept if you have
        /// no other way of sending an email into Mailosaur. See
        /// https://mailosaur.com/docs/email-testing/sending-to-mailosaur/
        /// </summary>
        private void MockEmailSend(string email, string subject, string body)
        {

            var smtpHost = "YOUR_SMTP_HOST";
            var smtpUser = "YOUR_SMTP_USERNAME";
            var smtpPassword = "YOUR_SMTP_PASSWORD";

            var smtpClient = new SmtpClient(smtpHost)
            {
                Port = 587,
                Credentials = new NetworkCredential(smtpUser, smtpPassword),
                EnableSsl = true,
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress("noreply@example.com"),
                Subject = subject,
                Body = body,
                IsBodyHtml = true,
            };

            mailMessage.To.Add(email);

            smtpClient.Send(mailMessage);
        }
    }
}
