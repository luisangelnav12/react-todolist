import React from "react";
import "./TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value); // le da un valor a la variable seacrhValue y la guarda en el estado
  };
  return (
    <input
      onChange={onSearchValueChange}
      className="TodoSearch"
      value={searchValue} // mostramos el valor de la variable searchValue
      placeholder="Cebolla"
    />
  );
}
export { TodoSearch };
