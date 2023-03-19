import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Main from "./components/Main/Main";
import GamePage from "./components/Main/GamePage/GamePage";
import GenrePage from "./components/Main/GenrePage/GenrePage";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/main" exact element={<Main />} />
          <Route path="/game/:gameId" element={<GamePage />} /> 
          <Route path="/genre/:genreId" element={<GenrePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
