import { useState } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setToDos] = useState([
    {
      text: "תעשה כלים",
      id: Math.random(),
      isDone: true,
    },
  ]);

  return (
    <>
      <div className="bg-amber-200">
        <h1> TODO APP</h1>

        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setToDos={setToDos}
            />
          );
        })}

        <button
          onClick={() => {
            const newToDo = {
              text: todoText,
              id: Math.random(),
              isDone: false,
            };
            setToDos([...todos, newToDo]);
            setTodoText("");
          }}
        >
          הוסף משימה
        </button>
        <div>
          <input
            type="text"
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
