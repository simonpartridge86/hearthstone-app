"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type TriggerLoadProps = {
  limit: number;
};

export const TriggerLoad: React.FC<TriggerLoadProps> = ({ limit }) => {
  const router = useRouter();

  const TriggerRef = useCallback(
    (node: any) => {
      if (!node) return;

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            router.push(`/cards?limit=${limit + 20}`, { scroll: false });
            observer.disconnect();
          }
        });
      });
      observer.observe(node);
    },
    [limit]
  );

  return <div ref={TriggerRef}>Trigger Load</div>;
};
