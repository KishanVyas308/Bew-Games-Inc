# EmailJS Setup Instructions

To enable the contact form, you need to set up EmailJS (free service).

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose **Gmail** (recommended) or your email provider
3. Connect your account
4. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Set up the template with these variables:

**Subject:** `New Contact: {{subject}}`

**Content:**
```
Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Bew Games Contact Form
```

3. Copy the **Template ID** (e.g., `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_xxxxxxxxxxxxxxx`)

### Step 5: Update Configuration
Edit `/src/config/emailjs.ts` and replace:

```typescript
export const emailjsConfig = {
  serviceId: 'service_your_service_id',     // From Step 2
  templateId: 'template_your_template_id',  // From Step 3
  publicKey: 'your_public_key_here',        // From Step 4
};
```

## ✅ Test the Contact Form
1. Run `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email for the message!

## 🆓 Free Tier Limits
- 200 emails per month
- Perfect for a business website
- No credit card required

---

If you need help setting this up, the form has a fallback that opens the user's email client automatically!