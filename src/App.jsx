import { useEffect, useState } from "react";
import Form from "./components/FormComponent";
import TodoList from "./components/TodoListComponent";
import "./styles/App.css";

const initialTaskList = [
  {
    id: 0,
    title: "Learn react framework",
    taskDescription: "View courses, read documentation about react",
    done: true,
  },
  {
    id: 1,
    title: "Learn vue in version 3",
    taskDescription:
      "View courses, read documentation about vue 3 and composition API",
    done: true,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTaskList);
  
  const initLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const createNewTask = (task) => {
    const { title, taskDescription, done } = task;
    const newTask = {
      id: tasks.length + 1,
      title,
      taskDescription,
      done
    }
    setTasks((tasks) => [...tasks, newTask]);
  }

  useEffect(() => {
    initLocalStorage()
  }, [tasks]);

  return (
    <>
      <main className="main-container">
        <div className="main-container__content main-container__content--form">
          <Form createNewTask={createNewTask}></Form>
        </div>
        <div className="main-container__content main-container__content--list">
          <TodoList todoList={tasks} ></TodoList>
        </div>
      </main>
    </>
  );
}

export default App;
