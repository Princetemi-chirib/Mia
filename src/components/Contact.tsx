'use client'

import Image from 'next/image'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    introduction: '',
    preferredDate: '',
    location: '',
    experienceType: '',
    budgetRange: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactImages = [
    '/images/1e0e0162-da53-457a-b3d5-a25b40dbc4cf.jpeg',
    '/images/6bf35b53-f576-49a5-9a11-7b485e1127da.jpeg',
    '/images/8d0c7691-f867-4559-ba6f-5dbb54de8762.jpeg',
    '/images/28efec8d-3fa5-46c4-98d6-1764c49ba2fe.jpeg',
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@miamalkova',
      url: 'https://instagram.com/miamalkova',
      icon: '📸',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      name: 'Twitter',
      handle: '@miamalkova',
      url: 'https://twitter.com/miamalkova',
      icon: '🐦',
      color: 'bg-gradient-to-r from-blue-400 to-blue-600'
    },
    {
      name: 'Telegram',
      handle: '@miamalkova',
      url: 'https://t.me/miamalkova',
      icon: '✈️',
      color: 'bg-gradient-to-r from-blue-500 to-blue-700'
    }
  ]

  const experienceTypes = [
    'Private Engagement',
    'Social & Public Appearance',
    'Extended Experience',
    'Fly Me to You'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted with data:', formData)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          city: formData.location
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          introduction: '',
          preferredDate: '',
          location: '',
          experienceType: '',
          budgetRange: '',
          message: ''
        })
      } else {
        // Try to get error message from response
        let errorMessage = 'Failed to submit booking'
        
        try {
          const errorData = await response.json()
          if (errorData.error) {
            errorMessage = errorData.error
          }
        } catch (e) {
          // If we can't parse the error response, use default message
        }
        
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error('Booking submission error:', error)
      alert(error instanceof Error ? error.message : 'There was an error submitting your booking. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mia-black to-mia-red">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-elegant font-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to create unforgettable memories? Fill out the form below or reach out directly.
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-elegant font-semibold mb-6 text-white">
                Book Your Experience 💋
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Fill out the form below with your details and I'll get back to you within 24 hours to discuss your perfect experience.
              </p>
            </div>

            {/* Booking Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Brief Introduction *
                  </label>
                  <textarea
                    name="introduction"
                    value={formData.introduction}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Tell me a bit about yourself..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Preferred Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="City or specific location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Type of Experience *
                    </label>
                    <select
                      name="experienceType"
                      value={formData.experienceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white focus:border-transparent"
                    >
                      <option value="" className="text-mia-black">Select experience type</option>
                      {experienceTypes.map((type) => (
                        <option key={type} value={type} className="text-mia-black">{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white focus:border-transparent"
                  >
                    <option value="" className="text-mia-black">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="text-mia-black">{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Any specific details about your desired experience..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-elegant bg-white text-mia-red hover:bg-mia-light-red disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'white',
                    color: '#DC2626',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    width: '100%',
                    opacity: isSubmitting ? 0.5 : 1
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Booking Request ❤'}
                </button>
              </form>
            ) : (
              <div className="text-center py-8 bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <div className="text-6xl mb-4">❤</div>
                <h3 className="text-2xl font-elegant font-semibold mb-4 text-white">
                  Booking Request Sent!
                </h3>
                <p className="text-white/80 mb-6">
                  Thanks for your booking request! I'll review your details and get back to you within 24 hours to discuss payment and confirm your spot ❤
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline border-white text-white hover:bg-white hover:text-mia-red"
                >
                  Send Another Request
                </button>
              </div>
            )}

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white text-center">Or DM Me Directly 💋</h4>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-6 rounded-xl text-white ${social.color} hover:scale-105 transition-transform duration-300 group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <h4 className="text-xl font-semibold">{social.name}</h4>
                        <p className="text-white/80">{social.handle}</p>
                      </div>
                    </div>
                    <span className="text-white/60 group-hover:text-white transition-colors">
                      DM Me ❤
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {contactImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`Mia Malkova ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover image-hover"
                />
                <div className="absolute inset-0 bg-mia-red bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-elegant font-semibold mb-4 text-white">
              Ready for an Unforgettable Experience?
            </h3>
            <p className="text-white/80 mb-6">
              Don't wait too long – my schedule fills up quickly. 
              Send me a message today and let's start planning something extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/miamalkova"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-elegant bg-white text-mia-red hover:bg-mia-light-red"
              >
                DM on Instagram 💋
              </a>
              <a
                href="https://t.me/miamalkova"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-mia-red"
              >
                Message on Telegram ✈️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
