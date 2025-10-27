import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Thermometer,
  Droplets,
  Coffee,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePageLoadAnimation, useScrollAnimation } from "../utils/animations";
import heroYirg from "../assets/9137a3113be679882a8f8462339fb937106be9f8.png";

export function YirgacheffePage() {
  usePageLoadAnimation();
  const heroRef = useScrollAnimation();
  const detailsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const coffeeImage = new URL(
    "../assets/img/Edited_Valley_Photo.jpg",
    import.meta.url
  ).href;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coffeeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#08775f]/60 via-[#065a4a]/50 to-[#08775f]/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <Link
            to="/coffees"
            className="inline-flex items-center gap-2 mb-6 text-[#DEB887] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Coffees
          </Link>
          <h1 className="text-6xl md:text-7xl mb-4 font-primary animate-fadeInUp">
            Yirgacheffe
          </h1>
          <p className="text-2xl text-[#DEB887]">Floral & Fruity Excellence</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                        Southern Ethiopia, Yirgacheffe District
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
                        1,700 - 2,200 meters above sea level
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
                      <p className="text-gray-600">Washed (Wet Process)</p>
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
                    Jasmine
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Bergamot
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Blueberry
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Floral
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Bright Acidity
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-[#c6a86d]/30 text-[#c6a86d]">
                    Clean Finish
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl mb-6 text-gray-900">
                  About Yirgacheffe Coffee
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Yirgacheffe coffee, grown in the southern Ethiopian highlands,
                  stands as one of the world's most renowned and sought-after
                  coffees. This exceptional variety is celebrated for its
                  distinctive floral and fruity flavor profile that sets it
                  apart from other coffee origins.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The coffee cherries thrive at high altitudes between 1,700 and
                  2,200 meters, where the combination of rich volcanic soil,
                  ideal climate, and traditional farming methods create the
                  perfect conditions for developing complex flavors. The
                  region's misty mornings and warm afternoons contribute to the
                  slow maturation of the coffee cherries, allowing them to
                  develop their signature taste.
                </p>

                <h3 className="text-2xl mb-4 mt-8 text-gray-900">
                  Processing Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Yirgacheffe coffee is processed using the washed method, also
                  known as wet processing. This meticulous technique involves
                  removing the coffee cherry's outer fruit before drying, which
                  brings out the coffee's bright, clean flavors and enhances its
                  natural acidity.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The beans are carefully pulped, fermented for 36-48 hours to
                  remove the mucilage, and then washed with fresh mountain
                  spring water. After washing, they're dried on raised beds for
                  10-14 days, allowing for even drying and preventing any
                  unwanted fermentation.
                </p>

                <h3 className="text-2xl mb-4 mt-8 text-gray-900">
                  Tasting Notes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  When brewed, Yirgacheffe coffee reveals a complex bouquet of
                  flavors. The initial aroma presents delicate jasmine and
                  bergamot notes, reminiscent of Earl Grey tea. As you taste,
                  bright blueberry flavors emerge, accompanied by a wine-like
                  acidity that's both vibrant and refined.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The finish is exceptionally clean and lingering, leaving a
                  pleasant floral aftertaste. This complexity makes Yirgacheffe
                  perfect for those who appreciate nuanced, sophisticated coffee
                  experiences. It's best enjoyed as a pour-over or French press
                  to fully appreciate its delicate characteristics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white scroll-animate"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 font-primary">
            Interested in Yirgacheffe Coffee?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Contact us to learn more about our Yirgacheffe coffee beans and how
            we can supply your business with this exceptional variety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/coffees/sidama"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              Next: Sidama
            </Link>
            <Link
              to="/coffees"
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
