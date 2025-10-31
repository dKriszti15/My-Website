"use client";
import { ThemeContext } from "@/contexts/theme/ThemeContext";
import { useContext } from "react";

export default function PatternBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen w-full relative bg-background">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "var(--background)",
          backgroundImage: isDark
            ? `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)`
            : `radial-gradient(circle, rgba(54, 54, 54, 0.48) 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
