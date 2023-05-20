import Link from "next/link";

export const Links = () => {
  return (
    <>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/"}>HOME</Link>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/work"}>WORKS</Link>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/about"}>ABOUT</Link>
      <Link className="text-white active:text-sky-400 hover:text-sky-400" href={"/contact"}>CONTACT</Link>
    </>
  );
};
