import React from "react"; 
import Navbar from "./components/Navbar"; 
import About from "./components/About"; 
import Projects from "./components/Projects"; 

function App() {
  return (
    <main className="text-Neutral-50 bg-Neutral-100 body-font">
      <Navbar />
      <About />
      {/* <Projects />  */}
    </main>
  );
}

export default App;
