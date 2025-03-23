import React from "react";
import { DashboardOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="bg-primary h-[3rem] px-7 flex items-center">
      <span className="text-xl text-white font-[500] pr-7 border-r border-white">
        SPARKTG
      </span>

      <div className="text-white pl-7">
        <DashboardOutlined /> Dashboard
      </div>
    </div>
  );
};

export default Navbar;
