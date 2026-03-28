const nodemailer = require('nodemailer');
require("dotenv").config();

console.log("📧 Email Service Loading...");
console.log("EMAIL_USER:", process.env.EMAIL_USER ? "✅ Found" : "❌ Missing");
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "✅ Found" : "❌ Missing");
console.log("FRONTEND_URL:", process.env.FRONTEND_URL ? "✅ Found" : "❌ Missing");

// ✅ Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error("❌ CRITICAL: Email credentials missing in .env file!");
}

// ✅ Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// ✅ Verify transporter configuration on load
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ Email transporter verification failed:', error);
  } else {
    console.log('✅ Email server is ready to send emails');
  }
});


async function sendPropertyEmail(to, subject, html) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return true;
  } catch (err) {
    console.error("❌ Email error:", err);
    return false;
  }
}

module.exports = {
  sendPropertyEmail
};