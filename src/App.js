import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
    </Routes>
  </>
};

export default App;