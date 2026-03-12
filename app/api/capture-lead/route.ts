import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

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

      const pdfPath = path.join(process.cwd(), 'assets', 'never-miss-deadline-audit.pdf')
      const pdfExists = fs.existsSync(pdfPath)

      // 1. Notify you about the new lead
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

      // 2. Send the PDF audit doc to the lead
      await transporter.sendMail({
        from: `"NexFlow" <${gmailUser}>`,
        to: email,
        subject: 'Your Free Engineering Audit Doc',
        html: `
          <div style="font-family: -apple-system, sans-serif; max-width: 520px; margin: 0 auto;">
            <h1 style="font-size: 22px; margin: 0 0 12px;">Hey ${firstName},</h1>
            <p style="font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 20px;">
              Thanks for requesting the audit doc. Attached is the full framework we use to identify
              engineering risks before they cause missed deadlines.
            </p>
            <p style="font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 20px;">
              Inside you'll find the exact signals, metrics, and action plans that help engineering
              leaders ship on time, every time.
            </p>
            <p style="font-size: 15px; color: #333; line-height: 1.6; margin: 0 0 24px;">
              Want us to run the audit on your team's actual data? We'll analyze 90 days of your
              GitHub, Jira, and Slack activity and deliver a personalized risk report in 48 hours.
            </p>
            <a href="https://cal.com/arjun-dixit-0nwkzi/30min"
               style="display: inline-block; background: #0f172a; color: #fff; padding: 12px 28px;
                      border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px;">
              Book a Free Audit Call
            </a>
            <p style="margin-top: 32px; font-size: 12px; color: #999;">
              NexFlow &middot; Engineering Intelligence
            </p>
          </div>
        `,
        ...(pdfExists && {
          attachments: [{
            filename: 'Never-Miss-a-Deadline-Audit.pdf',
            path: pdfPath,
          }],
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
