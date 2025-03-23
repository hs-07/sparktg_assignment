import React from "react";
import { Header, Table } from "@/components/ui";

const MiddlePanel = () => {
  return (
    <div className="flex flex-col w-full bg-white h-[cal(100vh-3rem)]">
      <Header title={"User Contact"} />

      <div className="">
        <Table />
      </div>
    </div>
  );
};

export default MiddlePanel;
