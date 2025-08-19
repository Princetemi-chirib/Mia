'use client'

import Image from 'next/image'

const About = () => {
  const aboutImages = [
    '/images/90bedb68-f273-4de5-ba7f-d11916d43baf.jpeg',
    '/images/3c370c90-a398-4763-8683-98b96a9e60c0.jpeg',
    '/images/dfc29a1f-1475-461f-9b33-23fed95b952a.jpeg',
    '/images/b6156022-9b23-400d-8a53-f88c0ecf1801.jpeg',
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-elegant font-bold mb-6 gradient-text">
            The Woman Behind the Experience
          </h2>
          <div className="w-24 h-1 bg-mia-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-mia-gray">
                I'm <span className="font-semibold text-mia-red">Mia Malkova</span> – a woman of elegance, confidence, and warmth. 
                Born in Palm Springs, California, with French-Canadian, German, and Irish roots, 
                I've spent over a decade embracing a journey that blends beauty, media, and meaningful connection.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-mia-gray">
                My early years in hospitality taught me the value of genuine service and attention to detail, 
                while my career in international media and film shaped me into the poised and versatile woman I am today. 
                I've had the privilege of working globally, collaborating with renowned artists, and being featured in acclaimed productions.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-mia-gray">
                Through those experiences, I learned that the most powerful moments are often the most personal.
              </p>
            </div>

            {/* Offerings */}
            <div className="bg-mia-light-red p-8 rounded-xl">
              <h3 className="text-2xl font-elegant font-semibold mb-6 text-mia-red">
                Offerings Include:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-mia-red text-xl">❤</span>
                  <span className="text-mia-gray">
                    <strong>Private Engagements</strong> – Intimate one-on-one meetings, perfect for those seeking companionship in a relaxed, personal setting.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-mia-red text-xl">❤</span>
                  <span className="text-mia-gray">
                    <strong>Social & Public Appearances</strong> – Make a statement with a poised and polished companion by your side for events, dinners, or evenings out.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-mia-red text-xl">❤</span>
                  <span className="text-mia-gray">
                    <strong>Extended Experiences</strong> – Weekend getaways or overnight stays where deeper connection and shared adventure can unfold naturally.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-mia-red text-xl">❤</span>
                  <span className="text-mia-gray">
                    <strong>Fly Me to You</strong> – Available to travel upon request, offering luxury companionship in the city of your choice.
                  </span>
                </li>
              </ul>
            </div>

            {/* Note */}
            <div className="border-l-4 border-mia-red pl-6 bg-mia-light-red p-6 rounded-r-xl">
              <h4 className="font-semibold text-mia-red mb-2">Please Note:</h4>
              <p className="text-mia-gray">
                All experiences are exclusively reserved for respectful, mature individuals. My time is best suited for those who appreciate discretion, clear communication, and emotional presence. Rates, availability, and further details are shared through private inquiry only.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`Mia Malkova ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover image-hover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
