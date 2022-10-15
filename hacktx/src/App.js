import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/login';
import Register from "./components/register";
import Post from "./components/createpost";
import Navigationbar from "./components/navbar";
import Home from "./components/home";
import DisplayPost from "./components/displaypost";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Post />} />
        <Route path="/display" element={<DisplayPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
