import { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [todo, setTodo] = useState({
    title: "",
    taskDescription: "",
    done: false,
  });

  const { title, taskDescription, done } = todo;

  const handleTodo = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, "name bug");
    setTodo({
      ...todo,
      [name]: e.target.type !== "checkbox" ? value : checked,
    });
  };

  return (
    <>
      <form className="form-container">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleTodo(e)}
        />
        <textarea
          name="taskDescription"
          id="description"
          cols="30"
          rows="10"
          value={taskDescription}
          onChange={(e) => handleTodo(e)}
        ></textarea>
        <input
          name="done"
          type="checkbox"
          value={done}
          onChange={(e) => handleTodo(e)}
        />
      </form>
    </>
  );
};

export default Form;
