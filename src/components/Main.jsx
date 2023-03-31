import Image from "next/image";

export function Main(props) {
  return (
    <main className="min-h-[730px] h-full w-screen">
      {props.children}
      <Image
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        src={`/bg.jpg`}
        alt="background image"
        width={1000}
        height={1000}
      />
    </main>
  );
}
