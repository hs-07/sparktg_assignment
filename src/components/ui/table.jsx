import React from "react";

const Table = () => {
  return (
    <div>
      {/* HEADINGS */}
      <div className="grid grid-cols-7 place-items-center bg-primary text-white font-[500] p-2 w-full">
        <div className="">Name</div>
        <div className="">Type</div>
        <div className="">Language</div>
        <div className="">Status</div>
        <div className="col-span-2">Genres</div>
        <div className="">Official Site</div>
      </div>
    </div>
  );
};

export default Table;
