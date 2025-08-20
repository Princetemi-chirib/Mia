import { NextRequest, NextResponse } from 'next/server'

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

    // Log the booking data to console (for testing)
    console.log('=== NEW BOOKING REQUEST ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Social Handle:', socialHandle)
    console.log('Location:', location || city)
    console.log('Preferred Date:', preferredDate)
    console.log('Introduction:', introduction)
    console.log('Experience Type:', experienceType)
    console.log('Budget Range:', budgetRange)
    console.log('Message:', message)
    console.log('==========================')

    return NextResponse.json(
      { message: 'Booking request received successfully (test mode)' },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Error processing booking:', error)
    
    return NextResponse.json(
      { error: 'Failed to process booking request. Please try again.' },
      { status: 500 }
    )
  }
}
