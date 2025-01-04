"use client";

import { useState, useCallback } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    const sections = ["home", "projects", "contact", "links"];

    // Find the section that's most in view
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (!element) return false;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section takes up most of the viewport
      return rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
    });

    if (current) {
      setActiveSection(current);
    }
  }, []);

  return { activeSection, handleScroll };
}
