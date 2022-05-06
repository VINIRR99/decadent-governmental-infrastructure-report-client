import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Report from "./pages/Report";
import SearchResults from "./pages/search-results";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";

const App = () => {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {(async () => setLoggedUser(await JSON.parse(localStorage.getItem("user"))))()}, []);

  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home loggedUser={loggedUser} /> } />
      <Route path="/report/:reportId" element={ <Report loggedUser={loggedUser} /> } />
      <Route path="/search/:search" element={ <SearchResults /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/profile/:username" element={ <Profile loggedUser={loggedUser} /> } />
    </Routes>
  </>
};

export default App;