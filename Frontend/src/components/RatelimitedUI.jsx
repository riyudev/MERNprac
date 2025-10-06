import React from "react";
import { FiZap } from "react-icons/fi";

function RatelimitedUI() {
  return (
    <div className="max-w-6xl p-5 w-full bg-green-800/40 rounded-md shadow-lg mb-4 border-[1px] flex items-center space-x-5">
      <div className="p-3 bg-green-600/20 rounded-full">
        <FiZap className="text-5xl text-green-400" />
      </div>
      <div className="space-y-2">
        <h5 className="font-bold">Rate Limit Reached</h5>
        <blockquote>
          <p className="">
            You've made too many requests in a short period. Please wait a
            moment.
          </p>
          <p className="text-sm italic text-white/50">
            Try again in a few seconds for the best experience.
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default RatelimitedUI;
