
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element ={<Home/>}/>
     <Route path="contact" element ={<Contact/>}/>
     <Route path="a-propos" element ={<About/>}/>
     <Route path="*" element={<Notfound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
