import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Btm from './components/Btm';
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import About from './pages/about.jsx';
import Uses from './pages/uses.jsx';
import Portfolio from './pages/portfolio.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename={'/MyWebsite'}>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uses" element={<Uses />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Btm />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
