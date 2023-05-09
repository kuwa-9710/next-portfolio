import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import classNames from "classnames";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      if (isScrolled) {
        setIsFixed(isScrolled);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const headerClass = classNames(style.header, {
    [style.fixed]: isFixed,
  });

  const activeClass = classNames(style.button, {
    [style.active]: isActive,
  });

  return (
    <header className={headerClass}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/" className={style.logo_text}>
            AboutMe
          </Link>
        </div>

        <button className={activeClass} onClick={() => setIsActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`fixed top-0 right-0 h-screen w-[300px] bg-slate-800 z-40 transition-transform duration-700 transform ${
            isActive ? "translate-x-0" : "translate-x-[150%]"
          } lg:relative lg:flex lg:items-center lg:w-auto lg:h-auto lg:translate-x-0 lg:bg-transparent`}
          onClick={() => setIsOpen(false)}
        >
          <ul className="flex flex-col ml-4 mt-20 lg:flex-row list-none lg:ml-auto lg:mt-0">
            <li className="nav-item">
              <Link
                href="/"
                className="px-3 py-2 flex items-center text-white font-medium hover:text-sky-400 hover:font-bold"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="px-3 py-2 flex items-center text-white font-medium hover:text-sky-400 hover:font-bold"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="px-3 py-2 flex items-center text-white font-medium hover:text-sky-400 hover:font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
