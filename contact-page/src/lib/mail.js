import nodemailer from 'nodemailer';
import fs from 'fs';

export async function sendMail(fields, file) {
  const { name, email, subject, message } = fields;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail or service email
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Destination email
    subject: `[Contact Form] ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    attachments: [
      {
        filename: file.originalFilename,
        content: fs.createReadStream(file.filepath),
        contentType: 'application/pdf'
      }
    ]
  };

  await transporter.sendMail(mailOptions);
}
