import React from 'react';
import './todo/style.css';
import ToDoList from './todo/ToDoList.jsx';
import ToDoForm from './todo/ToDoForm.jsx';
import Context from './todo/context.jsx'

function App() {

  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem('todos')));

  localStorage.setItem('todos', JSON.stringify(todos));

  function pushItem(text, value) {
    setTodos(todos.concat([{
      text,
      value,
      completed: false,
      id: todos.length + 1
    }])
    )
  }

  function resetId(toDos) {

    setTodos(toDos.map(todo => {

      for (let i = 0; i < toDos.length; i++) {
        if (todo === toDos[i]) todo.id = i + 1;
      }

      return todo;
    })
    )
  }

  function deleteTodo(id) {
    let toDoS = todos.filter(todo => id !== todo.id);

    resetId(toDoS);
  }

  function completeTodo(id) {
    setTodos(todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));

    resetId(todos);
  }
  
  function onChangeValue(id, element, value) {
    setTodos(todos.map(todo => {

      if (id === todo.id) todo[element] = value;

      return todo;
    }))
  }

  function clear() {
    setTodos([]);
  }

  function getSum() {
    alert( todos.reduce( (sum, todo) => sum + +todo.value, 0  ) ); 
  }


  return (
    <Context.Provider value={{ deleteTodo, completeTodo, onChangeValue, clear, getSum }}>
      <nav className="navbar navbar-dark bg-warning">
        <span className="navbar-brand mb-0 h1 mx-auto">REACT TO-DO</span>
      </nav>
      <div className="container todo">
        <ToDoForm createItem={pushItem} />
        <ToDoList todos={todos} />
      </div>
    </Context.Provider>
  );
}

export default App;
