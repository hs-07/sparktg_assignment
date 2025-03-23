"use client";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios"; // <-- Import axios
import MiddlePanel from "./middle-panel";
import RightPanel from "./right-panel";

const Parent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const onPageChange = (page) => {
    if (page >= 0 && page <= 5) {
      setCurrentPage(page);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.tvmaze.com/shows?page=${currentPage}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex gap-4 flex-col md:flex-row w-full pr-4 h-full">
      <div className="md:w-3/5">
        <MiddlePanel
          data={data}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </div>
      <div className="md:w-2/5">
        <RightPanel />
      </div>
    </div>
  );
};

export default Parent;
