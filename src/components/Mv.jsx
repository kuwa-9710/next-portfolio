export const Mv = (props) => {
  return (
    <div
      id="mv"
      className="relative w-full h-full min-h-screen flex flex-col justify-center -z-10"
    >
      {props.children}
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center -z-10 bg-[url('/bg.jpg')] bg-cover "></div>
    </div>
  );
};
