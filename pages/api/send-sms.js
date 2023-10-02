import { Twilio } from 'twilio';

export default async function handler(req, res) {
  const { accountSid, authToken, from, to, body } = req.body;

  const client = new Twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body,
      from,
      to,
    });
    res.status(200).json({ sid: message.sid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
