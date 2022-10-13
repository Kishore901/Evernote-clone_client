import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col bg-[#1a1a1a] w-1/6 h-full text-[#ccc]">
      <div className="sidebar-top flex-1 p-4">
        <div className="profile flex justify-center items-center w-full">
          <img
            className="rounded-full"
            src="https://img.icons8.com/fluency/48/000000/user-male-circle.png"
            alt="user-icon"
          />
          <div className="w-3/4 ml-2">Kishore Singh</div>
        </div>
        <div className="search mt-4">
          <div className="flex justify-center items-center bg-[#404040] rounded-full p-2">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
              alt="search-icon"
              className="w-8"
            />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-[#fff] bg-none ml-2 border-none bg-inherit"
            />
          </div>
        </div>
        <div className="add mt-2">
          <div className="flex items-center rounded-full p-2 bg-green-500 text-[#fff]">
            <img
              src="https://img.icons8.com/android/24/FFFFFF/plus.png"
              alt="plus-icon"
              className="w-6 mr-4"
            />
            <div>New Note</div>
          </div>
        </div>
        <div className="sidelist mt-6">
          <ul>
            <li className="p-4 hover:bg-[#404040] hover:rounded-full cursor-pointer active:bg-[#7c7c7c]">
              <span>
                <img
                  className="inline-block mr-2"
                  src="https://img.icons8.com/external-dashed-line-kawalan-studio/24/FFFFFF/external-notes-education-dashed-line-kawalan-studio.png"
                  alt="notes"
                />
                All Notes
              </span>
            </li>
            <li className="p-4 hover:bg-[#404040] hover:rounded-full cursor-pointer active:bg-[#7c7c7c]">
              <span>
                <img
                  className="inline-block mr-2"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/trash--v1.png"
                  alt="notes"
                />
                Trash
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
