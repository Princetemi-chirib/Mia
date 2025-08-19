'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    '/images/1a926abd-950d-432d-a6f7-63cf06ac01cd.jpeg',
    '/images/c6127cfa-9ad5-4705-a3b9-86cc06bfd81d.jpeg',
    '/images/2.jpeg',
    '/images/7.jpeg',
    '/images/12.jpeg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Mia Malkova ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-elegant font-bold mb-6 gradient-text">
          Mia Malkova
        </h1>
        <p className="text-xl md:text-2xl font-modern mb-8 max-w-2xl mx-auto">
          Elegance • Confidence • Warmth
        </p>
        <p className="text-lg md:text-xl font-modern mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience luxury companionship with a woman of sophistication and charm. 
          Available for private engagements, social appearances, and unforgettable moments.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-elegant text-lg px-10 py-4">
            View My Schedule ❤
          </button>
          <button className="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-mia-red">
            Contact Me 💋
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-mia-red scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
