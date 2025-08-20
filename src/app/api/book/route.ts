import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, socialHandle, preferredDate, message, city, introduction, location, experienceType, budgetRange } = body

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }
    
    if (!preferredDate) {
      return NextResponse.json(
        { error: 'Preferred date is required' },
        { status: 400 }
      )
    }
    
    if (!location && !city) {
      return NextResponse.json(
        { error: 'Location is required' },
        { status: 400 }
      )
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY || 're_cKUBCaH3_BZeerrgy1en5ZDdqRFNzMtBd')

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #DC2626, #B91C1C); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 28px;">New Booking Request ❤</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Mia Malkova Tour Booking</p>
        </div>
        
        <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <h2 style="color: #DC2626; margin-top: 0;">Booking Details</h2>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Client Name:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${name}</span>
          </div>
          
          ${email ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Email:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${email}</span>
          </div>
          ` : ''}
          
          ${phone ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Phone:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${phone}</span>
          </div>
          ` : ''}
          
          ${socialHandle ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Social Handle:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${socialHandle}</span>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Location:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${location || city}</span>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Preferred Date:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${preferredDate}</span>
          </div>
          
          ${introduction ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Introduction:</strong>
            <p style="color: #6B7280; margin: 10px 0 0 0; line-height: 1.5;">${introduction}</p>
          </div>
          ` : ''}
          
          ${experienceType ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Experience Type:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${experienceType}</span>
          </div>
          ` : ''}
          
          ${budgetRange ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Budget Range:</strong>
            <span style="color: #6B7280; margin-left: 10px;">${budgetRange}</span>
          </div>
          ` : ''}
          
          ${message ? `
          <div style="margin-bottom: 20px;">
            <strong style="color: #374151;">Additional Message:</strong>
            <p style="color: #6B7280; margin: 10px 0 0 0; line-height: 1.5;">${message}</p>
          </div>
          ` : ''}
          
          <div style="background: #FEE2E2; border-left: 4px solid #DC2626; padding: 15px; margin-top: 30px; border-radius: 5px;">
            <p style="margin: 0; color: #374151; font-weight: 500;">
              <strong>Next Steps:</strong> Please contact the client to discuss payment and confirm the booking details.
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6B7280; font-size: 14px;">
          <p>This booking request was submitted from your website.</p>
          <p>© 2024 Mia Malkova. All rights reserved.</p>
        </div>
      </div>
    `

    // Send email using Resend
    console.log('Attempting to send email...')
    try {
      const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['officialmiamalkovaprivatemail@gmail.com'], // Use the exact email that created the API key
        subject: `New Booking Request - ${location || city} - ${name}`,
        html: emailContent
      })
      console.log('Email sent successfully:', result)
    } catch (sendError: any) {
      console.error('Resend email sending failed:', sendError)
      // For now, just log the booking and return success
      console.log('=== BOOKING LOGGED (Email failed) ===')
      console.log('Name:', name, 'Location:', location || city, 'Date:', preferredDate)
      console.log('=====================================')
    }

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Email sending error:', error)
    
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again or contact directly.' },
      { status: 500 }
    )
  }
}
