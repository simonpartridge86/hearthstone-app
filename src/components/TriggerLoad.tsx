"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
type TriggerLoadProps = {
  page: number;
};

export const TriggerLoad: React.FC<TriggerLoadProps> = ({ page }) => {
  const router = useRouter();

  const triggerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          router.replace(`/all-cards?page=${page + 1}`, {
            scroll: false,
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [router, page]);

  return (
    <div
      ref={triggerRef}
      className="flex w-full items-center justify-center gap-x-4"
    >
      <span className="loading loading-spinner loading-lg text-green"></span>
    </div>
  );
};
