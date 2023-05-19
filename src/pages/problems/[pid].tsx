import Topbar from "@/components/Topbar/Topbar";
import { FC } from "react";

interface problemPageProps {}

const problemPage: FC<problemPageProps> = ({}) => {
  return (
    <div>
      <Topbar problemPage />
    </div>
  );
};

export default problemPage;
