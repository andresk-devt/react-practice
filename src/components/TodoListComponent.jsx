import { useState, useEffect } from "react";
import "../styles/List.css";
import CardTask from "./CardTask";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  };

  return (
    <>
      <div className="todo-list-container">
        <h1>Todo list</h1>
        <ul className="tasks-list">
          {tasks
            ? tasks.map((task) => (
                <CardTask task={task} key={task.id}></CardTask>
              ))
            : <h3>There is not tasks to do</h3>}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
