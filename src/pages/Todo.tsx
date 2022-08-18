import TodoFooter from '../components/TodoFooter';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

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
