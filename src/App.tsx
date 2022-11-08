import { useState } from 'react'
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { AliveScope } from "react-activation";
import PageLayout from './Layout/PageLayout';
import Index from './pages/Home';
import Exchange from './pages/Exchange';
import Casting from './pages/Casting';
import Mine from './pages/Mine';
import Register from './pages/Register';
import Unique from './pages/Unique';
import Identity from './pages/Identity';
import Governance from './pages/Governance';
import BlindBox from './pages/BlindBox';
import Author from './pages/Author';
import AuthorDetail from './pages/Author/detail';
import Guild from './pages/Guild';
import Mall from './pages/Mall';
import Community from './pages/Community';
import 'antd/dist/antd.css';

function App() {
  return (
    <AliveScope>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Routes>
          <Route path="/page" element={<PageLayout />}>
            <Route path="/page/exchange" element={<Exchange />} />
            <Route path="/page/mine" element={<Mine />} />
            <Route path="/page/casting" element={<Casting />} />
            <Route path="/page/register" element={<Register />} />
            <Route path="/page/unique" element={<Unique />} />
            <Route path="/page/identity" element={<Identity />} />
            <Route path="/page/governance" element={<Governance />} />
            <Route path="/page/blindBox" element={<BlindBox />} />
            <Route path="/page/author" element={<Author />} />
            <Route path="/page/author/:id" element={<AuthorDetail />} />
            <Route path="/page/guild" element={<Guild />} />
            <Route path="/page/mall" element={<Mall />} />
          </Route>
        </Routes>
      </HashRouter>
    </AliveScope>
  )
}

export default App
