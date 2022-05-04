import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Report from "./pages/report";
import SearchResults from "./pages/search-results";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";

const App = () => {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/report/:reportId" element={ <Report /> } />
      <Route path="/:search" element={ <SearchResults /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/profile/:username" element={ <Profile /> } />
    </Routes>
  </>
};

export default App;