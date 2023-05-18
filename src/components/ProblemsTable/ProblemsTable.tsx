import { problems } from "@/mockProblems/problems";
import Link from "next/link";
import { FC } from "react";

import { AiFillYoutube } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

interface ProblemsTableProps {}

const ProblemsTable: FC<ProblemsTableProps> = ({}) => {
  return (
    <tbody className="text-white">
      {problems.map((problem, idx) => {
        const difficultyColor =
          problem.difficulty === "Easy"
            ? "text-dark-green-s"
            : problem.difficulty === "Medium"
            ? "text-dark-yellow"
            : "text-dark-pink";
        return (
          <tr
            key={problem.id}
            className={`${idx % 2 === 0 ? "bg-dark-layer-1" : ""}`}>
            <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
              <BsCheckCircle fontSize={"18"} width="18" />
            </th>
            <td className="px-6 py-4">
              <Link
                className="hover:text-blue-600 cursor-pointer"
                href={`/problems/${problem.id}`}>
                {problem.title}
              </Link>
            </td>

            <td className={`px-6 py-4 text-center ${difficultyColor}`}>
              {problem.difficulty}
            </td>

            <td className={`px-6 py-4 text-center `}>{problem.category}</td>

            <td className={`px-6 py-4  `}>
              {problem.videoId ? (
                <AiFillYoutube
                  fontSize={"28"}
                  className="cursor-pointer hover:text-pink-600"
                />
              ) : (
                <p className="text-gray-400">coming soon</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default ProblemsTable;
