import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { todoActions } from '../../store/todo-slice';
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
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();

  const onDeleteHandler = () => {
    dispatch(todoActions.removeTodo(props.todo.id));
  };

  const onToggleHandler = () => {
    dispatch(todoActions.toggleTodo(props.todo.id));
  };

  const onEditHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      dispatch(
        todoActions.editTodo({
          todoId: props.todo.id,
          text: event.target.value,
        })
      );
    } else {
      dispatch(todoActions.removeTodo(props.todo.id));
    }
    setIsEditing(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEditHandler(event as any);
      setIsEditing(false);
    }
  };

  const checkboxClasses = `${classes.checkbox} ${props.todo.completed ? classes.checked : ''}`;

  return (
    <li className={classes.todo}>
      <input
        type="checkbox"
        className={classes.checkbox}
        id={`todo-${props.todo.id}`}
        checked={props.todo.completed}
        onChange={onToggleHandler}
      />
      {!isEditing ? (
        <label className={checkboxClasses} onDoubleClick={() => setIsEditing(true)}>
          {props.todo.text}
        </label>
      ) : (
        <input
          type="text"
          className={classes.edit}
          defaultValue={props.todo.text}
          onBlur={onEditHandler}
          autoFocus={true}
          onKeyPress={handleKeyPress}
        />
      )}
      <button onClick={onDeleteHandler}>x</button>
    </li>
  );
};

export default TodoItem;
