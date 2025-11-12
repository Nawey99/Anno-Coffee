import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Globe, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { usePageLoadAnimation, useScrollAnimation } from "../utils/animations";

type HighlightCard = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  cardClasses: string;
  iconClasses: string;
  delay: string;
};

type ApproachCard = {
  id: string;
  title: string;
  description: string;
  cardClasses: string;
  backgroundColor: string;
  delay: string;
};

const highlightCards: HighlightCard[] = [
  {
    id: "origin",
    title: "Origin of Excellence",
    description:
      "From the highlands of Anno in Ethiopia’s Guji Zone, a region where nature thrives in harmony and coffee is nurtured with deep respect for the land.",
    Icon: Heart,
    cardClasses: "bg-white",
    iconClasses:
      "w-16 h-16 bg-[#08775f]/10 rounded-2xl flex items-center justify-center mb-6 text-[#08775f]",
    delay: "0.1s",
  },
  {
    id: "experience",
    title: "Immeasurable Experience",
    description:
      "From seedling farm to processing for commercial consumption, we have amassed immeasurable experience with Ethiopian green coffee production.",
    Icon: Globe,
    cardClasses: "bg-white",
    iconClasses:
      "w-16 h-16 bg-[#DEB887]/20 rounded-2xl flex items-center justify-center mb-6 text-[#c6a86d]",
    delay: "0.2s",
  },
  {
    id: "quality",
    title: "Quality & Tradition",
    description:
      "Sourced from Ethiopia’s renowned coffee highlands, we bring you the pure, authentic taste of coffee from its birthplace where tradition, altitude, and craftsmanship meet in every bean.",
    Icon: Award,
    cardClasses: "bg-white",
    iconClasses:
      "w-16 h-16 bg-[#bae4e9]/30 rounded-2xl flex items-center justify-center mb-6 text-[#08775f]",
    delay: "0.3s",
  },
];

const approachCards: ApproachCard[] = [
  {
    id: "direct",
    title: "Direct Partnerships",
    description:
      "We work directly with farmers in Guji, Yirgacheffe, and Sidama, ensuring fair compensation and building lasting relationships.",
    cardClasses:
      "bg-[#d9b98e]/90 text-[#2f2413] rounded-[28px] p-8 shadow-lg border border-white/50 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl",
    backgroundColor: "#d9b98e",
    delay: "0.1s",
  },
  {
    id: "organic",
    title: "Organic Practices",
    description:
      "All our coffee is grown organically using natural compost instead of chemical fertilizers, ensuring purity and sustainability.",
    cardClasses:
      "bg-[#d9b98e]/90 text-[#2f2413] rounded-[28px] p-8 shadow-lg border border-white/50 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl",
    backgroundColor: "#d9b98e",
    delay: "0.2s",
  },
  {
    id: "control",
    title: "Quality Control",
    description:
      "Each batch is thoroughly tested and inspected to ensure it meets our rigorous standards for excellence.",
    cardClasses:
      "bg-[#d9b98e]/90 text-[#2f2413] rounded-[28px] p-8 shadow-lg border border-white/50 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl",
    backgroundColor: "#d9b98e",
    delay: "0.3s",
  },
  {
    id: "selection",
    title: "Premium Selection",
    description:
      "We carefully select only the finest beans from Ethiopia's most renowned coffee growing regions.",
    cardClasses:
      "bg-[#d9b98e]/90 text-[#2f2413] rounded-[28px] p-8 shadow-lg border border-white/50 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl",
    backgroundColor: "#d9b98e",
    delay: "0.4s",
  },
  {
    id: "community",
    title: "Community Support",
    description:
      "We're committed to supporting the communities where our coffee is grown through fair wages and sustainable practices.",
    cardClasses:
      "bg-[#d9b98e]/90 text-[#2f2413] rounded-[28px] p-8 shadow-lg border border-white/50 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl",
    backgroundColor: "#d9b98e",
    delay: "0.5s",
  },
  {
    id: "environment",
    title: "Environmental Care",
    description:
      "We prioritize eco-friendly packaging and shipping methods to minimize our environmental impact.",
    cardClasses:
      "bg-[#d9b98e]/90 text-[#2f2413] rounded-[28px] p-8 shadow-lg border border-white/50 backdrop-blur-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-2xl",
    backgroundColor: "#d9b98e",
    delay: "0.6s",
  },
];

export function AboutPage() {
  usePageLoadAnimation();
  const heroRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const familyRef = useScrollAnimation();
  const heritageRef = useScrollAnimation();
  const approachRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const mountainImage = new URL("../assets/img/Mountains .jpg", import.meta.url)
    .href;
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
      <Helmet>
        <title>About Anno Coffee | Heritage from Anno Highlands</title>
        <meta
          name="description"
          content="Discover Anno Coffee’s story—heritage from Ethiopia’s Anno highlands, quality sourcing, and sustainable partnerships."
        />
        <meta property="og:title" content="About Anno Coffee" />
        <meta
          property="og:description"
          content="Heritage from Ethiopia’s Anno highlands."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="space-y-24 md:space-y-32">
        <section
          ref={heroRef}
          className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mountainImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-[#08775f]/30 backdrop-blur-sm border border-[#08775f]/50 rounded-full">
              <span className="text-[#DEB887]">From the highlands of Anno</span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6 tracking-tight font-bold">
              Our Story
            </h1>
            <p className="text-2xl text-gray-100 leading-relaxed">
              Rooted in Ethiopia’s coffee heartland, we craft every bean with
              skill, passion, and respect for tradition from seedling to
              processing.
            </p>
          </div>
        </section>

        <section
          ref={missionRef}
          className="py-20 bg-gradient-to-b from-[#DEB887]/10 to-white scroll-animate"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Our Logo is Our Identity
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                ANNO Coffee brings you the finest Ethiopian coffee from the
                sacred hills of Anno, where tradition meets excellence. Our logo
                represents our identity—coffee bean and mountain—symbolizing our
                commitment to quality and our enduring origins.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {highlightCards.map(
                ({
                  id,
                  title,
                  description,
                  Icon,
                  cardClasses,
                  iconClasses,
                  delay,
                }) => (
                  <div
                    key={id}
                    className={`${cardClasses} rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow animate-fadeInUp`}
                    style={{ animationDelay: delay }}
                  >
                    <div className={iconClasses}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl mb-4 text-gray-900">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section ref={familyRef} className="py-20 bg-white scroll-animate">
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
                  For years, we have been importing the finest green coffee
                  beans from Ethiopia to the United States. Our journey began
                  with a simple dream—to share the incredible coffee from our
                  homeland with coffee lovers across America.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  As a family-owned business, we understand the importance of
                  relationships and trust. We work directly with farmers in
                  Ethiopia's most renowned coffee regions—Yirgacheffe, Sidama,
                  and Guji—building partnerships that span generations.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our commitment goes beyond business. We ensure that every
                  farmer we work with is fairly compensated and that sustainable
                  farming practices are maintained. This isn't just about
                  coffee—it's about preserving a way of life and supporting
                  communities.
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
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={heritageRef}
          className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-animate"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={coffeeImage}
                    alt="Coffee plantation"
                    className="w-full h-[600px] object-cover"
                    loading="lazy"
                    decoding="async"
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
                  Ethiopia is the birthplace of coffee itself. Legend tells of
                  Kaldi, an Ethiopian goat herder who discovered coffee over
                  1,500 years ago when he noticed his goats becoming energetic
                  after eating coffee cherries.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Today, coffee remains deeply woven into Ethiopian culture. The
                  traditional Ethiopian coffee ceremony is a symbol of
                  hospitality and friendship, passed down through countless
                  generations.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At Anno Coffee, we honor this incredible heritage by ensuring
                  that every bean we import represents the very best of
                  Ethiopian coffee tradition, quality, and craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={approachRef} className="py-20 bg-white scroll-animate">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Our Approach
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Every step of our process is designed to ensure the highest
                quality and sustainability
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approachCards.map(
                ({
                  id,
                  title,
                  description,
                  cardClasses,
                  backgroundColor,
                  delay,
                }) => (
                  <div
                    key={id}
                    className={`relative text-center animate-fadeInUp ${cardClasses}`}
                    style={{
                      animationDelay: delay,
                      backgroundColor,
                      borderRadius: "28px",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(4px)",
                      padding: "2.5rem",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section
          ref={ctaRef}
          className="py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden"
        >
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
              Experience the Tradition of Ethiopian Coffee Today with Anno
              Coffee
            </h2>
            <p className="text-xl mb-10 text-amber-100 leading-relaxed">
              Anno Coffee is a green coffee importing company based in Chicago,
              IL. Founded by the Morkata Shonora family, our mission is to honor
              the heritage of Ethiopian coffee while supporting local farmers
              and communities.
            </p>
            <Link
              to="/coffees"
              className="inline-flex items-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-full hover:bg-amber-50 transition-all transform hover:scale-105"
            >
              Discover Our Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
