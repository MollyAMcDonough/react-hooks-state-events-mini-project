import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [button, setButton] = useState("All");
  const [tasks, setTasks] = useState(TASKS)

  function handleButtonClick(category) {
    //console.log(`I was clicked on ${category}`)
    setButton(category);
  }
  /* I like this version of my code better, but there's a test for what is passed to the onTaskFormSubmit and it must be a specifically formated task object. Seems unnessarily restrictive to possible solutions to me but maybe there's something I'm missing about react implementation.
  function handleTaskListUpdate(type, text, category) {
    if (type==="DELETE") {
      console.log("pass new array without passed task to setTasks")
      const updatedTasks = tasks.filter((task) => task.text !== text)
      setTasks(updatedTasks);
    } else {
      console.log("pass new array with passed task added to setTasks")
      setTasks([...tasks, {text: text, category: category}]);
    }
  }
  */

  function onDelete(text) {
    const updatedTasks = tasks.filter((task) => task.text !== text)
    setTasks(updatedTasks);
  }

  function onTaskFormSubmit(taskObj) {
    setTasks([...tasks, taskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selected={button} handleButtonClick={handleButtonClick} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} category={button} onDelete={onDelete}/>
    </div>
  );
}

export default App;
