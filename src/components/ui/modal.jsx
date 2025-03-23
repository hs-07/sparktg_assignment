import React from "react";
import { Modal } from "antd";
import Link from "next/link";
import { LinkOutlined } from "@ant-design/icons";

const App = ({ isModalOpen, setIsModalOpen, info }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="More Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="pt-2">
          <div className="text-black flex gap-4">
            <img
              src={info?.src}
              alt={"show-display"}
              className="w-20 h-full"
              width={30}
              height={30}
            />
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold">{info?.name}</span>

              <div className="flex flex-row gap-4">
                <label className="font-semibold px-2 rounded-full bg-gray-100 text-gray-500 h-fit">
                  Schedule:
                </label>
                <div className="flex flex-col">
                  <span className="">Time : {info?.schedule?.time}</span>
                  <span className="">
                    Days : {info?.schedule?.days.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <label className="font-semibold px-2 rounded-full bg-gray-100 text-gray-500 h-fit">
                  Network:
                </label>
                <Link
                  className="flex gap-2 font-semibold"
                  href={
                    info?.network?.officialSite === null
                      ? "/"
                      : info?.network?.officialSite
                  }
                  target="_blank"
                >
                  {info?.network?.name}
                  <LinkOutlined />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: info?.summary }}
          />
        </div>
      </Modal>
    </>
  );
};

export default App;
