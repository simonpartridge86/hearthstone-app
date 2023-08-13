"use client";

import { useRouter } from "next/navigation";
import BasicButton from "./BasicButton";

export const BackButton = () => {
  const router = useRouter();

  return <BasicButton onClick={() => router.back()} text="Go Back" />;
};
