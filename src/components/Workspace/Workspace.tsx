import { FC, useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import { Problem } from "@/utils/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

interface WorkspaceProps {
  problem: Problem;
}

const Workspace: FC<WorkspaceProps> = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  return (
    <Split className="split">
      <ProblemDescription problem={problem} _solved={solved} />
      <div className="bg-dark-layer-2">
        <Playground
          problem={problem}
          setSuccess={setSuccess}
          setSolved={setSolved}
        />
        {success && (
          <Confetti
            gravity={0.3}
            tweenDuration={4000}
            width={width - 1}
            height={height - 1}
          />
        )}
      </div>
    </Split>
  );
};

export default Workspace;
