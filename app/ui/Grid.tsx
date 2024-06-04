import GridItem from "./GridItem";
import { Clip } from "../lib/types";

type GridProps = {
  clips: Clip[];
};

export default function Grid({ clips }: GridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
      {clips.map((clip) => (
        <GridItem key={clip.name} {...clip} />
      ))}
    </div>
  );
}
