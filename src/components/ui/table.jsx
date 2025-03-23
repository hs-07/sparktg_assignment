"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LinkOutlined, SearchOutlined, EditOutlined } from "@ant-design/icons";

const Table = ({ data, setOpenModal, setInfo, setEditData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredData = data?.filter((item) => {
    if (searchTerm === "") return true;

    const searchTermLower = searchTerm.toLowerCase();

    // Search in all relevant fields
    return (
      item.name?.toLowerCase().includes(searchTermLower) ||
      item.type?.toLowerCase().includes(searchTermLower) ||
      item.language?.toLowerCase().includes(searchTermLower) ||
      item.status?.toLowerCase().includes(searchTermLower) ||
      item.genres?.some((genre) =>
        genre.toLowerCase().includes(searchTermLower)
      ) ||
      (item.officialSite &&
        item.officialSite.toLowerCase().includes(searchTermLower))
    );
  });

  const handleSetInfo = (name, src, summary, schedule, network) => {
    const info = {
      name: name,
      src: src,
      summary: summary,
      schedule: schedule,
      network: network,
    };

    setInfo(info);
    setOpenModal(true);
  };
  const handleSetEditInfo = (
    name,
    type,
    language,
    status,
    genres,
    officialSite
  ) => {
    const info = {
      name: name,
      type: type,
      language: language,
      status: status,
      genres: genres,
      officialSite: officialSite,
    };

    setEditData(info);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-hidden h-full relative pb-[180px] overflow-x-auto min-w-[900px]">
        {/* HEADINGS */}
        <div className="grid grid-cols-9 place-items-center bg-primary text-white font-[500] p-2 w-full absolute sticky top-0 left-0">
          <div className="">Edit</div>
          <div className="">Name</div>
          <div className="">Type</div>
          <div className="">Language</div>
          <div className="">Status</div>
          <div className="col-span-2">Genres</div>
          <div className="">Official Site</div>
          <div className="">Action</div>
        </div>
        {/* Search Bar */}
        <div className="px-4 py-2 bg-gray-50 border-b">
          <div className="relative max-w-sm ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchOutlined className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, type, language, status, genres..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-[2px] overflow-y-auto h-full divide-y divide-gray-200">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                className="grid hover:bg-gray-100  grid-cols-9 gap-2 text-gray-500 place-items-center font-[500] p-2 w-full"
                key={index}
              >
                <div
                  className="flex gap-2 cursor-pointer hover:text-primary"
                  onClick={() =>
                    handleSetEditInfo(
                      item.name,
                      item.type,
                      item.language,
                      item.status,
                      item.genres,
                      item.officialSite
                    )
                  }
                >
                  Edit <EditOutlined />
                </div>
                <div className="text-center">{item.name}</div>
                <div className="">{item.type}</div>
                <div className="">{item.language}</div>
                <div className="">{item.status}</div>
                <div className="text-center col-span-2">
                  <span>{item.genres.join(", ")}</span>
                </div>
                <div className="">
                  <Link
                    href={item?.officialSite === null ? "" : item.officialSite}
                    target="_blank"
                  >
                    Link <LinkOutlined />
                  </Link>
                </div>
                <div
                  className="cursor-pointer hover:text-primary"
                  onClick={() =>
                    handleSetInfo(
                      item.name,
                      item.image.original,
                      item.summary,
                      item.schedule,
                      item.network
                    )
                  }
                >
                  Show Details
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center p-6 text-gray-500">
              No results found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
