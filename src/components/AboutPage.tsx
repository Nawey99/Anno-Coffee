import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Heart,
  Globe,
  Award,
  Coffee,
  Leaf,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const mountainImage = new URL(
    "../assets/img/Mountains .jpg",
    import.meta.url
  ).href;
  const valleyImage = new URL(
    "../assets/img/Valley_With_Tree.jpg",
    import.meta.url
  ).href;
  const coffeeImage = new URL(
    "../assets/img/Coffee_Beans_Daylight.jpg",
    import.meta.url
  ).href;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mountainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-[#08775f]/30 backdrop-blur-sm border border-[#08775f]/50 rounded-full">
            <span className="text-[#DEB887]">
              From the Sacred Hills of Anno
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl mb-6 tracking-tight font-bold">
            Our Story
          </h1>
          <p className="text-2xl text-gray-100 leading-relaxed">
            Immeasurable experience with Ethiopian green coffee production from
            seedling farm to processing
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[#DEB887]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Our Logo is Our Identity
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ANNO Coffee brings you the finest Ethiopian coffee from the sacred
              hills of Anno, where tradition meets excellence. Our logo
              represents our identity - a coffee bean and mountain, symbolizing
              our commitment to quality and our sacred origins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#08775f]/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#08775f]" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">Sacred Origins</h3>
              <p className="text-gray-600 leading-relaxed">
                From Anno, a sacred hill in Ethiopia's Oromo Gada System, where
                plants and animals are all feared and respected.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#DEB887]/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-[#c6a86d]" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Immeasurable Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From seedling farm to processing for commercial consumption, we
                have amassed immeasurable experience with Ethiopian green coffee
                production.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#bae4e9]/30 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#08775f]" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Quality & Tradition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Coming from coffee growing areas in Ethiopia, we bring you
                authentic flavors from the birthplace of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                The Markos-Sirakis Family
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 leading-tight">
                A Family Legacy Built on Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                For over 25 years, the Markos-Sirakis family has been importing
                the finest green coffee beans from Ethiopia to the United
                States. Our journey began with a simple dream: to share the
                incredible coffee from our homeland with coffee lovers across
                America.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                As a family-owned business, we understand the importance of
                relationships and trust. We work directly with farmers in
                Ethiopia's most renowned coffee regions - Yirgacheffe, Sidama,
                and Guji - building partnerships that span generations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our commitment goes beyond business. We ensure that every farmer
                we work with is fairly compensated and that sustainable farming
                practices are maintained. This isn't just about coffee - it's
                about preserving a way of life and supporting communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="text-amber-900">Family-Owned</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="text-amber-900">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span className="text-amber-900">Direct Trade</span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={valleyImage}
                  alt="Coffee beans"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethiopian Heritage Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={coffeeImage}
                  alt="Coffee plantation"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4 px-3 py-1 bg-green-100 text-green-900 rounded-full">
                Over 1,500 Years of Coffee History
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 leading-tight">
                The Birthplace of Coffee
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ethiopia is not just another coffee-producing country - it is
                the birthplace of coffee itself. Legend tells of Kaldi, an
                Ethiopian goat herder who discovered coffee over 1,500 years ago
                when he noticed his goats becoming energetic after eating coffee
                cherries.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Today, coffee remains deeply woven into Ethiopian culture. The
                traditional Ethiopian coffee ceremony is a symbol of hospitality
                and friendship, a ritual that has been passed down through
                countless generations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Anno Coffee, we honor this incredible heritage by ensuring
                that every bean we import represents the very best of Ethiopian
                coffee tradition, quality, and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every step of our process is designed to ensure the highest
              quality and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">
                Direct Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work directly with farmers in Guji, Yirgacheffe, and Sidama,
                ensuring fair compensation and building lasting relationships.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Organic Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                All our coffee is grown organically using natural compost
                instead of chemical fertilizers, ensuring purity and
                sustainability.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Quality Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Each batch is thoroughly tested and inspected to ensure it meets
                our rigorous standards for excellence.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Premium Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                We carefully select only the finest beans from Ethiopia's most
                renowned coffee growing regions.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Community Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to supporting the communities where our coffee
                is grown through fair wages and sustainable practices.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-4 text-gray-900">Environmental Care</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize eco-friendly packaging and shipping methods to
                minimize our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#08775f] via-[#065a4a] to-[#08775f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            Experience the Sacred Tradition of ANNO Coffee
          </h2>
          <p className="text-xl mb-10 text-[#DEB887] leading-relaxed">
            Join us in celebrating Ethiopian coffee heritage from the sacred
            hills of Anno. Explore our collection and discover the difference
            that quality, passion, and tradition make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/coffees"
              className="inline-flex items-center gap-2 bg-[#DEB887] text-[#08775f] px-8 py-4 rounded-full hover:bg-[#c6a86d] transition-all transform hover:scale-105 font-semibold"
            >
              Explore Our Coffees
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
