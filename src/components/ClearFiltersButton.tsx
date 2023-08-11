"use client";

import { useRouter } from "next/navigation";

type ClearFiltersButtonProps = {
  resetForm: () => void;
};

export const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({
  resetForm,
}) => {
  const router = useRouter();

  const handleClick = () => {
    resetForm();
    router.replace(`/card-search?page=1`);
  };

  return <button onClick={handleClick}>Clear Filters</button>;
};
