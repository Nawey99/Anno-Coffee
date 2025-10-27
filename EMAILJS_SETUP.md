# EmailJS Setup Guide for ANNO Coffee Contact Form

## Your EmailJS Configuration

- **Service ID**: `service_0peuwlq`
- **Template ID**: `template_y5p129r`
- **Public Key**: `XZaOCknVntQAtAE9c`

## EmailJS Template Variables

Your EmailJS template should include these variables to receive the form data:

### Template Variables to Use:

- `{{from_name}}` - Full name (First Name + Last Name)
- `{{from_email}}` - Email address from the form
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name (set to "ANNO Coffee Team")

## Sample EmailJS Template

Here's a sample template you can use in your EmailJS dashboard:

**Subject**: New Contact Form Submission from {{from_name}}

**Body**:

```
Hello ANNO Coffee Team,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the ANNO Coffee website contact form.
```

## How It Works

1. **Form Submission**: When users fill out the contact form and click "Send Message"
2. **Data Processing**: The form data is collected and formatted
3. **EmailJS Integration**: The data is sent to EmailJS using your configuration
4. **Email Delivery**: EmailJS sends the email to your configured email address
5. **User Feedback**: Users see a success or error message

## Features Implemented

✅ **Form Validation**: Required fields (First Name, Email, Message)
✅ **Loading State**: Button shows spinner and "Sending..." text
✅ **Success/Error Messages**: User feedback after submission
✅ **Form Reset**: Form clears after successful submission
✅ **Responsive Design**: Works on all device sizes
✅ **Brand Styling**: Uses ANNO Coffee amber color scheme

## Testing

To test the integration:

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email for the message
4. Verify the success message appears on the website

## Troubleshooting

If emails aren't being sent:

1. Check your EmailJS dashboard for any errors
2. Verify your Service ID, Template ID, and Public Key are correct
3. Check the browser console for any JavaScript errors
4. Ensure your EmailJS service is properly configured

The integration is now complete and ready to use!

