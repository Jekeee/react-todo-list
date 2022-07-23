import React from "react";
import TodoList from "./Todo Components/TodoList";

function App() {
  const todos = [
    {id:1, complited:false, title:"todo"},
    {id:2, complited:false, title:"todo2"},
  ]
  return (
    <div className="App">
      <h1>React To Do List</h1>
      <TodoList todos={todos}/>
    </div>
  ) 
}

export default App;
