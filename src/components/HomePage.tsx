import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Leaf,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  const farmImage = new URL(
    "../assets/img/Coffee_Beans_Sunset.jpg",
    import.meta.url
  ).href;
  const valleyImage = new URL(
    "../assets/img/Valley_With_Tree.jpg",
    import.meta.url
  ).href;
  const coffeeDryingImage = new URL(
    "../assets/img/Mountains .jpg",
    import.meta.url
  ).href;
  const fieldImage = new URL(
    "../assets/img/Coffee_Fields_Sunset .jpg",
    import.meta.url
  ).href;

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = "service_0peuwlq";
  const EMAILJS_TEMPLATE_ID = "template_y5p129r";
  const EMAILJS_PUBLIC_KEY = "XZaOCknVntQAtAE9c";

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
          to_name: "ANNO Coffee Team",
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmImage})` }}
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
            ANNO Coffee
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Experience the sacred tradition of Ethiopian coffee from Anno, a
            refreshing hill known to be sacred in Oromo people's Gada System
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/coffees"
              className="inline-flex items-center gap-2 bg-[#08775f] hover:bg-[#065a4a] text-white px-8 py-4 rounded-full transition-all transform hover:scale-105"
            >
              Explore our Coffee
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full border border-white/30 transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#DEB887]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#08775f]/10 rounded-full mb-6">
                <Leaf className="w-8 h-8 text-[#08775f]" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Sacred Origins</h3>
              <p className="text-gray-600 leading-relaxed">
                From Anno, a sacred hill in Ethiopia's Oromo Gada System, where
                plants and animals are all feared and respected
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DEB887]/20 rounded-full mb-6">
                <Award className="w-8 h-8 text-[#c6a86d]" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                Immeasurable Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From seedling farm to processing for commercial consumption, we
                have amassed immeasurable experience with Ethiopian green coffee
                production
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#bae4e9]/30 rounded-full mb-6">
                <Users className="w-8 h-8 text-[#08775f]" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">
                Direct from Ethiopia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Coming from coffee growing areas in Ethiopia, we bring you
                authentic flavors from the birthplace of coffee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family-Owned Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 px-3 py-1 bg-[#DEB887]/20 text-[#08775f] rounded-full">
                Our Identity
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 leading-tight">
                Family-Owned. 25 Years of Passion for Coffee
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Anno Coffee, we import the finest green coffee beans from
                Ethiopia, the birthplace of coffee. Our coffee is organic,
                naturally grown, and pesticidefree.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As a family-owned business with over 25 years of experience in
                the coffee industry, we work directly with out-grower farmers in
                the Guji area and are passionate about delivering the
                highestquality product to our customers.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#08775f] hover:text-[#065a4a] transition-colors group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={valleyImage}
                  alt="Ethiopian coffee beans"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Coffee Selection Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={coffeeDryingImage}
                  alt="Coffee processing"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-[#DEB887]/20 text-[#08775f] rounded-full">
                Core Elements
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 leading-tight">
                Our Green Coffee Selection Process
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Anno Coffee, we carefully select the highestquality green
                coffee beans from across Ethiopia. Our team works hand-in-hand
                with farmers to guarantee that the best farming and processing
                methods are used.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Each batch is then evaluated for flavor, aroma, and acidity,
                ensuring that every bean meets our standards.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#DEB887]/20 text-[#08775f] rounded-full border border-[#DEB887]/30">
                  Coffee Bean
                </span>
                <span className="px-4 py-2 bg-[#DEB887]/20 text-[#08775f] rounded-full border border-[#DEB887]/30">
                  Mountain Representation
                </span>
                <span className="px-4 py-2 bg-[#DEB887]/20 text-[#08775f] rounded-full border border-[#DEB887]/30">
                  Sacred Origins
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 px-3 py-1 bg-[#08775f]/10 text-[#08775f] rounded-full">
                Color Palette
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 leading-tight">
                Sustainability From Seed to Cup
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Anno Coffee, we are committed to reducing our carbon
                footprint. Our coffee is ethically sourced and environmentally
                sustainable.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We ensure that all our farmers use sustainable farming practices
                and are paid fairly for their hard work. We are also committed
                to using eco-friendly packaging and shipping methods
              </p>
              
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={fieldImage}
                  alt="Sustainable farming"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white relative overflow-hidden">
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
            Experience the Tradition of Ethiopian Coffee Today with Anno Coffee
          </h2>
          <p className="text-xl mb-10 text-amber-100 leading-relaxed">
            Anno Coffee is a green coffee importing company based in Chicago,
            IL. Founded by the Morkata Shonora family, our mission is to honor
            the heritage of Ethiopian coffee while supporting local farmers and
            communities.
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

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-amber-900 hover:bg-amber-950 disabled:bg-amber-600 disabled:cursor-not-allowed text-white px-10 py-4 rounded-full transition-all transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Mail className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-amber-900" />
              </div>
              <p className="text-gray-600">info@annocoffee.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-900" />
              </div>
              <p className="text-gray-600">+1 (312) 555-0123</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-900" />
              </div>
              <p className="text-gray-600">Chicago, Illinois</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
