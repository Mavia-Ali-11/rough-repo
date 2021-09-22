import React from "react";
import { Link } from 'react-router-dom';
import Students from "../screens/students";

function Home() {
  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <h1>Home page</h1>
      <Students />
    </div>
  )
}

export default Home;
