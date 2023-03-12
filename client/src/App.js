import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/main" exact element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
