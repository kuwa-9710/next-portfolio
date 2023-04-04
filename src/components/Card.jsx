import Image from "next/image";

export const Card = () => {
  return (
    <>
      <div className="bg-gray-200/30 backdrop-blur-lgrounded-2xl border border-gray-200/30 shadow-lg w-80 flex flex-col items-center justify-center gap-4">
        <Image alt="card thumbnail" />
        <span className="font-bold text-2xl">Card Title</span>
        <p className="text-lg leading-[150%]">Description</p>
      </div>
    </>
  );
};
