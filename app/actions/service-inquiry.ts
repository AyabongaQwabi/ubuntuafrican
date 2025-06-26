'use server';

import nodemailer from 'nodemailer';

export async function submitServiceInquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!name || !email || !phone || !service || !message) {
    return {
      success: false,
      error: 'All fields are required. Please fill out the complete form.',
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  try {
    // Create transporter - FIXED: Use createTransport instead of createTransporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Service name mapping
    const serviceNames = {
      'mining-operations': 'Mining Operations',
      rehabilitation: 'Rehabilitation and Environmental Management',
      'supply-materials': 'Supply of Mining Materials',
      general: 'General Inquiry',
    };

    const serviceName =
      serviceNames[service as keyof typeof serviceNames] || service;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'puleng@ubuntuafrican.co.za',
      subject: `New Service Inquiry: ${serviceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #ea580c; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Ubuntu African Resources</h1>
            <h2 style="margin: 10px 0 0 0; font-weight: normal;">New Service Inquiry</h2>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 30px;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">Contact Details</h3>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
                  <td style="padding: 12px 0; color: #333;">${name}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 12px 0; color: #333;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 12px 0; color: #333;">${phone}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 12px 0; font-weight: bold; color: #555;">Service Interest:</td>
                  <td style="padding: 12px 0; color: #333;">${serviceName}</td>
                </tr>
              </table>
              
              <h3 style="color: #333; margin: 20px 0 10px 0; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">Message</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 4px; border-left: 4px solid #ea580c; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: white; border-radius: 8px;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                📧 This inquiry was submitted through the Ubuntu African Resources website<br>
                🕒 Submitted on: ${new Date().toLocaleString('en-ZA', {
                  timeZone: 'Africa/Johannesburg',
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return {
      success: true,
      message:
        "Thank you for your inquiry! We've received your message and will get back to you within 24 hours.",
    };
  } catch (error) {
    console.log('Error sending email:', error);

    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('authentication')) {
        return {
          success: false,
          error:
            'Email configuration error. Please try calling us directly at +27 61 403 8651.',
        };
      }
      if (
        error.message.includes('network') ||
        error.message.includes('timeout')
      ) {
        return {
          success: false,
          error,
        };
      }
    }

    return {
      success: false,
      error:
        "We're experiencing technical difficulties. Please try again in a few minutes or call us directly at +27 61 403 8651.",
    };
  }
}
