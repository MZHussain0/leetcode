import { FC } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter/EditorFooter";

interface PlaygroundProps {}

const Playground: FC<PlaygroundProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col bg-dark-layer-1 relative">
        <PreferenceNav />

        <Split
          className="h-[calc(100vh-94px)]"
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}>
          <div className="w-full overflow-auto">
            <CodeMirror
              value="const a = 1;"
              theme={vscodeDark}
              extensions={[javascript()]}
              style={{ fontSize: 18 }}
            />
          </div>
          <div className="w-full px-5 overflow-auto">
            {/* Test case heading */}
            <div className="flex h-10 items-center space-x-6">
              <div className="relative flex h-full flex-col justify-center cursor-pointer">
                <div className="text-sm font-medium leading-5 text-white">
                  TestCases
                </div>
                <hr className="absolute bottom-0  h-0.5 w-full rounded-full border-none bg-white" />
              </div>
            </div>

            <div className="flex">
              {/* test case 1 */}
              <div className="items-start mr-2 mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case 1
                  </div>
                </div>
              </div>
              {/* Test case 2  */}
              <div className="items-start mr-2 mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case 2
                  </div>
                </div>
              </div>
              {/* Test case 3  */}
              <div className="items-start mr-2 mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case 3
                  </div>
                </div>
              </div>
            </div>

            <div className="font-semibold my-4">
              <p className="text-sm font-medium mt-4 text-white">Input: </p>
              <div className="w-full cursor-text rounded-lg px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                nums: [5,7,11,15,19], target: 9
              </div>

              <p className="text-sm font-medium mt-4 text-white">Output: </p>
              <div className="w-full cursor-text rounded-lg px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                [0,1]
              </div>
            </div>
          </div>
        </Split>
        <EditorFooter />
      </div>
    </>
  );
};

export default Playground;
