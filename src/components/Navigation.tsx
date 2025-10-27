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

  const primaryLogo = new URL(
    "../assets/img/Secondary_Logo.png",
    import.meta.url
  ).href;
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

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-2xl border-b border-white/30 shadow-2xl"
      style={{
        background: "rgba(255, 255, 255, 0.55)", // <-- higher opacity, still translucent
        backdropFilter: "blur(24px) saturate(180%)", // <-- extra blur + contrast
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }}
    >
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={isDarkContext ? secondaryLogo : primaryLogo}
              alt="Anno Coffee logo"
              className="w-10 h-8 object-contain"
            />
            <span className="text-2xl tracking-tight font-bold text-[#08775f] font-primary">
              Anno Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link ${
                isActive("/") ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              Home
              {isActive("/") && <span className="nav-indicator" />}
            </Link>
            <Link
              to="/coffees"
              className={`nav-link ${
                isActive("/coffees") ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              Our Coffees
              {isActive("/coffees") && <span className="nav-indicator" />}
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isActive("/about") ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              About
              {isActive("/about") && <span className="nav-indicator" />}
            </Link>
            <Link
              to="/coffees"
              style={{
                padding: "0.5rem 1rem",
                background: "#08775f",
                color: "white",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(8, 119, 95, 0.3)",
                border: "2px solid transparent",
              }}
            >
              {" "}
              Explore Coffees
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden mobile-menu-button"
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
          <div className="md:hidden mt-4 bg-white/50 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive("/") ? "mobile-nav-link-active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/coffees"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive("/coffees") ? "mobile-nav-link-active" : ""
              }`}
            >
              Our Coffees
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive("/about") ? "mobile-nav-link-active" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/coffees"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-explore-button"
            >
              Explore Coffees
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
