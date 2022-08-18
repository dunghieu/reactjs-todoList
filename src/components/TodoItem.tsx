import {useAppDispatch} from '../hooks';
import {todoActions} from '../store/todo-slice';
import classes from './TodoItem.module.css';

type TodoProps = {
  key: string;
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
};

const TodoItem = (props: TodoProps) => {
  const dispatch = useAppDispatch();

  const onDeleteHandler = () => {
    dispatch(todoActions.removeTodo(props.todo.id));
  };

  const onToggleHandler = () => {
    dispatch(todoActions.toggleTodo(props.todo.id));
  };

  const checkboxClasses = `${classes.checkbox} ${
    props.todo.completed ? classes.checked : ''
  }`;

  return (
    <li className={classes.todo}>
      <input
        type='checkbox'
        className={classes.checkbox}
        id={`todo-${props.todo.id}`}
        checked={props.todo.completed}
        onChange={onToggleHandler}
      />
      <label htmlFor={`todo-${props.todo.id}`} className={checkboxClasses}>
        {props.todo.text}
      </label>
      <button onClick={onDeleteHandler}>x</button>
    </li>
  );
};

export default TodoItem;
