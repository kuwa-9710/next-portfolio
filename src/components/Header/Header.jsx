import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./Header.module.scss";
import classNames from "classnames";
import Image from "next/image";

export function Header() {
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

  const navClass = classNames(style.nav, {
    [style.active]: isActive,
  });

  return (
    <header className={headerClass}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/" className={style.logo_text}>
            <Image
              className={style.logo_image}
              src={"/next_logo.png"}
              height={100}
              width={100}
              alt="ロゴ"
            />
            <span>AboutMe</span>
          </Link>
        </div>

        <button className={activeClass} onClick={() => setIsActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={navClass} onClick={() => setIsActive(!isActive)}>
          <ul className={style.nav_list}>
            <li className={style.nav_title}>menu</li>
            <li className={style.nav_item}>
              <Link href="/">Home</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/work">Works</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/about">About</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
