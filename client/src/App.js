import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/main" exact element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
