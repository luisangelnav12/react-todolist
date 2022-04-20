import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
  const onComplete = () => {
    alert("ya completaste el ToDo" + props.text);
  };
  const onDelete = () => {
    alert("borraste el ToDo" + props.text);
  };
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}
export { TodoItem };
