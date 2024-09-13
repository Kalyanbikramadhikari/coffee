import './App.css';
import AboutStarbuck from './components/AboutStarbuck';
import Home from './Home';
import gsap from "gsap"
import { useGSAP } from '@gsap/react';

function App() {
  // useGSAP(()=>{
  //   gsap.to('')

  // })

  
  return (
    <div className="bg-[#7C655D] h-lvh">
      <Home/>
      <AboutStarbuck/>
      
    </div>
  );
}

export default App;
