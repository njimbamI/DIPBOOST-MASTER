
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Porfolio from "./pages/Porfolio";


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element ={<Home/>}/>
     <Route path="contact" element ={<Contact/>}/>
     <Route path="competences" element ={<Competences/>}/>
     <Route path="portfolio" element ={<Porfolio/>}/>
     <Route path="*" element={<Notfound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
