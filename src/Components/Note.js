import React from "react";

const Note = () => {
  return (
    <div className="note-body h-full w-3/6">
      <div className="note-body_header flex justify-between py-4 px-8 items-end border-b-2 border-gray-400">
        <div>Last edited 1 minute(s) ago</div>
        <div className="flex items-center px-4 py-2 rounded-full cursor-pointer hover:bg-gray-400 active:bg-gray-400 bg-gray-300">
          <div>
            <img
              src="https://img.icons8.com/pastel-glyph/64/1A1A1A/archive--v4.png"
              alt="archive-icon"
              className="w-6 mr-2"
            />
          </div>
          <div>Archive</div>
        </div>
      </div>
      <div className="nte-body_content p-6">
        <div className="title-div">
          <input
            type="text"
            placeholder="Title"
            className="p-3 border-none outline-none w-full text-3xl"
          />
        </div>
        <div className="body-div">
          <textarea
            placeholder="Enter description here"
            className="p-3 border-none outline-none w-full text-xl resize-y"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Note;
