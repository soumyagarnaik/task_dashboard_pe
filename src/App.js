import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import {AuthContextProvider} from './context/AuthContext'


function App() {
  return (
    <div className="App"> 
     <BrowserRouter>
    <AuthContextProvider>
     <Header />
    <main>
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </main>
    </AuthContextProvider>
    </BrowserRouter>     
    </div>
  );
}

export default App;
