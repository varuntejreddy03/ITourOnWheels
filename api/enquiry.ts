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
        <h2>New Journey Enquiry — I Tour On Wheels</h2>
        <table cellpadding="6">
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || "Not provided"}</td></tr>
          <tr><td><b>Destination</b></td><td>${destination || "Not specified"}</td></tr>
          <tr><td><b>Journey</b></td><td>${journey || "Not specified"}</td></tr>
          <tr><td><b>Travel Dates</b></td><td>${dates || "Flexible"}</td></tr>
          <tr><td><b>Travelers</b></td><td>${travelers || "Not specified"}</td></tr>
        </table>
        ${message ? `<p><b>Message:</b><br/>${message}</p>` : ""}
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
