export const Title = (props) => {
  return (
    <h2 className="text-4xl md:5xl lg:text-6xl font-bold text-white drop-shadow-md mt-8 md:mt-16 leading-[150%] md:leading-[150%]">
      {props.title}
    </h2>
  );
};
