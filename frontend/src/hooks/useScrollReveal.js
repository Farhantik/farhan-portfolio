import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Watches every element with the `.reveal` class and adds `.in-view`
 * once it scrolls into the viewport. Re-scans on every route change
 * since React Router swaps out the DOM under <main>.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in-view)");

    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);
}