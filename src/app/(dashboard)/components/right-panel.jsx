import React, { useState, useEffect } from "react";
import { Header } from "@/components/ui";

const RightPanel = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    language: "",
    status: "",
    genres: [],
    officialSite: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        type: data.type || "",
        language: data.language || "",
        status: data.status || "",
        genres: data.genres || [],
        officialSite: data.officialSite || "",
      });
    }
  }, [data]);

  const handleChange = (e, field) => {
    if (field === "genres") {
      // Convert comma-separated string to array for genres
      const genresArray = e.target.value
        .split(",")
        .map((genre) => genre.trim());
      setFormData({
        ...formData,
        genres: genresArray,
      });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    console.log("Saving updated data:", formData);
  };

  const handleDelete = () => {
    setData({});
  };

  const handleCancel = () => {
    setData({});
  };

  return (
    <div className="w-full bg-white h-[calc(100vh-3rem)] relative">
      <Header title={"Edit User Contact"} />
      <div className="flex justify-end px-4 pb-4">
        <button
          className="px-8 py-1 bg-primary rounded-md text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div className="flex gap-4 px-4">
        <div className="grid grid-cols-1 gap-4">
          <label htmlFor="name">Name</label>
          <label htmlFor="type">Type</label>
          <label htmlFor="language">Language</label>
          <label htmlFor="status">Status</label>
          <label htmlFor="genres">Genres</label>
          <label htmlFor="officialSite">Official Site</label>
        </div>
        <div className="grid grid-cols-1 gap-4 flex-1">
          <input
            id="name"
            type="text"
            className="border border-gray-400 text-black rounded-md py-1 px-2"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <input
            id="type"
            type="text"
            className="border border-gray-400 text-black rounded-md py-1 px-2"
            value={formData.type}
            onChange={(e) => handleChange(e, "type")}
          />
          <input
            id="language"
            type="text"
            className="border border-gray-400 text-black rounded-md py-1 px-2"
            value={formData.language}
            onChange={(e) => handleChange(e, "language")}
          />
          <input
            id="status"
            type="text"
            className="border border-gray-400 text-black rounded-md py-1 px-2"
            value={formData.status}
            onChange={(e) => handleChange(e, "status")}
          />
          <input
            id="genres"
            type="text"
            className="border border-gray-400 text-black rounded-md py-1 px-2"
            value={formData.genres.join(", ")}
            onChange={(e) => handleChange(e, "genres")}
          />
          <input
            id="officialSite"
            type="text"
            className="border border-gray-400 text-black rounded-md py-1 px-2"
            value={formData.officialSite}
            onChange={(e) => handleChange(e, "officialSite")}
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex gap-2">
        <button
          className="px-8 py-1 bg-primary rounded-md text-white "
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="px-8 py-1 text-primary rounded-md hover:bg-gray-200"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
