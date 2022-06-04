import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </Navbar>
  );
}

export default App;
