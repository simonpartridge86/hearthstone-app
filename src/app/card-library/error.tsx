"use client";

import Link from "next/link";

const Error = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      This is an Error Boundary
      <Link href="/">Home</Link>
    </main>
  );
};

export default Error;
