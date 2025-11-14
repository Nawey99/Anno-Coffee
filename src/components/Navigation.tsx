"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuPanelId = "primary-navigation";

  // Close on ESC and restore focus to the toggle button
  const toggleRef = React.useRef<HTMLButtonElement | null>(null);
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    if (mobileMenuOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isDarkContext = [
    "/",
    "/about",
    "/coffees",
    "/coffees/yirgacheffe",
    "/coffees/sidama",
    "/coffees/guji",
  ].some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-2xl border-b border-white/30 shadow-2xl"
      style={{
        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
      }}
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/img/Secondary_Logo.png"
              alt="Anno Coffee logo"
              width={40}
              height={32}
              className="object-contain"
            />
            <span className="text-2xl tracking-tight font-bold text-[#08775f] font-primary">
              Anno Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`nav-link ${
                isActive("/") ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              Home
              {isActive("/") && <span className="nav-indicator" />}
            </Link>
            <Link
              href="/coffees"
              className={`nav-link ${
                isActive("/coffees") ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              Our Coffees
              {isActive("/coffees") && <span className="nav-indicator" />}
            </Link>
            <Link
              href="/about"
              className={`nav-link ${
                isActive("/about") ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              About
              {isActive("/about") && <span className="nav-indicator" />}
            </Link>
            <Link
              href="/coffees"
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
            ref={toggleRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden mobile-menu-button"
            aria-expanded={mobileMenuOpen}
            aria-controls={menuPanelId}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
            id={menuPanelId}
            className="md:hidden mt-4 bg-white/50 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col space-y-2"
            role="dialog"
            aria-modal="true"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive("/") ? "mobile-nav-link-active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/coffees"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive("/coffees") ? "mobile-nav-link-active" : ""
              }`}
            >
              Our Coffees
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`mobile-nav-link ${
                isActive("/about") ? "mobile-nav-link-active" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/coffees"
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
