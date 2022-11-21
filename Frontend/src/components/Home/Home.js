import TodoList from "../TodoList/TodoList";
import { useState, useEffect } from "react";

const Home = () => {
  const [todoLists, setTodoLists] = useState([]);

  const updateTodos = (task) => {
    setTodoLists((prev) => [...prev, task]);
  };

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("https://todo-list-api-8280.herokuapp.com/api/v1/getAll");
      const data = await response.json();
      const allTodo = data.todos.map((item) => item.todo);
      setTodoLists(allTodo);
    }
    fetchTodos();
  }, []);
  return (
    <div>
      <TodoList todos={todoLists} updateTodos={updateTodos} />
    </div>
  );
};

export default Home;
