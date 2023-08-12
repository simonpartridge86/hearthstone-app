import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  return (
    <header className="flex flex-wrap z-50 w-full bg-white dark:bg-dark1 text-xl font-medium py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={75} height={75} />
          <Link href="/" className="text-2xl font-bold hover:text-blue">
            Hearthstone Card App
          </Link>
        </div>
        <div className="flex items-center gap-5 mt-5 md:justify-end md:mt-0 md:pl-5">
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
