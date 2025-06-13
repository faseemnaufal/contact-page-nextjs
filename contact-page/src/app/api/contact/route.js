import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs';
import { sendMail } from '@/lib/mail';

export const config = {
  api: {
    bodyParser: false
  }
};

export async function POST(req) {
  const form = formidable({ multiples: false, maxFileSize: 5 * 1024 * 1024 });

  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  });

  const file = files.file;
  if (!file || file.mimetype !== 'application/pdf') {
    return NextResponse.json({ message: 'Only PDF files are allowed.' }, { status: 400 });
  }

  try {
    await sendMail(fields, file);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Email sending failed.' }, { status: 500 });
  }
}
