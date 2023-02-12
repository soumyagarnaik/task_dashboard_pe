import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
    <main>
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </main>
    </BrowserRouter>     
    </div>
  );
}

export default App;
