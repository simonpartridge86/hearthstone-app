"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
type TriggerLoadProps = {
  limit: number;
};

export const TriggerLoad: React.FC<TriggerLoadProps> = ({ limit }) => {
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
          setTimeout(() => {
            router.replace(`/all-cards?limit=${limit + 50}`, {
              scroll: false,
            });
          }, 1000);
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
  }, [router, limit]);

  return (
    <div
      ref={triggerRef}
      className="flex justify-center items-center w-full gap-x-4"
    >
      <span className="loading loading-spinner text-green"></span>
    </div>
  );
};
