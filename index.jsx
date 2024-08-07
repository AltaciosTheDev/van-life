import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Vans from "./pages/Vans/Vans"
import About from "./pages/About"
import Login from "./pages/Login"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Dashboard from "./pages/Host/Dashboard"
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostVans from "./pages/Host/HostVans"
import HostVansDetail from "./pages/Host/HostVansDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import HostVanPricing from "./pages/Host/HostVanPricing"
import NotFound from './pages/NotFound';
import AuthRequired from './components/AuthRequired';
import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login/>}/>

          <Route element={<AuthRequired/>}>
            <Route path="host" element={<HostLayout/>}>
              <Route index element = {<Dashboard/>}/>
              <Route path="income" element = {<Income/>}/>
              <Route path="reviews" element = {<Reviews/>}/>
              <Route path="vans" element ={<HostVans/>}/>
              <Route path="vans/:id" element = {<HostVansDetail/>}>
                <Route index element = {<HostVanInfo/>}/>
                <Route index path="pricing" element = {<HostVanPricing/>}/>
                <Route index path="photos"  element = {<HostVanPhotos/>}/>
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);


  //WAY OF DOING THE ROUTING WITH ABOSLUTE PATHS
  /*
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route element={<HostLayout/>}>
            <Route path="/host" element = {<Dashboard/>}/>
            <Route path="/host/income" element = {<Income/>}/>
            <Route path="/host/reviews" element = {<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  */