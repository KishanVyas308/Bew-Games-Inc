// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const emailjsConfig = {
  // Get these from https://www.emailjs.com/
  serviceId: 'service_3nnn19t',     // From Email Services section
  templateId: 'template_3dmaalu',   // From Email Templates section
  publicKey: '86uQHP1L4hA4_0QWU',     // From Account > API Keys section
  // serviceId: 'service_hppeor2',     // From Email Services section
  // templateId: 'template_i6su8r7',   // From Email Templates section
  // publicKey: 'CYqpjipdAyAt7avuM',     // From Account > API Keys section
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail recommended)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - message subject
//    - {{message}} - message content
//    - {{to_email}} - recipient email (support@bewgames.com)
// 4. Replace the values above with your actual IDs and keys