import {Route, Routes} from 'react-router-dom';
import './App.css';
import MainHeader from './components/MainHeader';

import Intro from './pages/Intro';
import Todo from './pages/Todo';

function App() {
  return (
    <div className='App'>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='*' element={<p>Page Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
