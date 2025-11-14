"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Thermometer,
  Droplets,
  Coffee,
  Sparkles,
} from "lucide-react";
import { usePageLoadAnimation, useScrollAnimation } from "@/utils/animations";

export default function GujiPage() {
  usePageLoadAnimation();
  const heroRef = useScrollAnimation();
  const detailsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/Coffee_Beans_Drying.jpg"
            alt="Guji coffee"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08775f]/60 via-[#065a4a]/50 to-[#08775f]/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <Link
            href="/coffees"
            className="inline-flex items-center gap-2 mb-6 text-[#DEB887] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Coffees
          </Link>
          <h1 className="text-6xl md:text-7xl mb-4 font-primary animate-fadeInUp">
            Guji
          </h1>
          <p className="text-2xl text-[#DEB887]">Sweet & Clean Perfection</p>
        </div>
      </section>

      {/* Details Section */}
      <section
        ref={detailsRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-animate"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Specs */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl mb-6 text-gray-900">
                  Coffee Specifications
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-[#c6a86d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#c6a86d]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">
                        Origin Region
                      </h3>
                      <p className="text-gray-600">
                        Guji Zone, Oromia Region, Ethiopia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-[#c6a86d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-6 h-6 text-[#c6a86d]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">
                        Growing Altitude
                      </h3>
                      <p className="text-gray-600">
                        1,800 - 2,300 meters above sea level
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-[#c6a86d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-[#c6a86d]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">
                        Processing Method
                      </h3>
                      <p className="text-gray-600">
                        Washed with Mountain Spring Water
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c6a86d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-6 h-6 text-[#c6a86d]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">Varietal</h3>
                      <p className="text-gray-600">
                        Heirloom Ethiopian Varieties
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flavor Profile */}
              <div className="bg-gradient-to-br from-[#c6a86d]/10 to-[#DEB887]/10 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-[#c6a86d]" />
                  <h2 className="text-3xl text-gray-900">Flavor Profile</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Peach
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Cocoa
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Lemon Candy
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Black Tea
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl mb-6 text-gray-900">
                  About Guji Coffee
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Guji coffee represents one of Ethiopia's most exciting and
                  rapidly emerging coffee regions. Located in the Guji Zone of
                  the Oromia Region, this area has gained international
                  recognition for producing coffees that rival and often surpass
                  the quality of neighboring Yirgacheffe and Sidama regions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Guji region benefits from exceptional growing conditions
                  at elevations between 1,800 and 2,300 meters. The high
                  altitude, combined with rich volcanic soil and ideal rainfall
                  patterns, creates coffee cherries with remarkable complexity
                  and sweetness. This is where Anno Coffee has established deep
                  relationships with local farmers.
                </p>

                <h3 className="text-2xl mb-4 mt-8 text-gray-900">
                  Meticulous Processing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Guji coffee undergoes a meticulous washed processing method
                  that highlights its inherent sweetness and clarity. Farmers
                  carefully hand-pick only the ripest coffee cherries at peak
                  maturity and bring them to central washing stations, ensuring
                  consistent quality control.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At the washing stations, the cherries are immediately pulped
                  to remove the outer fruit. The beans then undergo fermentation
                  for 36 to 72 hours in clean tanks, allowing natural enzymes to
                  break down the remaining mucilage. After fermentation, the
                  beans are washed multiple times with fresh mountain spring
                  water, ensuring absolute cleanliness.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The washed beans are then carefully spread on raised drying
                  beds where they sun-dry for several weeks. Workers turn the
                  beans regularly to ensure even drying and prevent any defects.
                  This patient, labor-intensive process results in a remarkably
                  clean cup with exceptional clarity of flavor.
                </p>

                <h3 className="text-2xl mb-4 mt-8 text-gray-900">
                  Tasting Notes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Guji coffee delivers a sweet, clean cup with extraordinary
                  complexity. The first sip reveals bright peach notes that
                  immediately captivate the palate, followed by rich cocoa
                  undertones that add depth and balance. As the coffee develops,
                  subtle lemon candy flavors emerge, providing a delightful
                  tartness.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Black currant notes add a sophisticated, wine-like quality to
                  the finish, creating a multi-layered tasting experience. The
                  overall impression is one of remarkable sweetness and
                  cleanliness, with a smooth body and vibrant acidity that never
                  overwhelms. This coffee is equally impressive as pour-over,
                  espresso, or cold brew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-green-900 text-white scroll-animate"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-primary">
            Interested in Guji Coffee?
          </h2>
          <p className="text-xl text-green-100 mb-10 leading-relaxed">
            Contact us to learn more about our Guji coffee beans and how we can
            supply your business with this exceptional variety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-full hover:bg-green-50 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/coffees/yirgacheffe"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              Next: Yirgacheffe
            </Link>
            <Link
              href="/coffees"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              All Coffees
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

