import Link from "next/link";
import styles from "@/components/Header/Header.module.css";

export function Header() {
  return (
    <header className="absolute z-50 w-full flex justify-center md:justify-between items-center h-16 px-8">
      <span className="block font-bold text-3xl text-white">PortFolio</span>
      <nav className="gap-6 items-center hidden md:flex">
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/">
          HOME
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/about">
          ABOUT
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/news">
          NEWS
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/">
          WORKS
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
