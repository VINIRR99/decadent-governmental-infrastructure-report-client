import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SearchResults from "./pages/search-results";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/:search" element={ <SearchResults /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
    </Routes>
  </>
};

export default App;