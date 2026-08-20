import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "info@themarkettitans.com";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, destination, journey, dates, travelers, message } = req.body;

  if (!name || !email) return res.status(400).json({ error: "Name and email are required" });

  try {
    await resend.emails.send({
      from: "I Tour On Wheels <onboarding@resend.dev>",
      to: TO,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #f5f0e8; margin: 0; padding: 0; }
    .wrap { max-width: 600px; margin: 40px auto; background: #fff; border-top: 4px solid #b5651d; }
    .header { background: #1a1a2e; padding: 32px 40px; }
    .header h1 { color: #e8d5b0; font-size: 20px; margin: 0; letter-spacing: 0.15em; text-transform: uppercase; }
    .header p { color: #8a9bb0; font-size: 11px; margin: 6px 0 0; letter-spacing: 0.2em; text-transform: uppercase; }
    .body { padding: 40px; }
    .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: #999; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1a1a2e; margin-bottom: 24px; }
    .divider { border: none; border-top: 1px solid #e8e0d0; margin: 8px 0 24px; }
    .message-box { background: #f9f6f0; border-left: 3px solid #b5651d; padding: 16px 20px; margin-top: 8px; }
    .message-box p { margin: 0; font-size: 14px; color: #444; line-height: 1.7; }
    .footer { background: #f5f0e8; padding: 20px 40px; text-align: center; font-size: 11px; color: #999; letter-spacing: 0.1em; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>I Tour On Wheels</h1>
      <p>New Journey Enquiry</p>
    </div>
    <div class="body">
      <div class="grid">
        <div><p class="label">Name</p><p class="value">${name}</p></div>
        <div><p class="label">Email</p><p class="value">${email}</p></div>
        <div><p class="label">Phone</p><p class="value">${phone || "Not provided"}</p></div>
        <div><p class="label">Travelers</p><p class="value">${travelers || "Not specified"}</p></div>
        <div><p class="label">Destination</p><p class="value">${destination || "Not specified"}</p></div>
        <div><p class="label">Travel Dates</p><p class="value">${dates || "Flexible"}</p></div>
      </div>
      <hr class="divider" />
      <p class="label">Journey Interested In</p>
      <p class="value">${journey || "Not specified"}</p>
      ${message ? `<hr class="divider" /><p class="label">Message</p><div class="message-box"><p>${message}</p></div>` : ""}
    </div>
    <div class="footer">I Tour On Wheels &nbsp;·&nbsp; info@themarkettitans.com &nbsp;·&nbsp; +1 (267) 298-7777</div>
  </div>
</body>
</html>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
