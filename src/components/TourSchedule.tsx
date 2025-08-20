'use client'

import Image from 'next/image'

interface TourScheduleProps {
  onBookClick: (city: string) => void
}

const TourSchedule = ({ onBookClick }: TourScheduleProps) => {
  const tourDates = [
    {
      city: 'Denver',
      dates: 'Aug 25–29',
      image: '/images/31a9fe32-5c22-4da4-97c1-bf7f487d902d.jpeg',
      status: 'available'
    },
    {
      city: 'Minneapolis',
      dates: 'Sep 2–6',
      image: '/images/66583f6b-087a-4cb3-ad26-1cce957605ab.jpeg',
      status: 'available'
    },
    {
      city: 'Chicago',
      dates: 'Sep 10–15',
      image: '/images/372b8c27-c0ce-4253-81d3-aa4401d93184.jpeg',
      status: 'available'
    },
    {
      city: 'New York',
      dates: 'Sep 18–23',
      image: '/images/230c6246-eb2e-484c-a26f-bf0977d891f8.jpeg',
      status: 'available'
    },
    {
      city: 'Los Angeles',
      dates: 'Sep 28–Oct 3',
      image: '/images/cb5f2f0b-f6ec-46ed-9be0-3e5919fe4930.jpeg',
      status: 'available'
    },
    {
      city: 'Miami',
      dates: 'Oct 8–13',
      image: '/images/0963e26d-19cc-4831-8b5d-74e8d31d2f14.jpeg',
      status: 'available'
    }
  ]

  return (
    <section id="tour-schedule" className="py-20 px-4 bg-gradient-to-br from-mia-light-red to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-elegant font-bold mb-6 gradient-text">
            Tour Schedule
          </h2>
          <p className="text-xl text-mia-gray max-w-2xl mx-auto">
            Join me in these beautiful cities for unforgettable experiences. 
            Each location offers unique opportunities for connection and luxury companionship.
          </p>
          <div className="w-24 h-1 bg-mia-red mx-auto mt-6"></div>
        </div>

        {/* Tour Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourDates.map((tour, index) => (
            <div key={index} className="card-elegant group">
              {/* Image */}
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={tour.image}
                  alt={`Mia Malkova in ${tour.city}`}
                  fill
                  className="object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-mia-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available ❤
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-elegant font-semibold mb-2 text-mia-black">
                  {tour.city}
                </h3>
                <p className="text-lg text-mia-gray mb-6">
                  {tour.dates}
                </p>
                
                {/* Book Button */}
                <button
                  onClick={() => {
                    console.log('Book button clicked for:', tour.city)
                    onBookClick(tour.city)
                  }}
                  className="btn-elegant w-full group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{
                    backgroundColor: '#DC2626',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  type="button"
                >
                  Book ❤
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-elegant font-semibold mb-4 text-mia-red">
              Planning Your Experience
            </h3>
            <p className="text-mia-gray mb-6">
              Each tour stop is carefully planned to provide the most intimate and luxurious experience. 
              I'm available for private engagements, social appearances, and extended stays during these dates.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-mia-gray">
              <span className="flex items-center">
                <span className="text-mia-red mr-2">❤</span>
                Private Engagements
              </span>
              <span className="flex items-center">
                <span className="text-mia-red mr-2">❤</span>
                Social Appearances
              </span>
              <span className="flex items-center">
                <span className="text-mia-red mr-2">❤</span>
                Extended Experiences
              </span>
              <span className="flex items-center">
                <span className="text-mia-red mr-2">❤</span>
                Fly Me to You
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourSchedule
