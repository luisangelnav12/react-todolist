// import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
const defaultTodos = [
  { text: "cortar el pasto", completed: true, situacion: "pendiente" },
  { text: "hacer la compra", completed: false, situacion: "aprobado" },
  { text: "lavar los platos", completed: false, situacion: "desaprobado" },
  { text: "cocinar la comida", completed: false, situacion: "pendiente" },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      completed
      {/* <h2>Has completado 2 de 3 TO DOs</h2> */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <input placeholder="Cebolla" /> */}
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export default App;
