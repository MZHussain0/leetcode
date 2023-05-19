import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import { log } from "console";
import { FC } from "react";

interface problemPageProps {
  problem: Problem;
}

const problemPage: FC<problemPageProps> = ({ problem }) => {
  console.log(problem);

  return (
    <div>
      <Topbar problemPage />
      <Workspace problem={problem} />
    </div>
  );
};

export default problemPage;

// fetvh the local data
// SSG
// getStaticPaths => it creates the dynamic routes

export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

// getStaticProps => it fetches the data
export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }
  problem.handlerFunction = problem.handlerFunction.toString();
  return {
    props: {
      problem,
    },
  };
}
