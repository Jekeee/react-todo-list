import React from "react";
import TodoList from "./Todo Components/TodoList";
import Context from "./context";
import AddTodo from "./AddTodo";

function App() {
  const [todos,setTodos] =  React.useState ([
    {id:1, completed:false, title:"todo"},
    {id:2, completed:false, title:"todo2"},
  ])

  function toggleTodo(id){
    setTodos(todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo =>todo.id !== id))
  }
  function addToDo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="App">
        <h1>React To Do List</h1>
        <AddTodo onCreate={addToDo}/>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}/>)
          : (
          <p> No todos...</p>)
         }   
      </div>
    </Context.Provider>
  ) 
}

export default App;
