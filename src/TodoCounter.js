import React from "react";
// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };
import "./TodoCounter.css";
function TodoCounter({ totalTodos, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {totalTodos}} TO DOs
    </h2>
  );
}

export { TodoCounter };
