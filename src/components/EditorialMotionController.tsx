import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const REVEAL_SELECTOR = "[data-reveal]";

export const EditorialMotionController = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const frame = window.requestAnimationFrame(() => {
      const root = document.querySelector<HTMLElement>(".link-editorial");
      if (!root) return;

      const items = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      if (!items.length) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || !("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("is-visible"));
        return;
      }

      const visibleLimit = window.innerHeight * 0.92;
      items.forEach((item) => {
        const delay = Number(item.dataset.revealDelay || 0);
        item.style.setProperty("--reveal-delay", `${Math.min(delay, 320)}ms`);
        if (item.getBoundingClientRect().top <= visibleLimit) item.classList.add("is-visible");
      });

      root.classList.add("motion-enhanced");
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

      items.forEach((item) => {
        if (!item.classList.contains("is-visible")) observer?.observe(item);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
};
