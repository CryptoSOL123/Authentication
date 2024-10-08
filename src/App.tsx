import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar";
import Login from "./components/Login";
import Register from "./components/Signup";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      {/* Render Menubar outside of Routes so it stays on all pages */}
      <Menubar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="log" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
