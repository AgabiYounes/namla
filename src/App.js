import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Import layout's components */
import NavBar from "./components/layouts/NavBar";
import SideBar from "./components/layouts/SideBar";
import Footer from "./components/layouts/Footer";

/* Import Pages */
import Home from "./views/Home";
import Clusters from "./views/Clusters";
import Edge from "./views/Edge";
import Devices from "./views/Devices";
import Error from "./views/Error";

function App() {
  return (
    <>
      <SideBar></SideBar>
      <section className="main_content dashboard_part large_header_bg">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/home/clusters" element={<Clusters />} />
          <Route path="/home/edge" element={<Edge />} />
          <Route path="/home/devices" element={<Devices />} />
          <Route element={() => <div>404 Not found </div>} />
        </Routes>

        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
