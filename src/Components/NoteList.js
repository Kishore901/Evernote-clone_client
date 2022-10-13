import React from "react";

const NoteList = () => {
  return (
    <div className="note-list h-full w-2/6 bg-gray-200 flex flex-col">
      <div className="note-list-header p-4 flex flex-col border-b-2 border-black">
        <div className="text-3xl font-semibold order-1 mt-4 mb-6">
          <div>All notes</div>
        </div>
        <div className="order-2 text-xl">
          <div>2 Notes</div>
        </div>
      </div>
      <div className="note-list-items flex flex-col border-b-2 border-gray-400 divide-y-2 divide-gray-400 overflow-y-auto">
        {/* List of notes card */}

        <div className="note-list-card cursor-pointer p-6 hover:bg-gray-300 active:bg-gray-300">
          <div className="mb-4">
            <div className="text-xl font-semibold overflow-hidden truncate mb-4">
              Title
            </div>
            <div className="overflow-hidden truncate">Some Desc</div>
          </div>
          <div>
            <div>Date</div>
          </div>
        </div>

        <div className="note-list-card cursor-pointer p-6 hover:bg-gray-300 active:bg-gray-300">
          <div className="mb-4">
            <div className="text-xl font-semibold overflow-hidden truncate mb-4">
              Title
            </div>
            <div className="overflow-hidden truncate">Some Desc</div>
          </div>
          <div>
            <div>Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteList;
