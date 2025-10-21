import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const primaryLogo = new URL("../assets/img/Primary_Logo.png", import.meta.url)
    .href;
  const secondaryLogo = new URL(
    "../assets/img/Secondary_Logo.png",
    import.meta.url
  ).href;

  const isDarkContext = [
    "/",
    "/about",
    "/coffees",
    "/coffees/yirgacheffe",
    "/coffees/sidama",
    "/coffees/guji",
  ].some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/")
  );

  const navBgClass = isDarkContext
    ? "bg-white/98 border-b border-[#DEB887]/30"
    : "bg-white/98 border-b border-[#DEB887]/20";
  const linkBase = "relative py-2 transition-colors";
  const linkActive = "text-[#08775f]";
  const linkInactive = "text-gray-800 hover:text-[#08775f]";

  return (
    <nav
      className={`sticky top-0 z-50 shadow-lg transition-colors backdrop-blur-md ${navBgClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={isDarkContext ? secondaryLogo : primaryLogo}
              alt="ANNO Coffee logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl tracking-tight font-bold text-[#08775f]">
              ANNO Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`${linkBase} ${
                isActive("/") ? linkActive : linkInactive
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#08775f]" />
              )}
            </Link>
            <Link
              to="/coffees"
              className={`${linkBase} ${
                isActive("/coffees") ? linkActive : linkInactive
              }`}
            >
              Our Coffees
              {isActive("/coffees") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#08775f]" />
              )}
            </Link>
            <Link
              to="/about"
              className={`${linkBase} ${
                isActive("/about") ? linkActive : linkInactive
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#08775f]" />
              )}
            </Link>
            <Link
              to="/coffees"
              className="px-6 py-2.5 rounded-full transition-colors bg-[#08775f] text-white hover:bg-[#065a4a]"
            >
              Explore Coffees
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#08775f]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 pb-4 flex flex-col gap-4 rounded-xl p-4 shadow-lg ${
              isDarkContext
                ? "bg-white/98 border border-[#DEB887]/30"
                : "bg-white/98 border border-[#DEB887]/20"
            }`}
          >
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 transition-colors ${
                isActive("/") ? "text-[#08775f]" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              to="/coffees"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 transition-colors ${
                isActive("/coffees") ? "text-[#08775f]" : "text-gray-800"
              }`}
            >
              Our Coffees
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 transition-colors ${
                isActive("/about") ? "text-[#08775f]" : "text-gray-800"
              }`}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
