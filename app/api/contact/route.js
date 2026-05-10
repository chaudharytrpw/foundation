import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sangchaajin@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}