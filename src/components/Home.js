import React from "react";
import { Link } from "react-router-dom";

import backgroud from "../assets/background.png";

export default function Home() {
  return (
    <div>
      <p>Hello World!!!</p>
      <p>I am rendering Home page from React ::::</p>
      <img src={backgroud} width={100} height={100} />
      <p>Checking cache - change</p>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}
