import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Slider from "./pages/Home/Slider";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
     <Route path="/" element={<Slider />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />  */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;