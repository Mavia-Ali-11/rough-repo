import React from "react";
import { Link } from "react-router-dom";
import Products from "../screens/products";

function About() {
  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <h1>About page</h1>
      <Products />
    </div>
  )
}

export default About;
