import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Gmail SMTP setup:
// 1. Go to https://myaccount.google.com/apppasswords
// 2. Generate an app password for "Mail"
// 3. Add to .env.local:
//    GMAIL_USER=your@gmail.com
//    GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

export async function POST(request: Request) {
  try {
    const { firstName, company, email, phone } = await request.json()

    if (!firstName || !email || !company || !phone) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_APP_PASSWORD

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      })

      await transporter.sendMail({
        from: gmailUser,
        to: gmailUser,
        subject: `New Audit Lead: ${firstName} from ${company}`,
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 480px;">
            <h2 style="margin: 0 0 16px; font-size: 20px;">New Audit Lead</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; width: 80px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${firstName}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
            </table>
            <p style="margin-top: 16px; font-size: 12px; color: #999;">Submitted ${new Date().toLocaleString()}</p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
