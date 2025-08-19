'use client'

import { useState } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  selectedCity: string
}

const BookingModal = ({ isOpen, onClose, selectedCity }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    socialHandle: '',
    preferredDate: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          city: selectedCity
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          socialHandle: '',
          preferredDate: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      alert('There was an error submitting your booking. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      setIsSubmitted(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-elegant font-semibold text-mia-red">
              Book with Mia ❤
            </h2>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-mia-gray mt-2">
            {selectedCity} • Complete your booking request
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-mia-gray mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mia-red focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-mia-gray mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mia-red focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-mia-gray mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mia-red focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-mia-gray mb-1">
                  Social Media Handle
                </label>
                <input
                  type="text"
                  name="socialHandle"
                  value={formData.socialHandle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mia-red focus:border-transparent"
                  placeholder="@username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-mia-gray mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mia-red focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-mia-gray mb-1">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mia-red focus:border-transparent"
                  placeholder="Tell me about the experience you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-elegant disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Booking Request ❤'}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">❤</div>
              <h3 className="text-2xl font-elegant font-semibold text-mia-red mb-4">
                Booking Request Sent!
              </h3>
              <p className="text-mia-gray mb-6">
                Thanks for booking! Please DM me directly on Instagram, Twitter, or Telegram to complete payment and confirm your spot ❤
              </p>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/miamalkova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-elegant"
                >
                  DM on Instagram 💋
                </a>
                <a
                  href="https://t.me/miamalkova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-outline"
                >
                  Message on Telegram ✈️
                </a>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 text-mia-gray hover:text-mia-red smooth-transition"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingModal
