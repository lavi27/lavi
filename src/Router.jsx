import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/:abc" element={<Index />} />
          <Route path="/links" element={<Index />} exact />
          <Route path="/bg" element={<Index />} exact />
      </Routes>
    </BrowserRouter>
  );
}