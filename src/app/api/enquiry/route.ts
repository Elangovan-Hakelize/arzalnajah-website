import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    try {
      await resend.emails.send({
        from: "ARZ Al Najah <enquiry@enquiry.arzalnajah.com>", // Use your verified domain later
        to: "arzalnajahbusiness@gmail.com",
        subject: `🎯 New Business Enquiry from ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0A1A4A 0%, #0D2158 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #0A1A4A; display: block; margin-bottom: 5px; }
                .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #E56020; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
                .badge { background: #E56020; color: white; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 20px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">🎯 New Business Enquiry</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">ARZ Al Najah Business Setup Services</p>
                </div>
                <div class="content">
                  <div class="badge">New Lead from Website Popup</div>
                  
                  <div class="field">
                    <span class="label">👤 Customer Name:</span>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <span class="label">📧 Email Address:</span>
                    <div class="value"><a href="mailto:${email}" style="color: #0A1A4A;">${email}</a></div>
                  </div>
                  
                  <div class="field">
                    <span class="label">📱 Phone Number:</span>
                    <div class="value"><a href="tel:${phone}" style="color: #0A1A4A;">${phone}</a></div>
                  </div>
                  
                  <div class="field">
                    <span class="label">🏢 Service Interested In:</span>
                    <div class="value">${service}</div>
                  </div>
                  
                  ${message ? `
                    <div class="field">
                      <span class="label">💬 Message:</span>
                      <div class="value">${message}</div>
                    </div>
                  ` : ''}
                  
                  <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-radius: 4px; border-left: 3px solid #E56020;">
                    <strong style="color: #856404;">⚡ Action Required:</strong>
                    <p style="margin: 5px 0 0 0; color: #856404;">Please respond to this enquiry within 24 hours for best conversion rates.</p>
                  </div>
                </div>
                <div class="footer">
                  <p>This enquiry was submitted via the popup form on arzalnajah.com</p>
                  <p>© ${new Date().getFullYear()} ARZ Al Najah Business Setup Services</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      // 2️⃣ SEND AUTO-REPLY TO CUSTOMER (NEW)
await resend.emails.send({
  from: "ARZ Al Najah <enquiry@enquiry.arzalnajah.com>", // SAME sender
  to: email, // 👈 CUSTOMER EMAIL
  subject: "We received your enquiry – ARZ Al Najah",
  html: `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; background: #f8f9fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
          
          <div style="background: linear-gradient(135deg, #0A1A4A, #0D2158); color: #ffffff; padding: 25px; text-align: center;">
            <h2 style="margin: 0;">Thank You for Contacting Us!</h2>
            <p style="margin: 8px 0 0; opacity: 0.9;">ARZ Al Najah Business Setup Services</p>
          </div>

          <div style="padding: 25px; color: #333;">
            <p>Hi <strong>${name}</strong>,</p>

            <p>
              Thank you for reaching out to <strong>ARZ Al Najah</strong>.
              We have successfully received your enquiry regarding
              <strong>${service}</strong>.
            </p>

            <p>
              📞 Our business setup experts will contact you within
              <strong>24 hours</strong> to guide you further.
            </p>

            <div style="margin: 20px 0; padding: 15px; background: #f0f7ff; border-left: 4px solid #E56020;">
              <strong>Your submitted details:</strong><br/>
              📧 Email: ${email}<br/>
              📱 Phone: ${phone}
            </div>

            <p>
              If you need immediate assistance, feel free to reply to this email
              or contact us on WhatsApp.
            </p>

            <p style="margin-top: 30px;">
              Warm regards,<br/>
              <strong>ARZ Al Najah Team</strong><br/>
              🌐 arzalnajah.com
              +971 52 310 7392
            </p>
          </div>

          <div style="text-align: center; padding: 15px; font-size: 12px; color: #777;">
            © ${new Date().getFullYear()} ARZ Al Najah Business Setup Services
          </div>
        </div>
      </body>
    </html>
  `,
});
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      // If Resend fails, log the enquiry for manual follow-up
      console.log("=== NEW ENQUIRY (Email Failed) ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message || "N/A"}`);
      console.log("=====================================");
    }

    // Return success response regardless (user doesn't need to know if email failed)
    return NextResponse.json(
      { 
        success: true, 
        message: "Enquiry submitted successfully",
        data: { name, email, phone, service }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}