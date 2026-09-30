"use client";

import { useState, useEffect, useRef } from "react";

export default function useOnScreen<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return { isVisible, ref };
}
