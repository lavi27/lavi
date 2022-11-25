import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.scss";
import Index from './Index';
import Grid from './Grid';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="App">
    <Grid />
    {/* <div className="grid"></div> */}
    <div className="vignetting"></div>
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/:abc" element={<Index />} />
          <Route path="/links" element={<Index />} exact />
          <Route path="/bg" element={<Index />} exact />
      </Routes>
    </BrowserRouter>
  </div>
);
