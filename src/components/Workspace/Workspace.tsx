import { FC } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";

interface WorkspaceProps {}

const Workspace: FC<WorkspaceProps> = ({}) => {
  return (
    <Split className="split">
      <ProblemDescription />
      <Playground />
    </Split>
  );
};

export default Workspace;
