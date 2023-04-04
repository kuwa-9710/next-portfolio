import { Card } from "./Card";

export const Skillcards = (props) => {
  return (
    <div className="w-full mx-auto max-w-5xl px-4 flex flex-col md:flex-row gap-8 mt-8">
      <Card />
      <Card />
      <Card />
    </div>
  );
};
