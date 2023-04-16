export const Mv = (props) => {
  return (
    <div
      id="mv"
      className="relative w-full h-full min-h-screen flex flex-col justify-center -z-10 bg-[url('/bg.jpg')] bg-cover "
    >
      {props.children}
    </div>
  );
};
