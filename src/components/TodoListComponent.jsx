/* eslint-disable react/prop-types */
import "../styles/List.css";
import CardTask from "./CardTask";

const TodoList = ({ todoList, editTask }) => {
  return (
    <>
      <div className="todo-list-container">
        <h1>Todo list</h1>
        <ul className="tasks-list">
          {todoList ? (
            todoList.map((task) => <CardTask task={task} key={task.id} editTask={editTask}></CardTask>)
          ) : (
            <h3>There is not tasks to do</h3>
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
