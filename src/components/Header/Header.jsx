import Link from "next/link";
import styles from "@/components/Header/Header.module.css";

export function Header() {
  return (
    <header className="absolute w-full flex justify-center md:justify-between items-center h-16 px-8">
      <span className="block font-bold text-3xl text-white">PortFolio</span>
      <nav className="gap-6 items-center hidden md:flex">
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/">
          Home
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/about">
          About Me
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/news">
          News
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/">
          Works
        </Link>
        <Link className="text-white active:text-sky-400 hover:text-sky-400" href="/">
          Contact
        </Link>
      </nav>
    </header>
  );
}
