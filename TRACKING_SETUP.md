# First-Party Tracking System Setup

This project includes a comprehensive first-party tracking system with Slack alerts and an admin dashboard.

## Features

- **First-party tracking pixel** - No third-party cookies, full data ownership
- **Supabase database** - All tracking data stored in your own database
- **Slack alerts** - Real-time notifications for every page view
- **Admin dashboard** - Beautiful analytics interface at `/admin`
- **UTM parameter tracking** - Track campaign performance
- **Visitor identification** - Persistent visitor IDs across sessions

## Setup Instructions

### 1. Run Database Scripts

The tracking system requires two database tables. Run these scripts in order:

1. `scripts/001_create_page_views_table.sql` - Creates the main tracking table
2. `scripts/002_create_alerts_table.sql` - Creates the alerts tracking table

You can run these scripts directly in v0 or in your Supabase SQL editor.

### 2. Configure Slack Webhook

To receive Slack notifications for page views:

1. Go to your Slack workspace settings
2. Create a new Incoming Webhook: https://api.slack.com/messaging/webhooks
3. Copy the webhook URL
4. Add it to your environment variables as `SLACK_WEBHOOK_URL` or `NEXT_PUBLIC_SLACK_WEBHOOK_URL`

### 3. Environment Variables

Make sure these environment variables are set (should already be configured via Supabase integration):

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (for admin dashboard)
- `SLACK_WEBHOOK_URL` - Your Slack webhook URL (for notifications)

## How It Works

### Tracker Component

The `<Tracker />` component is included in your root layout and automatically:
- Tracks every page view
- Captures UTM parameters from URLs
- Records visitor information (screen size, language, timezone, etc.)
- Generates persistent visitor IDs
- Sends data to your Supabase database
- Triggers Slack notifications

### Admin Dashboard

Access the analytics dashboard at `/admin` to view:
- Total page views and unique visitors
- Top pages by traffic
- Top referrers and traffic sources
- UTM campaign performance
- Recent activity feed
- Time range filters (7, 30, 90 days)

### Data Privacy

This is a first-party tracking system, which means:
- All data stays in your Supabase database
- No third-party cookies
- Full data ownership and control
- GDPR/CCPA friendly (you control the data)

## API Endpoints

- `POST /api/track` - Records page views (called automatically by Tracker component)
- `GET /api/admin/stats?days=30` - Returns analytics data (used by admin dashboard)

## Customization

### Disable Slack Notifications

If you don't want Slack notifications, simply don't set the `SLACK_WEBHOOK_URL` environment variable. The tracking will still work and data will be stored in Supabase.

### Exclude Pages from Tracking

The admin dashboard (`/admin/*`) is automatically excluded from tracking. To exclude other pages, modify the `Tracker` component:

```typescript
// In components/tracker.tsx
if (pathname?.startsWith("/admin") || pathname?.startsWith("/your-page")) {
  return
}
```

### Customize Slack Messages

Edit the `sendSlackNotification` function in `lib/slack.ts` to customize the notification format.

## Troubleshooting

### Tracker not recording views

1. Check browser console for errors
2. Verify Supabase environment variables are set
3. Ensure database tables are created with correct RLS policies
4. Check that the `page_views` table allows public inserts

### Admin dashboard shows no data

1. Verify `SUPABASE_SERVICE_ROLE_KEY` is set (required to read data)
2. Check that database tables exist and have data
3. Open browser developer tools and check for API errors

### Slack notifications not working

1. Verify `SLACK_WEBHOOK_URL` is set correctly
2. Test the webhook URL manually with curl
3. Check the `alerts` table to see if notifications are being attempted
