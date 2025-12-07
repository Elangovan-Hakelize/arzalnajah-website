import { NextRequest, NextResponse } from "next/server";

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

    // Create email content
    const emailSubject = `New Enquiry from ${name} - ARZ Al Najah`;
    const emailBody = `
New Business Enquiry Received

Customer Details:
----------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Service Interested: ${service}

Message:
--------
${message || "No additional message provided"}

---
This enquiry was submitted through the ARZ Al Najah website popup form.
    `.trim();

    // Here you would integrate with an email service
    // For now, we'll log it and return success
    console.log("New Enquiry Received:");
    console.log("Subject:", emailSubject);
    console.log("To: elangovan7112002@gmail.com");
    console.log("Body:", emailBody);

    // In production, integrate with email service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer with SMTP
    
    // Example with fetch to a service:
    /*
    const emailResponse = await fetch("YOUR_EMAIL_SERVICE_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.EMAIL_API_KEY}`
      },
      body: JSON.stringify({
        to: "elangovan7112002@gmail.com",
        subject: emailSubject,
        text: emailBody,
        from: "noreply@arzalnajah.com"
      })
    });
    */

    // Return success response
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
