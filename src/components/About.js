import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>Hello World!!!</p>
      <p>I am rendering About page from React ::::</p>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
