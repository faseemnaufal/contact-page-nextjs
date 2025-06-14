import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

export async function POST(req) {
  const formData = await req.formData();

  const fields = {
    name: formData.get('name'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    nationality: formData.get('nationality'),
    contactNumber: formData.get('contactNumber'),
    nic: formData.get('nic'),
    branch: formData.get('branch'),
    programme: formData.get('programme'),
  };

  const files = formData.getAll('files');

  const isValid = files.every(file =>
    file && file.type === 'application/pdf'
  );
  if (!isValid) {
    return NextResponse.json({ message: 'Only PDF files are allowed.' }, { status: 400 });
  }

  try {
    await sendMail(fields, files);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Email sending failed.' }, { status: 500 });
  }
}