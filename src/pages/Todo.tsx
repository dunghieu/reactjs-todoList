import TodoFooter from '../components/todo/TodoFooter';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

const Todo = () => {
  return (
    <>
      <header>
        <p>Todos</p>
      </header>
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </>
  );
};

export default Todo;
