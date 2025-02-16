import { useState } from 'react';
import Layout from './components/Index/Layout';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="font-outfit">
      <Layout /> 

    </div>
  );
}

export default App;