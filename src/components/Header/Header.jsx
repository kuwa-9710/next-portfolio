import Link from "next/link";
import styles from "@/components/Header/Header.module.css";

export function Header() {
  return (
    <header className="flex justify-center md:justify-between items-center h-16 px-8">
      <span className="block font-bold text-3xl text-white text-center md:text-start">PortFolio</span>
      <nav className="gap-6 items-center hidden md:flex">
        <Link className="text-white" href="/">
          Home
        </Link>
        <Link className="text-white" href="/about">
          About Me
        </Link>
        <Link className="text-white" href="/news">
          News
        </Link>
        <Link className="text-white" href="/">
          Works
        </Link>
        <Link className="text-white" href="/">
          Contact
        </Link>
      </nav>
    </header>
  );
}
