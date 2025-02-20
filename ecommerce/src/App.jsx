import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Compaines from "./components/Companies/Compaines";
import Residences from "./components/Residences/Residences";
import './App.css';
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
  {
    path:'/',
    element: <><Header/><Hero/><Footer/></>
  },
  {
    path:'/tours',
    element: <><Header/><Contact/><Footer/></>
  },
  {
    path:'/gallery',
    element: <><Header/><Compaines/><Footer/></>
  },
  {
    path:'/about',
    element: <><Header/><Residences/><Footer/></>
  },
  {
    path:'/contact',
    element: <><Header/><Value/><Footer/></>
  },
  {
    path:'/contact',
    element: <><Header/><GetStarted/><Footer/></>
  },
])

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
          <Contact/>
          <GetStarted/>
          <Footer/>
    </div>
  );
}

export default App;
