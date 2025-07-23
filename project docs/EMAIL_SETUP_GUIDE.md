# EmailJS Setup Guide for Feedback Form

## Overview
Your feedback form is now configured to use EmailJS, a service that sends emails directly from your static website without needing a backend server. This is perfect for GitHub Pages!

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for ease)
   - **Outlook** 
   - **Yahoo**
   - **Custom SMTP**

### For Gmail Setup:
1. Select "Gmail"
2. Click "Connect Account" 
3. Authorize EmailJS to access your Gmail
4. Your Service ID will be generated (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Feedback from AI Training Website - {{feedback_type}}
```

**Body:**
```html
<h2>New Feedback Received</h2>

<p><strong>Type:</strong> {{feedback_type}}</p>
<p><strong>From:</strong> {{user_name}} ({{user_email}})</p>
<p><strong>Time:</strong> {{timestamp}}</p>
<p><strong>Page:</strong> {{page_url}}</p>

<h3>Message:</h3>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
{{message}}
</div>

<hr>
<p><em>This feedback was submitted through the AI Training for Strategic Sourcing website.</em></p>
```

4. Set the "To Email" to your email address (where you want to receive feedback)
5. Save the template and note the Template ID (e.g., `template_def456`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your "Public Key" (e.g., `abcd1234567890`)

## Step 5: Update Your Website Code

Open `pages/resources.html` and replace these lines:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

**Example:**
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_def456';
const EMAILJS_PUBLIC_KEY = 'abcd1234567890';
```

## Step 6: Test Your Setup

1. Save your changes and deploy to GitHub Pages
2. Go to your website's Resources page
3. Fill out the feedback form and submit
4. Check your email for the feedback message

## Troubleshooting

### Form Not Sending
- Check browser console for errors
- Verify your Service ID, Template ID, and Public Key are correct
- Make sure your email service is connected properly

### Not Receiving Emails
- Check spam folder
- Verify the "To Email" in your template settings
- Test with a different email address

### Rate Limits
- Free tier allows 200 emails per month
- If you need more, consider upgrading to a paid plan

## Alternative Option: Formspree

If you prefer not to use EmailJS, here's a simpler alternative:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Add your form endpoint
4. Replace the form's action attribute:

```html
<form id="feedback-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Security Notes

- Your EmailJS Public Key is safe to include in client-side code
- EmailJS handles all email authentication securely
- No sensitive credentials are exposed in your website code
- Rate limiting prevents spam abuse

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: Contact through their dashboard
- Free tier includes community support

---

**Next Steps:**
1. Complete the EmailJS setup above
2. Test your feedback form
3. Update your contact information if needed
4. Consider adding this email to your regular inbox filters 