import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Thermometer, Droplets } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CoffeesPage() {
  const coffees = [
    {
      id: "yirgacheffe",
      name: "Yirgacheffe",
      subtitle: "Floral & Fruity",
      region: "Southern Ethiopia",
      altitude: "1,700-2,200m",
      process: "Washed",
      description:
        "Known worldwide for its floral and fruity flavor profile, with notes of jasmine, bergamot, and blueberry. Cultivated at high altitudes and processed using a wet method, bringing out bright, clean flavors.",
      image: new URL("../assets/img/Edited_Valley_Photo.jpg", import.meta.url)
        .href,
      path: "/coffees/yirgacheffe",
      color: "from-blue-600 to-green-600",
    },
    {
      id: "sidama",
      name: "Sidama",
      subtitle: "Balanced & Complex",
      region: "Southern Ethiopia",
      altitude: "1,400-2,200m",
      process: "Natural",
      description:
        "Celebrated for its balanced and complex flavors, with notes of chocolate, citrus, and stone fruit. Grown at varied altitudes and processed using a dry method, enhancing its sweetness and body.",
      image: new URL("../assets/img/Coffee_Beans_Daylight.jpg", import.meta.url)
        .href,
      path: "/coffees/sidama",
      color: "from-amber-600 to-orange-600",
    },
    {
      id: "guji",
      name: "Guji",
      subtitle: "Sweet & Clean",
      region: "Guji Zone",
      altitude: "1,800-2,300m",
      process: "Washed",
      description:
        "Rich in history and flavor. Cherries are pulped and washed with fresh mountain spring water, then fermented for 36-72 hours. The result is a sweet, clean cup with notes of peach, cocoa, lemon candy, and black currant.",
      image: new URL("../assets/img/Coffee_Beans_Drying.jpg", import.meta.url)
        .href,
      path: "/coffees/guji",
      color: "from-green-600 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full">
            <span className="text-amber-200">Premium Ethiopian Varieties</span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6">Our Coffees</h1>
          <p className="text-xl text-amber-100 leading-relaxed max-w-3xl mx-auto">
            Whether you love bright flavors, balanced chocolate tones, or a
            sweet finish, Anno Coffee has a perfect variety for you.
          </p>
        </div>
      </section>

      {/* Coffee Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffees.map((coffee) => (
              <Link
                key={coffee.id}
                to={coffee.path}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${coffee.color} opacity-40 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-3xl text-white mb-1">{coffee.name}</h2>
                    <p className="text-white/90">{coffee.subtitle}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {coffee.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-amber-700" />
                      <span className="text-sm">{coffee.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Thermometer className="w-4 h-4 text-amber-700" />
                      <span className="text-sm">
                        Altitude: {coffee.altitude}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Droplets className="w-4 h-4 text-amber-700" />
                      <span className="text-sm">Process: {coffee.process}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-amber-900 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Experience Authentic Ethiopian Coffee?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact us today to learn more about our premium green coffee beans
            and how we can support your coffee business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
