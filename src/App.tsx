import { Route, Routes } from "react-router-dom";
import "./components/Menubar";
import "./components/Login";
import "./components/Signup";
import Menubar from "./components/Menubar";
import Login from "./components/Login";
import Register from "./components/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />} />
      <Route path="log" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
