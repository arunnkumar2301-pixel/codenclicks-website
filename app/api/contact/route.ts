import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail || !process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, message: "Email configuration is missing." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: `Code N Clicks <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Service:</strong> ${service || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f5f5f5; border-radius: 8px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        { success: false, message: error.message || "Unable to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      },
      { status: 500 }
    );
  }
}