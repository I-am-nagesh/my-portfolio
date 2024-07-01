import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
