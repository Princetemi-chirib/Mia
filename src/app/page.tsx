'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TourSchedule from '@/components/TourSchedule'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState('')

  const handleBookClick = (city: string) => {
    console.log('handleBookClick called with city:', city)
    setSelectedCity(city)
    setIsBookingModalOpen(true)
    console.log('Modal should now be open:', true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-mia-white via-mia-light-red to-mia-white">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Tour Schedule Section */}
      <TourSchedule onBookClick={handleBookClick} />
      
      {/* Pricing Section */}
      <Pricing />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedCity={selectedCity}
      />
    </main>
  )
}
