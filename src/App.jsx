import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState({desc:"", date: ""});
  const [todos,setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo,[event.target.name]: event.target.value});
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ desc: "", date: "" });
  };

  const deleteTodo = (index) =>{
    setTodos(todos.filter((todo,i) => i !== index))
  }
  return (
    <div className = "App">
      <div className = "addTodoBox">
        <h1>Add todo:</h1>
        <form onSubmit = {addTodo}>
        <label>Description:</label>
          <input type="text" name = "desc" onChange={inputChanged} value={todo.desc}></input>
          <label>Date:</label>
          <input type ="date" name = "date" onChange={inputChanged} value ={todo.date}></input>
          <input type ="submit" value ="Add"></input>  
          </form>
      </div>
        <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
          
          {todos.map((todo, index) => (        
          <tr key={index}>
            <td>{new Date(todo.date).toLocaleDateString('fi-FI')}</td>
            <td>{todo.desc}</td>
            <td>
              <button className ="deleteButton" onClick ={() =>deleteTodo(index)}>
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  )
}

export default App
