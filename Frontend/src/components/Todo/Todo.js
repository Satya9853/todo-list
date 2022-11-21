import style from "./todo.module.css";

const Todos = (props) => {
  return <div className={style.tasks}>{props.task}</div>;
};

export default Todos;
