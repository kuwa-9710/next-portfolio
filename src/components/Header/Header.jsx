import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full max-w-screen-2xl flex flex-wrap items-center justify-between px-4 py-4 mx-auto bg-transparent">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          AboutMe
        </Link>
      </div>

      <button
        className="block lg:hidden cursor-pointer focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`w-6 h-6 fill-current ${
            isOpen ? "text-white" : "text-white"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.585 3.585a1 1 0 0 1 1.414 0L10 8.586l4.243-4.243a1 1 0 1 1 1.414 1.414L11.414 10l4.243 4.243a1 1 0 1 1-1.414 1.414L10 11.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L8.586 10 4.343 5.757a1 1 0 0 1 0-1.414z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4.5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3z"
            />
          )}
        </svg>
      </button>

      <nav
        className={`fixed top-0 right-0 h-screen w-[300px] bg-slate-800 z-40 transition-transform duration-700 transform ${
          isOpen ? "translate-x-0" : "translate-x-[150%]"
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
    </header>
  );
}
