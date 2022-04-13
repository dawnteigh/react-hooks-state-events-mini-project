import React from "react";

function Task({ text, category, handleDelete }) {

  function messySolution() {
    handleDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={messySolution} className="delete">X</button>
    </div>
  );
}

export default Task;