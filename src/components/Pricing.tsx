'use client'

import { useState } from 'react'

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('rates')

  const pricingData = [
    {
      title: 'Hourly Rendezvous',
      packages: [
        { duration: '1 Hour', price: '$800' },
        { duration: '2 Hours', price: '$1,500' }
      ]
    },
    {
      title: 'Dinner & Private Escape',
      packages: [
        { duration: '4 Hours', price: '$3,000', description: 'Perfect for an elegant dinner followed by an intimate experience.' }
      ]
    },
    {
      title: 'Overnight Indulgence',
      packages: [
        { duration: '12 Hours', price: '$5,000', description: 'A night of enchantment, intimacy, and unforgettable moments.' }
      ]
    },
    {
      title: 'Luxury Getaways & Travel',
      packages: [
        { duration: '24 Hours', price: '$7,000', description: 'An exclusive, unrushed experience tailored to your desires.' },
        { duration: 'Weekend Escape', price: '$9,500', description: 'For those who seek an extended journey of pleasure and companionship.' }
      ]
    },
    {
      title: 'Fly-Me-To-You (FMTY)',
      packages: [
        { duration: 'Worldwide', price: 'Available', description: 'Available for worldwide engagements with proper advance notice. Travel expenses must be covered separately.' }
      ]
    }
  ]

  const policies = [
    {
      title: 'Respectful Communication',
      description: 'Kindness, clarity, and courtesy go a long way. I respond to respectful inquiries only – anything less will not receive a reply.'
    },
    {
      title: 'Screening',
      description: 'For safety and comfort, all new clients must complete a light screening process. Your information is handled with the utmost discretion and is never stored or shared.'
    },
    {
      title: 'Deposit Requirement',
      description: 'A non-refundable deposit is required to confirm all bookings of 2 hours or more, including travel and tour dates. This helps ensure mutual respect for our time and preparation.'
    },
    {
      title: 'Cancellation Policy',
      description: 'If plans must change, please provide at least 24 hours\' notice. Cancellations within 24 hours result in a forfeited deposit.'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-mia-white via-mia-light-red to-mia-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-mia-red mb-6">
            Donation & Booking Information
          </h2>
          <p className="text-xl text-mia-gray max-w-3xl mx-auto leading-relaxed">
            A Transparent Approach to My Time & Company
          </p>
          <p className="text-lg text-mia-gray mt-4 max-w-4xl mx-auto leading-relaxed">
            My time is precious, and I believe in offering exceptional, personalized experiences for those who value genuine connection, elegance, and quality companionship. Each donation is for my time, attention, and the unforgettable moments we will create together.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('rates')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'rates'
                  ? 'bg-mia-red text-white shadow-lg'
                  : 'text-mia-gray hover:text-mia-red'
              }`}
            >
              Rates & Packages
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'policies'
                  ? 'bg-mia-red text-white shadow-lg'
                  : 'text-mia-gray hover:text-mia-red'
              }`}
            >
              Policies & Etiquette
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'rates' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingData.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-elegant font-bold text-mia-red mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="text-center">
                      <div className="bg-gradient-to-r from-mia-light-red to-mia-white rounded-xl p-6">
                        <div className="text-3xl font-bold text-mia-red mb-2">
                          {pkg.price}
                        </div>
                        <div className="text-lg font-medium text-mia-gray mb-3">
                          {pkg.duration}
                        </div>
                        {pkg.description && (
                          <p className="text-sm text-mia-gray leading-relaxed">
                            {pkg.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'policies' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-xl font-elegant font-bold text-mia-red mb-4">
                    {policy.title}
                  </h3>
                  <p className="text-mia-gray leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Footer Message */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-mia-red to-mia-dark-red rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-elegant font-bold mb-4">
                  Let's create something unforgettable
                </h3>
                <p className="text-lg opacity-90">
                  – with ease, clarity, and class
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
