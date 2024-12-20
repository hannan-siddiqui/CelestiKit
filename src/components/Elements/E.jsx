import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { FaCode } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const E = ({ data }) => {
  const [showCode, setShowCode] = useState(false);


  const handleToggleCode = () => {
    setShowCode((prev) => !prev);
  };


  const handleCopy = ()=>{



    const codeString = ReactDOMServer.renderToStaticMarkup(data.code);

    // Copy the string to clipboard silently
    navigator.clipboard.writeText(codeString).catch((err) => {
      console.error("Failed to copy code: ", err);
    });

  }


  return (
    <div className="bg-neutral-700 flex justify-center items-center p-4 relative">
      {/* Main content */}
      <button>
        <div className="relative group md:w-[350px] md:h-[250px] w-[250px] min-h-[200px] rounded-lg flex justify-center items-center border border-neutral-500 p-2">
          {/* Component preview */}
          {data?.code}

          {/* Get Code button */}
          <div
            onClick={handleToggleCode}
            className="hover:bg-neutral-950 bg-neutral-800 w-[110px] rounded-lg py-3 text-xl font-bold flex flex-row justify-center items-center absolute top-[92%] translate-x-[-100%] left-[94%] translate-y-[-100%] text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <div>
              <FaCode/>
            </div>
            <div className="ml-2">Get code</div>
          </div>
        </div>
      </button>

      {/* Popup modal */}
      {showCode && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-neutral-900 text-white p-6 rounded-lg md:w-[700px] w-[90%] h-[80%] overflow-hidden border border-neutral-500 shadow-lg">

            {/* copy button */}
            <button
              onClick={handleCopy}
              className="absolute flex justify-center items-center top-4 left-8 bg-neutral-700 p-2 rounded-xl text-neutral-400 hover:text-white text-3xl font-bold"
            >
               <div>copy</div> <div className="ml-2" ><FaCopy/></div>
            </button>

            <button
              onClick={handleToggleCode}
              className="absolute top-4 right-4 bg-neutral-700 p-2 px-3 rounded-xl text-neutral-400 hover:text-white text-3xl font-bold "

            >
              <ImCross />
            </button>

            {/* Code content */}
            <div className="flex mt-20  justify-center   overflow-y-auto overflow-x-hidden">
              <pre
                className="w-[80%] break-words p-4 border border-red-100 rounded-md"
                style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              >
                <code>{ReactDOMServer.renderToStaticMarkup(data.code)}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default E;
