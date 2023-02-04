import { useState, useEffect } from "react";
import { todoList } from "../../BBDD";
import List from "../../component/List/List";

export default function About() {

  document.title = 'Sobre Nosotros'

  const [todos, setTodos] = useState(todoList);

  return(
  <div>
    <List list={todos} onClick={setTodos}/>
  </div>);
}
