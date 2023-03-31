import Image from "next/image";

export const About = () => {
  return (
    <div>
      <h2 className="text-center text-slate-700 font-bold text-3xl">About me</h2>
      <Image alt="Tomoyaのアイコン画像" />
      <p className="text-center text-slate-700">
        私は仙台に住む、Tomoyaです。
        <br />
        基本的なWebサイトだけでなく、3Dを使用したサイトの構築もできます。
      </p>
    </div>
  );
};
