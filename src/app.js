import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Loadable from "react-loadable";

import "./app.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Loader from "./components/Loader";

let LoadableAbout = Loadable({
  loader: () => import("./components/About"),
  loading: Loader,
});

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LoadableAbout />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
