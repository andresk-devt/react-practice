import { useState } from "react";
import "../styles/Form.css";

// eslint-disable-next-line react/prop-types
const Form = ({ createNewTask }) => {
  const [todo, setTodo] = useState({
    title: "",
    taskDescription: "",
    done: false,
  });

  const [error, setError] = useState({
    title: false,
    taskDescription: false
  });

  const { title, taskDescription, done } = todo;

  const handleTodo = (e) => {
    const { name, value, checked } = e.target;
    setTodo({
      ...todo,
      [name]: e.target.type !== "checkbox" ? value : checked,
    });
  };

  const validateTodo = () => {
    const updatedError = {
      title: !todo.title.trim(),
      taskDescription: !todo.taskDescription.trim()
    };
    setError(updatedError);
    const hasError = Object.values(updatedError).some(value => value);
    return !hasError;
  };

  const createTask = (e) => {
    e.preventDefault();
    const isValid = validateTodo();
    if (!isValid) {
      return;
    }
    createNewTask(todo)
    setTodo({ title: "", taskDescription: "", done: false })
  }

  return (
    <>
      <form className="form-container" onSubmit={(e) => createTask(e)}>
        <h1>Formulario</h1>
        <div className="input-container">
          <label htmlFor="title">Name of the task:</label>
          <input
            id="title"
            name="title"
            type="text"
            className={error['title'] ? 'missing-field' : ''}
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
            className={error['taskDescription'] ? 'missing-field' : ''}
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
        <button type="submit" className="form-button">Create</button>
      </form>
    </>
  );
};

export default Form;
