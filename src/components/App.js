import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS)
  const [categoryList, setCategoryList] = useState("All")
  const [filter, setFilter] = useState(taskList)

  function handleFilter(e) {
    setCategoryList(e.target.value)
    if (e.target.value === "All") {
      setFilter(taskList)
    } else {
      let categoryList = taskList.filter(task => task.category === e.target.value)
      setFilter(categoryList)
    }
  }

  function handleDelete(deletedTask) {
    let tempList = taskList.filter(task => task.text !== deletedTask)
    setTaskList(tempList)
    if (categoryList === "All") {
      setFilter(tempList)
    } else {
      let filteredTasks = tempList.filter(task => task.category === categoryList)
      setFilter(filteredTasks)
    }
  }

  function onTaskFormSubmit(newTask) {
    setTaskList([...taskList, newTask])
    if (categoryList === "All") {
      setFilter([...taskList, newTask])
    } else {
      let filteredTasks = [...taskList, newTask].filter(task => task.category === categoryList)
      setFilter(filteredTasks)
    }

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilter={handleFilter} categoryList={categoryList} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList handleDelete={handleDelete} tasks={filter} />
    </div>
  );
}

export default App;