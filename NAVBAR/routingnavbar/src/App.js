
import './App.css';
import Navbar from "./Components/Navbar";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";


function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
