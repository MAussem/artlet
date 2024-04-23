import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

const apiKey = process.env.MAILCHIMP_API_KEY;

mailchimp.setConfig({
  apiKey: apiKey,
  server: `us7`  // Correct server address
});

interface SubscribeRequest {
  email: string;
}

interface ApiResponse {
  error: string | null;
  message?: string;
}

interface MailchimpError {
  response: {
      body: {
          detail: string;
      };
  };
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> {
  if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
  }

  const { email } = req.body as SubscribeRequest;

  if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
  }

  try {
    const listId = "a61f51ba52";
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
    });

    console.log('Mailchimp response:', response);
    res.status(200).json({ error: null, message: 'Subscription successful' });
  } catch (error: unknown) {
    console.error('Subscription error:', error);
    let errorMessage = 'An unexpected error occurred';

    if (typeof error === "object" && error !== null) {
        const mailchimpError = error as MailchimpError;
        errorMessage = mailchimpError.response?.body?.detail || mailchimpError.message || errorMessage;
    }
    
    res.status(500).json({ error: errorMessage });
  }
}
