import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/login';
import Register from "./components/register";
import Post from "./components/createpost";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
