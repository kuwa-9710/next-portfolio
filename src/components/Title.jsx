export const Title = (props) => {
  return (
    <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md mt-6 leading-[150%] md:leading-[150%]">
      {props.title}
    </h2>
  );
};
