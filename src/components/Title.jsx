export const Title = (props) => {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-4 md:mt-8 leading-[150%] md:leading-[150%]">
      {props.title}
    </h2>
  );
};
