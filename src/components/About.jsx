import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div
      className="py-16 w-full bg-gradient-to-br
    from-sky-600 via-blue-700 to-purple-700
    flex items-center justify-center rounded-2xl max-w-5xl mx-auto my-4"
    >
      <div
        className="py-16 bg-gray-200/30 backdrop-blur-lg
    rounded-2xl border border-gray-200/30 shadow-lg flex justify-center flex-col items-center gap-8 w-full max-w-lg mx-4 px-4"
      >
        <h2 className="text-center text-white font-bold text-6xl">About me</h2>
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
        <a
          href="https://github.com/kuwa-9710"
          className="flex items-center w-full max-w-xs justify-center gap-4 py-4 px-12 
          bg-slate-800 text-white rounded-lg active:bg-sky-500 hover:bg-sky-400
          transition-all before:content-[url('/github.svg')] before:w-[30px] before:h-[30px]"
          target="_blank"
        >
          View it on Github
        </a>
      </div>
    </div>
  );
};