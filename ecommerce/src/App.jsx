import Header from "./components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Compaines from "./components/Companies/Compaines";
import Residences from "./components/Residences/Residences";
import './App.css';
import Value from "./components/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" /> 
          <Header/>
          <Hero/>
        
     
          
      </div>
          <Compaines/>
          <Residences/>
          <Value/>
    </div>
  );
}

export default App;
