import {BrowserRoutes, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Apod from "./pages/Apod";
import Faborites from "./pages/Favorites";

export default function App(){
  return (
    <BrowserRoutes>
      <div style={{padding: 24, fontFamily:"system-ui"}}>
        <h1>SpacePedia</h1>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/planets" element={<Planets />}/>
          <Route path="/apod" element={<Apod />}/>
          <Route path="/favorites" element={<Faborites/>}/>
        </Routes>
      </div>
    </BrowserRoutes>
  );
}
