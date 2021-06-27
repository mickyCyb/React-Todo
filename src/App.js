// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputValues, setInputValues] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header><h1>{inputValues}</h1></header>
      <Form 
        inputValues={inputValues} 
        setInputValues={setInputValues}
        todos={todos}
        setTodos={setTodos}



      />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
