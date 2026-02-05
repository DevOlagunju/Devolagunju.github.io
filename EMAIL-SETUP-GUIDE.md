# 📧 Email Setup Guide - Contact Form Configuration

This guide will help you set up the contact form to send emails directly to your inbox.

---

## 🚀 Quick Setup with EmailJS (Free)

EmailJS allows you to send emails directly from your static website without a backend server.

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free - 200 emails/month)
3. Verify your email address
4. Log in to your dashboard

### Step 2: Add Email Service

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any other provider
4. Follow the connection instructions
5. **Copy your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Click **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact from {{from_name}}

You have received a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `ABCdefGHI123jklMNO`)
3. Copy it

### Step 5: Update Your Portfolio Code

Open `script.js` and find this section (around line 120):

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',     // Replace with your Service ID
    templateID: 'YOUR_TEMPLATE_ID',   // Replace with your Template ID
    publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
};
```

Replace with your actual values:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_abc123',      // Your Service ID
    templateID: 'template_xyz789',    // Your Template ID
    publicKey: 'ABCdefGHI123jklMNO'   // Your Public Key
};
```

### Step 6: Test Your Form

1. Save the file
2. Refresh your portfolio: http://localhost:8000
3. Go to the Contact section
4. Fill out and submit the form
5. Check your email inbox!

---

## 📋 Example Configuration

Here's what your configuration should look like:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_xyz123',
    templateID: 'template_abc456',
    publicKey: 'Xy9kL3mN2pQ1rS5tU'
};
```

---

## 🎯 What Happens When Form is Submitted

1. **User fills form** on your portfolio
2. **JavaScript validates** the data
3. **EmailJS sends email** to wasiu-ibrahim@outlook.com
4. **You receive notification** in your inbox
5. **User sees success message** on the website

---

## 🔒 Security Notes

- ✅ Your Public Key is safe to expose (it's meant for public use)
- ✅ EmailJS rate limits prevent spam (200 emails/month on free plan)
- ✅ Form includes validation to prevent empty submissions
- ✅ User's email is included so you can reply directly

---

## 🆓 Free Plan Limits

- **200 emails per month** (sufficient for portfolio)
- **1 email service connection**
- **1 email template**
- **Basic features** (enough for contact form)

Need more? Upgrade to paid plan for unlimited emails.

---

## 🛠️ Advanced Configuration

### Custom Auto-Reply to User

Create a second template to send auto-reply:

**Template Name:** "Auto Reply"
**Content:**
```
Hi {{from_name}},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Best regards,
Wasiu Ibrahim
Software Engineer

---
This is an automated response.
```

Then update script.js to send two emails:
```javascript
// Send to you
emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, templateParams)

// Send auto-reply to user
emailjs.send(EMAILJS_CONFIG.serviceID, 'template_autoreply', {
    to_email: data.email,
    to_name: data.name
})
```

---

## 🐛 Troubleshooting

### "Email service not configured" error
- You haven't replaced `YOUR_SERVICE_ID` with actual values
- Update the config in `script.js`

### Form submits but no email received
- Check EmailJS dashboard → "Email Logs"
- Verify Service ID and Template ID are correct
- Check spam folder
- Ensure email service is connected

### "Failed to send" error
- Check browser console for error details
- Verify Public Key is correct
- Ensure internet connection is active
- Check EmailJS account status

---

## 📧 Current Configuration

**Your Email:** wasiu-ibrahim@outlook.com

**Form Fields Being Sent:**
- Sender Name
- Sender Email
- Subject
- Message

**Email Template Variables:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

---

## 🎉 Quick Start Checklist

- [ ] Sign up at EmailJS.com
- [ ] Connect your email service (Gmail/Outlook)
- [ ] Create email template
- [ ] Copy Service ID, Template ID, and Public Key
- [ ] Update `EMAILJS_CONFIG` in `script.js`
- [ ] Test the form
- [ ] Celebrate! 🎊

---

## 💡 Alternative Solutions

If you prefer not to use EmailJS:

### Option 1: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Web3Forms
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

### Option 3: Backend API
Build your own API with Node.js, Python Flask, or PHP

---

**Need Help?** Email me at wasiu-ibrahim@outlook.com

**Last Updated:** February 2026
