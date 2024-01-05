
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
// <<<<<<< HEAD

// =======
import PrivateRoutes from "./components/PrivateRoutes";
import UnauthorizedRoutes from "./components/UnauthorizedRoutes";
import Home from "./pages/Home";
import ThemeButton from "./components/ThemeButton";
import Hospital_history from "./pages/Hospital_history";
// >>>>>>> bc07ea701e0200b0b699bf42ed46346fbf7e97db
function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* UNAUTHORIZED ROUTES */}
        <Routes>
          <Route element={<UnauthorizedRoutes />}>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
          {/* AUTHORIZED ROUTES */}
          <Route element={<PrivateRoutes />}>
            {/* <Navbar/> */}
            <Route path="/" element={<Home />} />
            <Route path="/hospital-history" element={<Hospital_history />} />
          </Route>
        </Routes>
        <ThemeButton />
      </Router>
    </>
  );
}

export default App;
