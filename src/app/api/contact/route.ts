import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit, rateLimitKey } from "@/lib/rateLimit";

const SITE_URL = process.env.SITE_URL || "https://exports.ractysh.com";

function display(value: string | null | undefined): string {
  const trimmed = value?.trim();
  return trimmed || "Not provided";
}

function renderAutoReplyHtml(data: {
  name: string; email: string; phone: string;
  company: string | null; country: string | null;
  subject: string | null; services: string | string[] | null;
  message: string | null;
}): string {
  const fields: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Company", display(data.company)],
    ["Country", display(data.country)],
    ["Subject", data.subject || "General Inquiry"],
  ];
  const servicesStr = data.services
    ? (Array.isArray(data.services) ? data.services.join(", ") : data.services)
    : null;
  if (servicesStr) fields.push(["Services", servicesStr]);

  const fieldRows = fields
    .map(([label, value]) => `
    <tr><td style="padding:6px 0;font-size:14px;line-height:20px;color:#62584e;border-bottom:1px solid #f0ebe2">
      <span style="font-weight:600;color:#20130f;display:inline-block;width:120px">${escapeHtml(label)}</span>
      <span style="color:#4a3f35">${escapeHtml(value)}</span>
    </td></tr>`)
    .join("");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Thank You — RACTYSH Exim</title></head>
<body style="margin:0;padding:0;background-color:#f8f3ea;font-family:Georgia,'Times New Roman',serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f3ea"><tr><td align="center" style="padding:40px 16px">
<table width="540" cellpadding="0" cellspacing="0" style="max-width:540px;width:100%">
<tr><td style="background:linear-gradient(135deg,#0a0806,#1c120e);border-radius:12px 12px 0 0;padding:32px 40px 24px;text-align:center">
<table cellpadding="0" cellspacing="0" style="margin:0 auto">
<tr><td style="font-size:28px;font-weight:700;letter-spacing:2px;color:#d9bd7a;font-family:Georgia,'Times New Roman',serif">RACTYSH Exim</td></tr>
<tr><td style="font-size:11px;font-weight:400;letter-spacing:4px;color:#d9bd7a;padding-top:4px;text-transform:uppercase">Global Trade & Imports</td></tr>
</table></td></tr>
<tr><td style="background-color:#ffffff;padding:40px 40px 32px;border-left:1px solid #e8ddca;border-right:1px solid #e8ddca">
<table cellpadding="0" cellspacing="0" width="100%">
<tr><td style="font-size:28px;font-weight:700;color:#20130f;padding-bottom:8px;font-family:Georgia,'Times New Roman',serif">Thank You, ${escapeHtml(data.name)}</td></tr>
<tr><td style="height:3px;width:48px;background-color:#d9bd7a;margin:0 0 24px;display:block"></td></tr>
<tr><td style="font-size:16px;line-height:26px;color:#62584e;padding-bottom:16px">We have received your inquiry. A member of our trade team will reach out within <strong style="color:#20130f">24–48 business hours</strong>.</td></tr>
<tr><td><table cellpadding="0" cellspacing="0" width="100%">
<tr><td style="padding:16px 0 8px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#a47a2d;font-family:Arial,sans-serif">Your Submission Details</td></tr>
${fieldRows}
</table></td></tr>
${data.message ? `<tr><td style="padding:16px 0 0">
<div style="padding:16px;border-left:3px solid #a47a2d;background:#fcf9f4;border-radius:8px">
<p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#a47a2d;font-family:Arial,sans-serif">Your Message</p>
<p style="margin:0;font-size:14px;line-height:22px;color:#4a3f35">${escapeHtml(data.message)}</p>
</div></td></tr>` : ""}
</table></td></tr>
<tr><td style="background:linear-gradient(135deg,#0a0806,#1c120e);border-radius:0 0 12px 12px;padding:24px 40px;text-align:center">
<p style="font-size:12px;line-height:18px;color:#9d8a74;margin:0;font-family:Arial,Helvetica,sans-serif">RACTYSH EXIM PVT LTD</p>
<p style="font-size:11px;line-height:18px;color:#7a6a58;margin:4px 0 0;font-family:Arial,Helvetica,sans-serif">This is an automated acknowledgement.</p>
</td></tr>
</table></td></tr></table></body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const rl = rateLimit(rateLimitKey(request, "contact"), {
    max: 3,
    windowMs: 60_000,
  });
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    let { name, email, phone, company, country, subject, services, message } = body;

    name = name ? escapeHtml(String(name).trim()) : "";
    email = email ? String(email).trim() : "";
    phone = phone ? escapeHtml(String(phone).trim()) : "";
    company = company ? escapeHtml(String(company).trim()) : null;
    country = country ? escapeHtml(String(country).trim()) : null;
    subject = subject ? escapeHtml(String(subject).trim()) : null;
    services = services ? (Array.isArray(services) ? services.map((s: string) => escapeHtml(s)) : escapeHtml(String(services))) : null;
    message = message ? escapeHtml(String(message).trim()) : null;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 },
      );
    }

    const submission = (await prisma.submission.create({
      data: {
        name,
        email,
        phone,
        company: company || null,
        country: country || null,
        subject: subject || null,
        services: services ? (Array.isArray(services) ? services.join(", ") : services) : null,
        message: message || null,
      },
    }))! as { id: string; read: boolean; createdAt: string; [key: string]: unknown };

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const adminEmail = process.env.ADMIN_EMAIL || "ractysh@gmail.com";

      const servicesList = Array.isArray(services) && services.length
        ? services.map((s: string) => `    <li>${s}</li>`).join("\n")
        : services && typeof services === "string"
          ? `    <li>${services}</li>`
          : "    <li>Not specified</li>";

      await resend.emails.send({
        from: process.env.EMAIL_FROM || "RACTYSH EXIM PVT LTD <onboarding@resend.dev>",
        to: adminEmail,
        subject: `New Trade Inquiry — ${subject || "General"} — ${name} from ${country || "Unknown"}`,
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; padding: 0; background: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .wrapper { max-width: 600px; margin: 0 auto; padding: 24px 16px; }
    .card { background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    .header { background: #0f172a; padding: 32px; text-align: center; }
    .header img { height: 36px; width: auto; }
    .header h1 { color: #111827; font-size: 18px; margin: 12px 0 0; font-weight: 700; letter-spacing: 0.05em; }
    .header p { color: rgba(255,255,255,0.5); font-size: 12px; margin: 4px 0 0; }
    .body { padding: 32px; }
    .badge { display: inline-block; background: #111827; color: #fff; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 12px; border-radius: 4px; margin-bottom: 16px; }
    .field { margin-bottom: 16px; }
    .field-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 2px; }
    .field-value { font-size: 14px; color: #0f172a; }
    .field-value a { color: #111827; text-decoration: none; }
    .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
    ul { margin: 4px 0; padding-left: 20px; }
    ul li { font-size: 14px; color: #0f172a; margin-bottom: 4px; }
    .message-box { background: #f8f7f4; border-radius: 8px; padding: 16px; font-size: 14px; color: #0f172a; line-height: 1.6; white-space: pre-wrap; }
    .footer { padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb; }
    .footer p { font-size: 11px; color: #9ca3af; margin: 2px 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <img src="${SITE_URL}/logo.png" alt="RACTYSH EXIM PVT LTD" style="height:36px" />
        <h1>RACTYSH EXIM PVT LTD</h1>
        <p>New Trade Inquiry</p>
      </div>
      <div class="body">
        <div class="badge">${submission.read ? "Read" : "New Submission"}</div>

        <div class="field">
          <div class="field-label">Subject</div>
          <div class="field-value" style="font-size:16px;font-weight:600">${subject || "General Inquiry"}</div>
        </div>

        <div class="divider"></div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${name}</div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value"><a href="mailto:${email}">${email}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Phone</div>
            <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${company || "Not provided"}</div>
          </div>
          <div class="field">
            <div class="field-label">Country</div>
            <div class="field-value">${country || "Not provided"}</div>
          </div>
          <div class="field">
            <div class="field-label">Submitted</div>
            <div class="field-value">${new Date(submission.createdAt).toLocaleString()}</div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="field">
          <div class="field-label">Services Interested In</div>
          <ul>
${servicesList}
          </ul>
        </div>

        ${message ? `
        <div class="divider"></div>
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-box">${message}</div>
        </div>` : ""}
      </div>
      <div class="footer">
        <p><strong>RACTYSH EXIM PVT LTD</strong></p>
        <p>ID: ${submission.id}</p>
        <p>${new Date(submission.createdAt).toISOString()}</p>
      </div>
    </div>
  </div>
</body>
</html>`,
      });
    } catch (emailErr) {
      console.error("Failed to send email notification:", emailErr);
    }

    (async () => {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      resend.emails.send({
        from: process.env.EMAIL_FROM || "RACTYSH EXIM PVT LTD <onboarding@resend.dev>",
        to: [email],
        subject: `Thank You, ${name} — RACTYSH Exim`,
        html: renderAutoReplyHtml({ name, email, phone, company, country, subject, services, message }),
      }).catch((err) => console.error("[import-export-contact] Auto-reply send failed:", err));
    })().catch((err) => console.error("[import-export-contact] Auto-reply wrapper failed:", err));

    return NextResponse.json({
      message:
        "Thank you for your inquiry. Our trade team will contact you within 24 hours.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 },
    );
  }
}
