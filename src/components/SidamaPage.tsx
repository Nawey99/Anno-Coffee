import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Thermometer,
  Droplets,
  Coffee,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroSidama from "../assets/9942fe59d81492535eb263f6c0da7e41409fc43d.png";

export function SidamaPage() {
  const coffeeImage = new URL(
    "../assets/img/Coffee_Beans_Daylight.jpg",
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
          <h1 className="text-6xl md:text-7xl mb-4">Sidama</h1>
          <p className="text-2xl text-[#DEB887]">Balanced & Complex Harmony</p>
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
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">
                        Origin Region
                      </h3>
                      <p className="text-gray-600">
                        Southern Ethiopia, Sidama Region
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">
                        Growing Altitude
                      </h3>
                      <p className="text-gray-600">
                        1,400 - 2,200 meters above sea level
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">
                        Processing Method
                      </h3>
                      <p className="text-gray-600">Natural (Dry Process)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-6 h-6 text-amber-700" />
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
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                  <h2 className="text-3xl text-gray-900">Flavor Profile</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full border border-amber-200 text-amber-900">
                    Chocolate
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-orange-200 text-orange-900">
                    Citrus
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-amber-200 text-amber-900">
                    Stone Fruit
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-orange-200 text-orange-900">
                    Balanced
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-amber-200 text-amber-900">
                    Sweet Body
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full border border-orange-200 text-orange-900">
                    Complex
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl mb-6 text-gray-900">
                  About Sidama Coffee
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sidama coffee, cultivated in the lush highlands of southern
                  Ethiopia, represents one of the country's most celebrated
                  coffee-growing regions. Named after the Sidama people who have
                  tended these lands for generations, this coffee is renowned
                  for its perfectly balanced and remarkably complex flavor
                  profile.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The Sidama region benefits from diverse microclimates and
                  elevations ranging from 1,400 to 2,200 meters. This variation
                  allows for a wide spectrum of flavor development, creating
                  coffees with exceptional depth and character. The area's red
                  volcanic soil, combined with ample rainfall and ideal
                  temperatures, provides perfect growing conditions.
                </p>

                <h3 className="text-2xl mb-4 mt-8 text-gray-900">
                  Natural Processing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Unlike washed coffees, Sidama is traditionally processed using
                  the natural or dry method, an ancient technique that enhances
                  the coffee's inherent sweetness and body. This method involves
                  drying the whole coffee cherry in the sun, allowing the fruit
                  to naturally impart its flavors to the beans.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The cherries are carefully spread on raised drying beds and
                  turned regularly for 3-4 weeks until they reach optimal
                  moisture content. This patient process results in a coffee
                  with pronounced fruity notes, enhanced sweetness, and a
                  fuller, more rounded body compared to washed coffees.
                </p>

                <h3 className="text-2xl mb-4 mt-8 text-gray-900">
                  Tasting Notes
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sidama coffee offers a beautifully balanced cup with layers of
                  complexity. The initial taste reveals rich chocolate notes,
                  followed by bright citrus undertones that add vibrancy without
                  overwhelming the palate. Stone fruit flavors, particularly
                  peach and apricot, emerge as the coffee cools.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The body is medium to full, with a syrupy smoothness that
                  coats the palate. The natural processing enhances the coffee's
                  sweetness, creating a well-rounded cup that appeals to both
                  traditional coffee lovers and those seeking more adventurous
                  flavors. It's excellent for espresso, French press, or drip
                  brewing methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Interested in Sidama Coffee?
          </h2>
          <p className="text-xl text-amber-100 mb-10 leading-relaxed">
            Contact us to learn more about our Sidama coffee beans and how we
            can supply your business with this exceptional variety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-full hover:bg-amber-50 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/coffees"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Coffees
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
