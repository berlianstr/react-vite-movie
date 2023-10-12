import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing-Page";
import SearchPage from "./pages/Landing-Page/searchPage/SearchPage";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/Landing-Page/details";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
