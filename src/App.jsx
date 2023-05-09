import Form from "./components/FormComponent";
import TodoList from "./components/TodoListComponent";
import "./styles/App.css";

function App() {
  return (
    <>
      <main className="main-container">
        <div className="main-container__content main-container__content--form">
          <Form></Form>
        </div>
        <div className="main-container__content main-container__content--list">
          <TodoList></TodoList>
        </div>
      </main>
    </>
  );
}

export default App;
