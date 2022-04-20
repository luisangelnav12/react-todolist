import React from "react";
// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };
import "./TodoCounter.css";
function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TO DOs
    </h2>
  );
}

export { TodoCounter };
