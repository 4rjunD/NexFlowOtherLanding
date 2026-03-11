import { NextResponse } from 'next/server'

// To set up Slack webhook:
// 1. Go to https://api.slack.com/apps → Create New App → From Scratch
// 2. Enable "Incoming Webhooks" → Add New Webhook to Workspace
// 3. Pick the channel you want notifications in
// 4. Copy the webhook URL
// 5. Add to .env.local: SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, company, email, phone } = body

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const webhookUrl = process.env.SLACK_WEBHOOK_URL

    if (webhookUrl) {
      const slackMessage = {
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: 'New Audit Lead',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${firstName}` },
              { type: 'mrkdwn', text: `*Company:*\n${company || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Email:*\n${email}` },
              { type: 'mrkdwn', text: `*Phone:*\n${phone || 'Not provided'}` },
            ],
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Submitted at ${new Date().toISOString()}`,
              },
            ],
          },
        ],
      }

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
