import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Report from "./pages/Report";
import SearchResults from "./pages/search-results";
import PublicOutlet from "./components/PublicOutlet";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/profile";
import PrivateOutlet from "./components/PrivateOutlet";
import Account from "./pages/account";

const App = () => {
  const [loggedUser, setLoggedUser] = useState();

  const hello = "Hello";
  console.log("Hello");

  useEffect(() => {(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const jwtPayload = await JSON.parse(window.atob(token.split('.')[1]));
      if ((jwtPayload.exp * 1000) > Date.now()) {
        setLoggedUser(await JSON.parse(localStorage.getItem("user")));
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      };
    };
  })()});

  return <>
    <Navbar loggedUser={loggedUser} />
    <Routes>
      <Route path="/" element={ <Home loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/report/:reportId" element={ <Report loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/search/:search" element={ <SearchResults loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/auth" element={ <PublicOutlet /> }>
        <Route path="/auth" element={ <Navigate to="/" /> } />
        <Route path="/auth/login" element={ <Login /> } />
        <Route path="/auth/signup" element={ <Signup /> } />
      </Route>
      <Route path="/profile/:username" element={ <Profile loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      <Route path="/account" element={ <PrivateOutlet /> }>
        <Route path="/account" element={ <Account loggedUser={loggedUser} setLoggedUser={setLoggedUser} /> } />
      </Route>
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  </>
};

export default App;