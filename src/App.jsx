import { useState } from "react";
import Layout from "./components/Index/Layout";
import Navbar from "./components/Index/Navbar";
import Footer from "./components/Index/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/AboutUs/Nosotros";
import Contactanos from "./components/Contact/Contactanos";
import Productos from "./components/Products/Productos";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-outfit overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/AboutUs/Nosotros" element={<Nosotros />} />
          <Route path="/Products/Productos" element={<Productos />} />
          <Route path="/Contact/Contactanos" element={<Contactanos/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;