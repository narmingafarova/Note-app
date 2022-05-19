import Note from "./Note";
import AddNote from "./AddNote";

const Notes = ({ notes, handleAdd, handleDelete }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDelete={handleDelete}
        />
      ))}
      <AddNote handleAdd={handleAdd} />
    </div>
  );
};

export default Notes;
