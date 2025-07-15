import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, we'll log the contact form submission
    // You can integrate with services like:
    // 1. SendGrid
    // 2. Mailgun
    // 3. AWS SES
    // 4. Resend
    // 5. Or use a form service like Formspree

    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Option 1: Use Formspree (easiest, no API key needed)
    // Replace YOUR_FORM_ID with your actual Formspree form ID
    if (process.env.FORMSPREE_ID) {
      const formspreeResponse = await fetch(
        `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            company,
            message,
          }),
        }
      );

      if (!formspreeResponse.ok) {
        throw new Error('Failed to send message');
      }
    }

    // Option 2: Use Resend (modern email API)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Build and Build Co <noreply@buildandbuild.co>',
        to: process.env.CONTACT_EMAIL || 'info@buildandbuild.co',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toISOString()}</small></p>
        `,
      });
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}