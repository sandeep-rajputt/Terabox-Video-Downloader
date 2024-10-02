import React from "react";
import { FiDownload } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex w-full items-center justify-center">
          <FiDownload className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold">TeraBox Video Downloader</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
