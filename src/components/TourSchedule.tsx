'use client'

import Image from 'next/image'

interface TourScheduleProps {
  onBookClick: (city: string) => void
}

const TourSchedule = ({ onBookClick }: TourScheduleProps) => {
  const tourDates = [
    {
      city: 'Denver',
      dates: 'Feb 1–5',
      image: '/images/31a9fe32-5c22-4da4-97c1-bf7f487d902d.jpeg',
      status: 'available'
    },
    {
      city: 'Minneapolis',
      dates: 'Feb 8–12',
      image: '/images/WhatsApp Image 2025-08-18 at 17.14.32_db82ba28.jpg',
      status: 'available'
    },
    {
      city: 'Chicago',
      dates: 'Feb 15–19',
      image: '/images/372b8c27-c0ce-4253-81d3-aa4401d93184.jpeg',
      status: 'available'
    },
    {
      city: 'New York',
      dates: 'Feb 22–26',
      image: '/images/230c6246-eb2e-484c-a26f-bf0977d891f8.jpeg',
      status: 'available'
    },
    {
      city: 'Los Angeles',
      dates: 'Mar 1–5',
      image: '/images/cb5f2f0b-f6ec-46ed-9be0-3e5919fe4930.jpeg',
      status: 'available'
    },
    {
      city: 'Miami',
      dates: 'Mar 8–12',
      image: '/images/0963e26d-19cc-4831-8b5d-74e8d31d2f14.jpeg',
      status: 'available'
    },
    {
      city: 'Dallas',
      dates: 'Mar 15–19',
      image: '/images/1.jpeg',
      status: 'available'
    },
    {
      city: 'San Francisco',
      dates: 'Mar 22–26',
      image: '/images/2.jpeg',
      status: 'available'
    },
    {
      city: 'Seattle',
      dates: 'Mar 29–Apr 2',
      image: '/images/10.jpeg',
      status: 'available'
    },
    {
      city: 'Boston',
      dates: 'Apr 5–9',
      image: '/images/11.jpeg',
      status: 'available'
    },
    {
      city: 'Washington DC',
      dates: 'Apr 12–16',
      image: '/images/12.jpeg',
      status: 'available'
    },
    {
      city: 'Atlanta',
      dates: 'Apr 19–23',
      image: '/images/13.jpeg',
      status: 'available'
    },
    {
      city: 'Houston',
      dates: 'Apr 26–30',
      image: '/images/14.jpeg',
      status: 'available'
    },
    {
      city: 'Las Vegas',
      dates: 'May 3–7',
      image: '/images/15.jpeg',
      status: 'available'
    },
    {
      city: 'Phoenix',
      dates: 'May 10–14',
      image: '/images/16.jpeg',
      status: 'available'
    },
    {
      city: 'Salt Lake City',
      dates: 'May 17–21',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.54 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Portland',
      dates: 'May 24–28',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.03 AM (1).jpeg',
      status: 'available'
    },
    {
      city: 'San Diego',
      dates: 'May 31–Jun 4',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.57 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Nashville',
      dates: 'Jun 7–11',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.04 AM (2).jpeg',
      status: 'available'
    },
    {
      city: 'New Orleans',
      dates: 'Jun 14–18',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.58 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Charlotte',
      dates: 'Jun 21–25',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.01 AM (3).jpeg',
      status: 'available'
    },
    {
      city: 'Detroit',
      dates: 'Jun 28–Jul 2',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.53 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Philadelphia',
      dates: 'Jul 5–9',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.02 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Baltimore',
      dates: 'Jul 12–16',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.04 AM (3).jpeg',
      status: 'available'
    },
    {
      city: 'Indianapolis',
      dates: 'Jul 19–23',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.04 AM (3).jpeg',
      status: 'available'
    },
    {
      city: 'Columbus',
      dates: 'Jul 26–30',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.56 AM (1).jpeg',
      status: 'available'
    },
    {
      city: 'Milwaukee',
      dates: 'Aug 2–6',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.03 AM (4).jpeg',
      status: 'available'
    },
    {
      city: 'Kansas City',
      dates: 'Aug 9–13',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.01 AM (1).jpeg',
      status: 'available'
    },
    {
      city: 'St. Louis',
      dates: 'Aug 16–20',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.00 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Oklahoma City',
      dates: 'Aug 23–27',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.55 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Albuquerque',
      dates: 'Aug 30–Sep 3',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.04 AM (1).jpeg',
      status: 'available'
    },
    {
      city: 'Cincinnati',
      dates: 'Sep 6–10',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.03 AM (2).jpeg',
      status: 'available'
    },
    {
      city: 'Raleigh',
      dates: 'Sep 13–17',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.56 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Jacksonville',
      dates: 'Sep 20–24',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.04 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Memphis',
      dates: 'Sep 27–Oct 1',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.03 AM (3).jpeg',
      status: 'available'
    },
    {
      city: 'Louisville',
      dates: 'Oct 4–8',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.58 AM (1).jpeg',
      status: 'available'
    },
    {
      city: 'Richmond',
      dates: 'Oct 11–15',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.02 AM (1).jpeg',
      status: 'available'
    },
    {
      city: 'Cleveland',
      dates: 'Oct 18–22',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.01 AM (2).jpeg',
      status: 'available'
    },
    {
      city: 'Pittsburgh',
      dates: 'Oct 25–29',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.03 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Hartford',
      dates: 'Nov 1–5',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.53 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Charleston',
      dates: 'Nov 8–12',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.01 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Norfolk',
      dates: 'Nov 15–19',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.57 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Austin',
      dates: 'Nov 22–26',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.04 AM (2).jpeg',
      status: 'available'
    },
    {
      city: 'Sacramento',
      dates: 'Nov 29–Dec 3',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.54 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Orlando',
      dates: 'Dec 6–10',
      image: '/images/WhatsApp Image 2026-01-28 at 7.27.00 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Providence',
      dates: 'Dec 13–17',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.55 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Santa Fe',
      dates: 'Dec 20–24',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.59 AM.jpeg',
      status: 'available'
    },
    {
      city: 'Honolulu',
      dates: 'Dec 27–31',
      image: '/images/WhatsApp Image 2026-01-28 at 7.26.56 AM (1).jpeg',
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
