import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  let [textState, setTextState] = useState("")
  let [catState, setCatState] = useState("Code")

  function handleTextState(e) {
    setTextState(e.target.value)
  }

  function handleCatState(e) {
    setCatState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({
      text: textState,
      category: catState
    })
  }

  let catDropdown = categories.filter(category => category !== "All")

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextState} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCatState} name="category">
          {catDropdown.map(category =>
          (<option
            value={category}
            key={category}>
            {category}
          </option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

