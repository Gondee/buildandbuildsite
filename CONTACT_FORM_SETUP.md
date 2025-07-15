# Contact Form Setup Guide

The contact form is now functional but needs to be connected to an email service. Choose one of the following options:

## Option 1: Formspree (Easiest - No API Key Required)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like: `xyzabc123`)
5. Add to Vercel environment variables:
   - Name: `FORMSPREE_ID`
   - Value: Your form ID

## Option 2: Resend (Modern Email API)

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account (10,000 emails/month free)
3. Get your API key
4. Add to Vercel environment variables:
   - `RESEND_API_KEY`: Your API key
   - `CONTACT_EMAIL`: Where to receive emails (e.g., info@buildandbuild.co)
5. Install Resend: `npm install resend`

## Option 3: SendGrid

1. Sign up at [SendGrid.com](https://sendgrid.com)
2. Get your API key
3. Modify the API route to use SendGrid's API
4. Add environment variables

## Option 4: Email Forward Service

For immediate use without setup:
- Use a service like [EmailJS](https://www.emailjs.com) 
- Or [Web3Forms](https://web3forms.com)

## Testing

The form currently:
- Validates required fields (name, email, message)
- Shows loading state while sending
- Displays success/error messages
- Clears form on successful submission
- Logs submissions to console (for testing)

## Environment Variables Needed

Add one of these to Vercel:
- `FORMSPREE_ID` - For Formspree
- `RESEND_API_KEY` - For Resend
- `CONTACT_EMAIL` - Email to receive messages