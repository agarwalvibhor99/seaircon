import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

const resendEndpoint = "https://api.resend.com/emails";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid form submission." },
      { status: 400 },
    );
  }

  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const message = clean(payload.message);
  const companyWebsite = clean(payload.companyWebsite);

  // Honeypot spam trap. Real visitors never see this field.
  if (companyWebsite) {
    return NextResponse.json({
      message: "Thanks. We will get back to you shortly.",
    });
  }

  if (!firstName || !email || !phone || !message) {
    return NextResponse.json(
      { message: "Please fill in your name, email, phone and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "noida@seaircon.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "SE Aircon Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { message: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const html = `
    <div style="font-family:Arial,sans-serif;color:#112238;line-height:1.55">
      <h2 style="margin:0 0 16px">New website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <hr style="border:0;border-top:1px solid #dfe6ef;margin:20px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    "New website inquiry",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Submitted: ${submittedAt}`,
    "",
    message,
  ].join("\n");

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New SE Aircon inquiry from ${fullName}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Unable to send your inquiry. Please call or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Thanks. We will get back to you shortly.",
  });
}
