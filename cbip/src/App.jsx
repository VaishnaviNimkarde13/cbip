import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Slider from "./pages/Home/Slider";
import History from "./pages/About/History";
import Activities from "./pages/About/Activities";
import OfficeBearers from "./pages/About/OfficeBearers";

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
        <Route path="/history" element={<History />} />
         <Route path="/activities" element={<Activities />} />
         <Route path="/officebearers" element={<OfficeBearers/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;