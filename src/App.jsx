import React from 'react';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import {Link} from "react-router";

function App() {
  return(
    <div className="app">
    <h1>GDG Shopping Mall</h1>
      <Navbar />
      <Content />
      <Link to="/users/1">User 1</Link>
      <Link to="/users/2">User 2</Link>
      <Footer />

    </div>
  );
}

export default App;