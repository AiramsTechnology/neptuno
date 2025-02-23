import { useState } from "react";
import Layout from "./components/Index/Layout";
import Navbar from "./components/Index/Navbar";
import Footer from "./components/Index/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="font-outfit overflow-x-hidden">
          <Navbar />
      <Layout />
      <Footer/>
    </div>
  );
}

export default App;
