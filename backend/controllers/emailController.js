// controllers/emailController.js

// Load environment variables from .env (ensure .env is in .gitignore)
require('dotenv').config();

const nodemailer = require('nodemailer');

/**
 * Helper: createTransporter
 * - Picks transporter config based on environment variables.
 * - You can use:
 *    - Gmail with app password (simple)
 *    - Generic SMTP (host/port/user/pass) for third-party services
 */
async function createTransporter() {

  //Using Gmail with app password
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your gmail address
        pass: process.env.EMAIL_PASS  // app password (NOT your normal gmail password)
      }
    });
  }

  // Generic SMTP config (for SendGrid SMTP, Mailgun SMTP, custom SMTP)
  // Requires EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

/**
 * Controller: sendEmail
 * Expects body: { to, subject, message, html (optional), attachments (optional array) }
 */
exports.sendEmail = async (req, res) => {
  try {
    // Basic validation
    const { to, subject, message, html, attachments } = req.body;
    if (!to || !subject || (!message && !html)) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: to, subject, and message/html'
      });
    }

    // Create transporter (may use Ethereal in dev, or Gmail/SMTP in prod)
    const transporter = await createTransporter();

    // Build mail options
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER, // e.g. "AgroBridge <no-reply@agrobridge.co.za>"
      to,             // recipient or comma-separated list
      subject,        // email subject
      text: message,  // fallback plain text
      html: html || `<p>${message}</p>`, // prefer HTML if provided
      attachments: attachments || []  // optional attachments array
      /*
        attachments example:
        attachments: [
          { filename: 'invoice.pdf', path: '/tmp/invoice.pdf' },
          { filename: 'photo.jpg', content: fs.createReadStream('/path/to/photo.jpg') }
        ]
      */
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);

    // If using Ethereal, you can get a preview URL
    const previewUrl = nodemailer.getTestMessageUrl(info); // returns a URL if Ethereal was used, otherwise null

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      info: {
        messageId: info.messageId,
        previewUrl: previewUrl || null
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
};
