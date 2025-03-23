import React from "react";
import MiddlePanel from "./middle-panel";
import RightPanel from "./right-panel";

const Parent = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row w-full pr-4">
      <div className="md:w-3/5">
        <MiddlePanel />
      </div>
      <div className="md:w-2/5">
        <RightPanel />
      </div>
    </div>
  );
};

export default Parent;
