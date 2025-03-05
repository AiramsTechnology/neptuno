import { useState } from "react";
import Layout from "./components/Index/Layout";
import Navbar from "./components/Index/Navbar";
import Footer from "./components/Index/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/AboutUs/Nosotros";
import Contactanos from "./components/Contact/Contactanos";
import Productos from "./components/Products/Productos";
import WhatsApp from "./components/Index/Whatsapp";
import Flayer from "./components/Products/Flayer";
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
          <Route path="/Products/Flayer" element={<Flayer/>} />
          <Route path="/Contact/Contactanos" element={<Contactanos/>} />
        </Routes>
        <Footer />
        <WhatsApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;