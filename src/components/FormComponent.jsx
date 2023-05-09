import { useState } from "react";
import "../styles/Form.css";

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
        <h1>Formulario</h1>
        <div className="input-container">
          <label htmlFor="title">Name of the task:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => handleTodo(e)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description of the task:</label>
          <textarea
            name="taskDescription"
            id="description"
            rows="5"
            value={taskDescription}
            onChange={(e) => handleTodo(e)}
          ></textarea>
        </div>
        <div className="input-container input-container--checkbox">
          <label htmlFor="description">Complete task:</label>
          <input
            id="done"
            name="done"
            type="checkbox"
            value={done}
            onChange={(e) => handleTodo(e)}
          />
        </div>
        <button className="form-button">Create</button>
      </form>
    </>
  );
};

export default Form;
