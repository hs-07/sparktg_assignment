import React from "react";
import { Header, Table, Pagination } from "@/components/ui";

const MiddlePanel = ({ currentPage, onPageChange, data }) => {
  return (
    <div className="flex relative flex-col w-full bg-white h-[calc(100vh-3rem)] overflow-y-hidden">
      <Header title={"User Contact"} />

      <div className="h-full w-full mb-12">
        <Table data={data} />
      </div>

      <div className="absolute bottom-0 fixed shadow-pagination_shadow left-0 py-2 bg-white w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default MiddlePanel;
