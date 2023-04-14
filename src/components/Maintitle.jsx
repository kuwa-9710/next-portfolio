export const Maintitle = () => {
  return (
    <div className="w-full max-w-5xl px-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <span className="text-slate-500 text-lg md:text-4xl">
        Hi! my name is ...
      </span>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-md mt-4">
        Tomoya Kuwashima
      </h1>
      <p className="text-lg md:text-4xl font-bold text-slate-500 drop-shadow-sm mt-4">
        Web Developer in Sendai.
      </p>
      <a
        href="https://github.com/kuwa-9710"
        className="mt-6 flex items-center w-full max-w-xs justify-center gap-4 py-4 px-12 
          bg-slate-800 text-white rounded-lg active:bg-sky-500 hover:bg-sky-400
          transition-all before:content-[url('/github.svg')] before:w-[30px] before:h-[30px]"
        target="_blank"
      >
        View it on Github
      </a>
    </div>
  );
};
