/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/Form.css";

// eslint-disable-next-line react/prop-types
const Form = ({ createNewTask, task }) => {
  const [todo, setTodo] = useState({
    title: "",
    taskDescription: "",
    done: false,
  });

  const [error, setError] = useState({
    title: false,
    taskDescription: false,
  });

  const [isEdit, setIsEdit] = useState(false);

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
      taskDescription: !todo.taskDescription.trim(),
    };
    setError(updatedError);
    const hasError = Object.values(updatedError).some((value) => value);
    return !hasError;
  };

  const handleFormTask = (e) => {
    e.preventDefault();
    const isValid = validateTodo();
    if (!isValid) {
      return;
    }
    if (!isEditMode) {
      createNewTask(todo);
      // console.log('its a edit mode functionality');
      return;
    }
    // edit code... functionality
    setTodo({ title: "", taskDescription: "", done: false });
  };

  const hasATaskToEdit = () => {
    return Object.keys(task).length > 0;
  };

  const isEditMode = () => {
    const editMode = hasATaskToEdit();
    if (editMode) {
      const { title, taskDescription, done } = task;
      console.log(title, taskDescription, done);
      setTodo(task);
    }
  };

  useEffect(() => {
    setIsEdit(hasATaskToEdit());
    if (isEdit) {
      setTodo(task);
    }
  }, [task, isEdit]);

  return (
    <>
      <form className="form-container" onSubmit={(e) => handleFormTask(e)}>
        <h1>Formulario</h1>
        <div className="input-container">
          <label htmlFor="title">Name of the task:</label>
          <input
            id="title"
            name="title"
            type="text"
            className={error["title"] ? "missing-field" : ""}
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
            className={error["taskDescription"] ? "missing-field" : ""}
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
        <button type="submit" className="form-button">
          {isEdit ? "Editar" : "Crear"}
        </button>
      </form>
    </>
  );
};

export default Form;
