import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Todos from './pages/Todos';
import Welcome from './pages/Welcome';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/auth" element={<Login />} />
                <Route path="/todos" element={<Todos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
