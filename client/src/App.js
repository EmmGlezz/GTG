import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
// import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
// import FormControl from "./components/FormControl";

const App = () => {
  return(
    <div>
      {/* <FormControl /> */}
      {/* <BrowserRouter>
        <Route path="/login" exact component={LogIn} />
        <Route path="/register" exact component={SignUp} />
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/register" exact element={<SignUp />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;