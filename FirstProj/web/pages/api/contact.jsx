const { SuperfaceClient } = required("@superfaceai/one-sdk");

// You can manage tokens here: https://superface.ai/insights
const sdk = new SuperfaceClient({
  sdkAuthToken:
    "sfs_3ba3d928c98b7d99a44c965af6f63774a5de7569e73a1b6df8297dab78810ccc59a179a7b6a35c8794da01402b0165c70a36aad1a55eb917c3d11392672139b3_41335101",
});

async function run() {
  // Load the profile
  const profile = await sdk.getProfile("communication/send-email@2.2.0");

  // Use the profile
  const result = await profile.getUseCase("SendEmail").perform(
    {
      from: "no-reply@example.com",
      to: "jane.doe@example.com",
      subject: "Your order has been shipped!",
      text: "Hello Jane, your recent order on Our Shop has been shipped.",
      attachments: [
        {
          filename: "order.pdf",
          type: "application/pdf",
          content: "JVBERi0xLjQKJeLjz9MKMyAwIG9...",
        },
      ],
    },
    {
      provider: "sendgrid",
      security: {
        bearer_token: {
          token: "<your token from sendgrid>",
        },
      },
    }
  );

  // Handle the result
  try {
    const data = result.unwrap();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

run();
