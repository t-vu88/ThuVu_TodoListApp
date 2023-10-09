import { useState } from 'react'
import './App.css'
import TodoTable from "./components/todoTable"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles'


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
const dateChange = (date) => 
  setTodo({ ...todo, date }); // Update the 'date' property in 'todo' state
const newTheme = (theme) => createTheme({
  ...theme,
  components: {
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: 'white',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#2196f3',
          border: '1px solid',
          backgroundColor:"skyblue",
        }
      }
    }
  }
})
return (
  <div className="App">
    <div className="addTodoBox">
      <h1>Add todo:</h1>
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          onChange={inputChanged}
          value={todo.desc}
        />
        <label className = "calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme = {newTheme}>
              <StaticDatePicker
              onChange={date => dateChange(date)}
              />
            </ThemeProvider>
        </LocalizationProvider>
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
    <div className = "todoTable">
    <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  </div>
);

}

export default App
