import React from "react";
import Task from "./Task";
//import { v4 as uuid } from "uuid";

function TaskList({tasks, category="All", onDelete}) {
  const filteredTasks = tasks.filter((task) => {
    if (category==="All") return true;
    return (task.category===category);
  });
  const tasksJsx = filteredTasks.map((task) => {
    return (
      <Task key={task.text} category={task.category} text={task.text} onDelete={onDelete} />
    );
  })

  return (
    <div className="tasks">
      {tasksJsx}
    </div>
  );
}

export default TaskList;
