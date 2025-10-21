import React from "react";

interface AnnoLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  isDarkBackground?: boolean; // 👈 new prop to tell if background is dark
}

export function AnnoLogo({
  className = "",
  size = "md",
  isDarkBackground = false,
}: AnnoLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  // Pick correct logo based on background brightness
  const logoSrc = isDarkBackground
    ? "assets/img/Secondary Logo.png"
    : "assets/img/Primary Logo.png";

  return (
    <img
      src={logoSrc}
      alt="Anno Coffee Logo"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
}
