# 🔧 EXACT EmailJS Template Configuration

## Copy-Paste This Into Your EmailJS Template

### Template Settings (CRITICAL - Must be exact):

**To Email**: `support@bewgames.com`
**From Name**: `{{from_name}}`
**From Email**: `{{user_email}}`
**Reply To**: `{{reply_to}}`

### Subject Line:
```
New Contact from {{user_name}}: {{user_subject}}
```

### Email Body (Copy this exactly):
```
You have received a new message from your Bew Games website contact form:

Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}

Message:
{{user_message}}

---
Reply directly to this email to respond to the customer.

Sent via Bew Games Contact Form
```

## ⚠️ CRITICAL POINTS:
1. **To Email** MUST be `support@bewgames.com` (NO variables, just the plain email)
2. **From Email** should be `{{user_email}}` so you can see who sent it
3. **Reply To** should be `{{reply_to}}` so you can reply directly to customer

## 🧪 After Setting This Up:
1. Save the template
2. Test your contact form
3. Check `support@bewgames.com` inbox
4. You should receive the message there!

## Expected Result:
- Email arrives in `support@bewgames.com` inbox ✅
- Shows customer's email as sender ✅
- You can reply directly to customer ✅