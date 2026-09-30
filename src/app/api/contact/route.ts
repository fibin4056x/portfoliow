import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // TODO: Connect mail service provider (e.g. Brevo API / Resend / Nodemailer)
    // Example:
    // await sendMail({ to: 'fibinkunnath@gmail.com', subject, text: message, replyTo: email });
    console.log('[CONTACT_FORM_SUBMISSION]', { name, email, subject, message, timestamp: new Date().toISOString() });

    return NextResponse.json(
      {
        success: true,
        message: 'Architectural inquiry logged successfully. Fibin will respond shortly!',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[CONTACT_API_ERROR]', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try the direct mailto fallback.' },
      { status: 500 }
    );
  }
}
