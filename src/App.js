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
  { text: "lavar los platos", completed: true, situacion: "desaprobado" },
  { text: "cocinar la comida", completed: false, situacion: "pendiente" },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length; //todo.complete === true doble negacion,
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      console.log(todoText);
      const seacrhText = searchValue.toLowerCase();
      return todoText.includes(seacrhText);
    });
  }
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true; //cambia el estado de completed
    setTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //cambia el estado de completed
    setTodos(newTodos);
  };
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      completed
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodos(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export default App;
