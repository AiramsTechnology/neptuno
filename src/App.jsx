import { useState } from "react";
import Layout from "./components/Index/Layout";
import Navbar from "./components/Index/Navbar";
import Footer from "./components/Index/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="font-outfit overflow-x-hidden">
      <div className="absolute top-0 left-0 z-10 w-full ">
        <div
          className="fixed bg-gradient-to-r from-[#00409A]/70 to-[#00409A]/70 rounded-full p-2 mt-5 shadow-lg 
               max-w-[calc(100%-2rem)] border-20 border-white/30 left-1/2 -translate-x-1/2 w-full"
        >
          <Navbar />
        </div>
      </div>
      <Layout />
      <Footer/>
    </div>
  );
}

export default App;
