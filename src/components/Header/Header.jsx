import Link from "next/link";

export function Header() {
  return (
    <header className="absolute z-50 w-full flex justify-start md:justify-between items-center h-16 px-4 md:px-8">
      <span className="block text-3xl text-white">AboutMe</span>
      <nav className="gap-6 items-center hidden md:flex">
        <Link
          className="text-white active:text-sky-400 hover:text-sky-400 text-sm"
          href="/"
        >
          HOME
        </Link>
        <Link
          className="text-gray-300 active:text-sky-400 hover:text-sky-400 text-sm"
          href="/about"
        >
          ABOUT
        </Link>
        <Link
          className="text-gray-300 active:text-sky-400 hover:text-sky-400 text-sm"
          href="/news"
        >
          NEWS
        </Link>
        <Link
          className="text-gray-300 active:text-sky-400 hover:text-sky-400 text-sm"
          href="/"
        >
          WORKS
        </Link>
        <Link
          className="text-gray-300 active:text-sky-400 hover:text-sky-400 text-sm"
          href="/"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
