import { Subtitle } from "./Subtitle";
import { Title } from "./Title";
import { WorksContent } from "./WorksContent";

export const Works = ({ works }) => {  
  return (
    <div className="w-full mx-auto max-w-5xl px-4 mt-32 md:mt-56">
      <Subtitle title="My Works" />
      <Title title="美しく、使いやすく、効果的になるよう心掛けています" />
      <WorksContent works={works} />
    </div>
  );
};
