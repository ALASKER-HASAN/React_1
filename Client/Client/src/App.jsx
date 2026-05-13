import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habal from "../screens/Habal";
import Login from "../screens/Welcome/Login";
import Register from "../screens/Welcome/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Habal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
