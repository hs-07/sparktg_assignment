import React from "react";

const header = ({ title }) => {
  return (
    <div className="py-2 px-4 flex items-center">
      <span className="font-[600]">{title}</span>
    </div>
  );
};

export default header;
