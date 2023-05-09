import "../styles/Card.css";

/* eslint-disable react/prop-types */
const CardTask = ({ task }) => {
  return (
    <>
      <div className="card-task">
        <h2>{task.title}</h2>
        <p>{task.taskDescription}</p>
        <div className="button-container">
          <button className="button-edit">Editar</button>
          <button className="button-delete">Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default CardTask;
