import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div
      className="py-16 w-full bg-gradient-to-br
    from-sky-600 via-blue-700 to-purple-700
    flex items-center justify-center"
    >
      <div
        className="py-16 bg-gray-200/30 backdrop-blur-lg
    rounded-2xl border border-gray-200/30 shadow-lg flex justify-center flex-col items-center gap-8 w-full max-w-lg mx-auto px-4"
      >
        <h2 className="text-center text-white font-bold text-3xl">
          About me
        </h2>
        <Image
          className="rounded-full h-[200px] w-[200px] object-cover"
          alt="Tomoyaのアイコン画像"
          src={`/my_icon.jpg`}
          width={200}
          height={200}
        />
        <p className="text-center text-white text-sm">
          私は仙台に住む、Tomoyaです。
          <br />
          基本的なWebサイトだけでなく、
          <br />
          3Dを使用したサイトの構築も学習しています。
        </p>
        <Link
          href="/"
          className="py-2 px-16 bg-slate-800 text-white rounded-md"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
