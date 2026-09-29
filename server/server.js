require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());
app.use(express.json());

// Rate Limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { success: false, message: 'Too many requests, please try again later.' }
});

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === 'true' || true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD
  }
});

// Verify SMTP Connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Zoho SMTP connection failed:", error);
  } else {
    console.log("Zoho SMTP connection successful");
  }
});

// API Endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { fullName, phone, email, service, message } = req.body;

    // Validate inputs
    if (!fullName || !phone || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please fill out all required fields.' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ success: false, message: 'Message is too long.' });
    }

    // Email Options
    const mailOptions = {
      from: `"Navadurga Electricals Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Website Enquiry - ${service || 'General'}`,
      text: `
New Website Enquiry

Customer Details
----------------
Name: ${fullName}
Phone: ${phone}
Email: ${email}
Service Required: ${service}

Project Details
---------------
${message}
      `
    };

    // Send Email via Zoho SMTP
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Your message has been sent successfully.' });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, message: 'Unable to send your message. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
