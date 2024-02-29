import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

interface Todo {
  id: string;
  text: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.concat({ id: Math.random().toString(), text: text });
    });
  };

  return (
    <div className="App">
      <h2>TodoList</h2>
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
