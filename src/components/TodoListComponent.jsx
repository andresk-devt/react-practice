import { useState } from "react";
import "../styles/List.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
    console.log(tasks, "tasks");
  };

  return (
    <>
      <div className="todo-list-container">
        <h1>Todo list</h1>
        <button onClick={getTasks}>GET TASKS</button>
        <ul className="tasks-list">
          {tasks.map((task) => (
            <li key={task.id}>{ task.title }</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;