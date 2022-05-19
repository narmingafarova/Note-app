import { FaTrashAlt } from "react-icons/fa";

const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrashAlt className="delete" onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
};

export default Note;
