import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeMain from "./pages/Home/HomeMain";
import Slider from "./pages/Home/Slider";
import History from "./pages/About/History";
import Activities from "./pages/About/Activities";
import OfficeBearers from "./pages/About/OfficeBearers";

import Benefits from "./pages/Membership/Benefits";
import CategoryFee from "./pages/Membership/CategoryFee";

import ForthcomingEvents from "./pages/Events/ForthComingEvents";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeMain />} />

        <Route path="/history" element={<History />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/office-bearers" element={<OfficeBearers />} />


        <Route path="/benefits" element={<Benefits />} />
        <Route path="/category-fee" element={<CategoryFee />} />


        <Route path="/forthcoming-events" element={<ForthcomingEvents />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
