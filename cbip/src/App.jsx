import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeMain from "./pages/Home/HomeMain";
import History from "./pages/About/History";
import Activities from "./pages/About/Activities";
import OfficeBearers from "./pages/About/OfficeBearers";

import HydroResource from "./pages/Empanelment/HydroResource";
import PowerResource from "./pages/Empanelment/PowerResource";
import WaterResource from "./pages/Empanelment/WaterResource";

import Benefits from "./pages/Membership/Benefits";
import CategoryFee from "./pages/Membership/CategoryFee";

import ForthcomingEvents from "./pages/Events/ForthComingEvents";
import PastEvents from "./pages/Events/PastEvents";

import Consultancy from "./pages/Consultancy";

import CBIPCOE from "./pages/CBIPCOE";

import PhotoGallery_Main from "./pages/Events/PhotoGallery_Main";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
return ( <BrowserRouter> <Header /> <Navbar />

```
  <Routes>
    <Route path="/" element={<HomeMain />} />

    {/* About Routes */}
    <Route path="/history" element={<History />} />
    <Route path="/activities" element={<Activities />} />
    <Route path="/office-bearers" element={<OfficeBearers />} />

    {/* Membership Routes */}
    <Route path="/benefits" element={<Benefits />} />
    <Route path="/category-fee" element={<CategoryFee />} />

    {/* Events Routes */}
    <Route path="/forthcoming-events" element={<ForthcomingEvents />} />
    <Route path="/past-events" element={<PastEvents />} />
    <Route path="/photo-gallery" element={<PhotoGallery_Main />} />


    {/* Empanelment Routes */}
    <Route path="/empanelment/hydro" element={<HydroResource />} />
    <Route path="/empanelment/power" element={<PowerResource />} />
    <Route path="/empanelment/water" element={<WaterResource />} />

    <Route path="/consultancy" element={<Consultancy />} />

    {/* CBIP-COE Route */}
    <Route path="/cbip-coe" element={<CBIPCOE />} />


  </Routes>

  <Footer />
</BrowserRouter>


);
}

export default App;
