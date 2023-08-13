import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const Navigation = () => {
  return (
    <header className="fixed z-50 flex w-full flex-wrap bg-white py-6 text-2xl font-medium drop-shadow-md dark:bg-dark2">
      <nav
        className="mx-auto flex w-full max-w-[85rem] flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0"
        aria-label="Global"
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={75} height={75} />
          <Link href="/" className="text-3xl font-bold hover:text-blue">
            Hearthstone Card App
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/all-cards" className="font-medium hover:text-blue">
            All Cards
          </Link>
          <Link href="/card-search" className="font-medium hover:text-blue">
            Card Search
          </Link>
          <Link href="/favourites" className="font-medium hover:text-blue">
            Favourites
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
