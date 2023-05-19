import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { FC } from "react";

interface problemPageProps {}

const problemPage: FC<problemPageProps> = ({}) => {
  return (
    <div>
      <Topbar problemPage />
      <Workspace />
    </div>
  );
};

export default problemPage;
