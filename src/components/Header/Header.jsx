import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center h-16 border-b-2 px-8">
      <span className="block font-bold text-3xl text-slate-700">PortFolio</span>
      <nav className="flex gap-6 items-center">
        <Link className="text-slate-500" href="/">About Me</Link>
        <Link className="text-slate-500" href="/">News</Link>
        <Link className="text-slate-500" href="/">Works</Link>
        <Link className="text-slate-500" href="/">Contact</Link>
      </nav>
    </header>
  );
}
