export const Card = (props) => (
  <div className="bg-blue-400/20 backdrop-blur-lg rounded-2xl border flex flex-col justify-center border-blue-200/30 shadow-lg w-full lg:w-[30%] gap-4 p-4">
    <div className="flex flex-row items-center gap-4">
      {props.icon}
      <span className={props.titleClass}>{props.title}</span>
    </div>
    <p className="text-lg leading-[150%] text-slate-200">{props.description}</p>
  </div>
);
