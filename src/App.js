import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Title from "./components/Title";
import Search from "./components/Search";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("notes-data"));
    if (savedNote !== 0) {
      setNotes(savedNote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (paragraph) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: paragraph,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => id !== note.id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Title />
      <Search handleSearch={setSearchText} />
      <Notes
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAdd={addNote}
        handleDelete={deleteNote}
      />
    </div>
  );
};

export default App;
