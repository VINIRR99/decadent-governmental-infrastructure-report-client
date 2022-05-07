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
import PrivateOutlet from "./components/PrivateOutlet";
import Account from "./pages/account";

const App = () => {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {(async () => setLoggedUser(await JSON.parse(localStorage.getItem("user"))))()}, []);

  return <>
    <Navbar loggedUser={loggedUser} />
    <Routes>
      <Route path="/" element={ <Home loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/report/:reportId" element={ <Report loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/search/:search" element={ <SearchResults loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="/profile/:username" element={ <Profile loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/private" element={ <PrivateOutlet /> }>
        <Route path="/private/account" element={ <Account loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      </Route>
    </Routes>
  </>
};

export default App;