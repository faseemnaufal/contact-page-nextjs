import nodemailer from 'nodemailer';
import fs from 'fs';

export async function sendMail(fields, files) {
  const {
    name,
    lastName,
    email,
    subject = 'New Contact Form Submission',
    message,
    nationality,
    contactNumber,
    nic,
    branch,
    programme
  } = fields;

  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  });

  const filesArray = Array.isArray(files) ? files : [files];

  const attachments = await Promise.all(
    filesArray.map(async file => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type
    }))
  );

  const mailOptions = {
    from: `"Website Contact" <no-reply@example.com>`,
    to: 'your-email@example.com', 
    subject,
    text: `
  Name: ${name} ${lastName}
  Email: ${email}
  Contact Number: ${contactNumber}
  NIC/Passport: ${nic}
  Nationality: ${nationality}
  Branch: ${branch}
  Programme: ${programme}

  Message:
  ${message}
    `,
    attachments
  };

  await transporter.sendMail(mailOptions);
}
