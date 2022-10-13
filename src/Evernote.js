import Note from "./Components/Note";
import NoteList from "./Components/NoteList";
import Sidebar from "./Components/Sidebar";
import "./Evernote.css";

function Evernote() {
  return (
    <div className="Evernote h-screen flex items-center">
      <Sidebar />
      <NoteList />
      <Note />
    </div>
  );
}

export default Evernote;
