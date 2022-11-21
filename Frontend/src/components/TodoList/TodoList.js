import style from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import { useRef } from "react";

const TodoList = (props) => {
  const taskInputRef = useRef();

  const todoHtml = props.todos.map((item, index) => {
    return <Todo task={item} key={index} />;
  });

  const addTaskHandler = async () => {
    const task = taskInputRef.current.value.trim();
    if (task.length !== 0) {
      const response = await fetch("https://todo-list-api-8280.herokuapp.com/api/v1/createTodo", {
        method: "POST",
        body: JSON.stringify({ todo: task }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok === true) {
        props.updateTodos(task);
      }
    }
  };

  return (
    <div className={style.container}>
      <div className={style.form}>
        <input type="text" className={style.input} ref={taskInputRef} />
        <input type="submit" className={style.add} value="Add Task" onClick={addTaskHandler} />
      </div>
      {props.todos.length !== 0 && todoHtml}
      <div className={style["delete-all"]}>Delete all</div>
    </div>
  );
};

export default TodoList;
