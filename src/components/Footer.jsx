import Link from "next/link";
import { Links } from "./Links";

export function Footer() {
  return (
    <>
      <footer className="mt-32 flex justify-center py-12 border-t-1 flex-col bg-slate-800">
        <Link href={"/"} className="text-center"><span className="text-center text-3xl font-bold text-white">Portfolio</span></Link>
        <nav className="text-center mt-4">
          <ul className="flex flex-col gap-6">
            <Links />
          </ul>
        </nav>
        <small className="text-white text-center mt-4">
          2023 Tomoya all rights reserved.
        </small>
      </footer>
    </>
  );
}
