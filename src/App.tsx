import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <header>
        <p>Todos</p>
      </header>
      <main className='Todo'>
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </main>
    </div>
  );
}

export default App;
