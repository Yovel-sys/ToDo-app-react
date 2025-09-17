export const TodoItem = ({ todo, todos, setToDos }) => {
  return (
    <div
      key={todo.id}
      onClick={() => {
        const newTodos = todos.map((oneTodo) => {
          if (oneTodo.id === todo.id) {
            oneTodo.isDone = !oneTodo.isDone;
          }
          return oneTodo;
        });
        setToDos(newTodos);
      }}
    >
      {todo.text}
      <span>{todo.isDone ? "✅" : "🟩"}</span>
    </div>
  );
};
