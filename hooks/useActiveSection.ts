"use client";
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections: { id: string; ratio: number }[] = [];

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              visibleSections.push({ id, ratio: entry.intersectionRatio });
            }
          }
        });

        if (visibleSections.length > 0) {
          // Pick the section with the highest visibility ratio
          const mostVisible = visibleSections.reduce((max, curr) =>
            curr.ratio > max.ratio ? curr : max
          );
          setActiveSection(mostVisible.id);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained
        rootMargin: "-10% 0px -70% 0px", // Top and bottom margin tweaks
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
