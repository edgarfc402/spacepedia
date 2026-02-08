import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Apod from "./pages/Apod";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
