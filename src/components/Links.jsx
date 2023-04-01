import Link from "next/link";

export const Links = () => {
  return (
    <>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/about"}>ABOUT</Link>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/news"}>NEWS</Link>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/works"}>WORKS</Link>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/contact"}>CONTACT</Link>
    </>
  );
};
