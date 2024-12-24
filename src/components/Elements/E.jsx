import React, { useState } from "react";
import { FaCode, FaCopy } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const E = ({ data }) => {
  const [showCode, setShowCode] = useState(false);

  const handleToggleCode = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopy = () => {
    // Copy the code string to the clipboard
    navigator.clipboard.writeText(data.code).catch((err) => {
      console.error("Failed to copy code: ", err);
    });
  };

  return (
    <div className="bg-neutral-700 flex justify-center items-center p-4 relative">
      {/* Main content */}
      <div className="relative group md:w-[350px] md:h-[250px] w-[250px] min-h-[200px] rounded-lg flex justify-center items-center border border-neutral-500 p-2">
        {/* Component Preview */}
        <div
          dangerouslySetInnerHTML={{ __html: data.code }}
          className="w-full h-full flex justify-center items-center"
        />

        {/* Get Code Button */}
        <div
          onClick={handleToggleCode}
          className="hover:bg-neutral-950 bg-neutral-800 w-[110px] rounded-lg py-3 text-xl font-bold flex flex-row justify-center items-center absolute top-[92%] translate-x-[-100%] left-[94%] translate-y-[-100%] text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        >
          <FaCode />
          <span className="ml-2">Get Code</span>
        </div>
      </div>

      {/* Popup Modal */}
      {showCode && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-neutral-900 text-white p-6 rounded-lg md:w-[700px] w-[90%] h-[80%] border border-neutral-500 shadow-lg">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute flex items-center top-4 left-8 bg-neutral-700 p-2 rounded-xl text-neutral-400 hover:text-white text-xl font-bold"
            >
              Copy <FaCopy className="ml-2" />
            </button>

            {/* Close Button */}
            <button
              onClick={handleToggleCode}
              className="absolute top-4 right-4 bg-neutral-700 p-2 px-3 rounded-xl text-neutral-400 hover:text-white text-xl font-bold"
            >
              <ImCross />
            </button>

            {/* Code Content */}
            <div className="flex mt-20 justify-center ">
              <pre
                className="overflow-y-scroll w-[80%] h-[500px] break-words p-4 border border-neutral-700 rounded-md bg-neutral-800"
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              >
                <code>{data.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default E;


