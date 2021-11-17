# Mailosaur Samples

Sample integration and end-to-end tests built by Mailosaur.

## End-to-end automation

- [Playwright](#playwright)
- [Cypress](#cypress)
- [WebdriverIO](#webdriverio)
- [.NET (XUnit)](#net-xunit)

## Playwright

### Running the tests

1. Navigate to the `playwright` folder, and install dependencies:

```sh
cd playwright
npm install
```

2. Replace all instances of [`YOUR_API_KEY`](https://mailosaur.com/docs/managing-your-account/api-keys/) and `YOUR_SERVER_ID` in the code.

3. Run the tests:

```sh
npm test
```

## Cypress

### Running the tests

1. Navigate to the `cypress` folder, and install dependencies:

```sh
cd cypress
npm install
```

2. Replace all instances of `YOUR_SERVER_ID` in the code, and replace [`YOUR_API_KEY`](https://mailosaur.com/docs/managing-your-account/api-keys/) within the `cypress.json` file.

3. Run the tests:

```sh
npm test
```

## WebdriverIO

### Running the tests

1. Navigate to the `webdriverio` folder, and install dependencies:

```sh
cd webdriverio
npm install
```

2. Replace all instances of [`YOUR_API_KEY`](https://mailosaur.com/docs/managing-your-account/api-keys/) and `YOUR_SERVER_ID` in the code.

3. Run the tests:

```sh
npm test
```

## .NET (XUnit)

The tests include a method called `MockEmailSend`, which can be replaced with whatever logic you would usually use to send an email. You can learn more about sending email to Mailosaur for testing in our [documentation](https://mailosaur.com/docs/email-testing/sending-to-mailosaur/).

### Running the tests

1. Navigate to the `dotnet-xunit` folder:

```sh
cd dotnet-xunit
```

2. Open `EmailTests.cs` and replace [`YOUR_API_KEY`](https://mailosaur.com/docs/managing-your-account/api-keys/) and `YOUR_SERVER_ID`. If you use the `MockEmailSend` method, you will also need to configure `smtpHost`, `smtpUser`, and `smtpPassword`.

3. Run the tests:

```sh
dotnet test
```
