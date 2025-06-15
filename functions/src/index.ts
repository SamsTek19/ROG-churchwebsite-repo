import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'radianceofgloryembassy@gmail.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this in Firebase environment variables
  }
});

export const sendRegistrationEmail = functions.firestore
  .document('youthCampRegistrations/{registrationId}')
  .onCreate(async (snap, context) => {
    const registrationData = snap.data();
    const { name, email } = registrationData;

    const mailOptions = {
      from: 'Radiance Of Glory Embassy <radianceofgloryembassy@gmail.com>',
      to: email,
      subject: 'Youth Camp Registration Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF7D00;">Registration Confirmation</h2>
          <p>Dear ${name},</p>
          <p>Thank you for registering for the Youth Camp! We're excited to have you join us.</p>
          <p>Your registration has been successfully received. Here are your registration details:</p>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Event: Youth Camp</li>
          </ul>
          <p>We will send you more information about the event as the date approaches.</p>
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <br>
          <p>Best regards,</p>
          <p>Radiance Of Glory Embassy Team</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            This is an automated message, please do not reply directly to this email.
          </p>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Registration confirmation email sent to:', email);
    } catch (error) {
      console.error('Error sending registration email:', error);
    }
  }); 