import "../styles/Card.css";

/* eslint-disable react/prop-types */
const CardTask = ({ task, editTask }) => {
  return (
    <>
      <div className="card-task">
        <h2>{task.title}</h2>
        <p>{task.taskDescription}</p>
        <div className="button-container">
          <button className="button-edit" onClick={() => editTask(task)}>Editar</button>
          <button className="button-delete">Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default CardTask;
