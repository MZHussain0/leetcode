import { FC } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import { Problem } from "@/utils/types/problem";

interface WorkspaceProps {
  problem: Problem;
}

const Workspace: FC<WorkspaceProps> = ({ problem }) => {
  return (
    <Split className="split">
      <ProblemDescription problem={problem} />
      <Playground problem={problem} />
    </Split>
  );
};

export default Workspace;
