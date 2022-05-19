import { useState } from "react";

const AddNote = ({ handleAdd }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSave = () => {
    if (noteText.length > 0) {
      handleAdd(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new-note">
      <textarea
        rows="7"
        cols="9"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
