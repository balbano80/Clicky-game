import React from "react";
import "./Navbar.css";

const Navbar = () => (

<nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
  <div class="container">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul id="menu-main-nav" class="navbar-nav nav-fill w-100">
        <li class="nav-item mt-1"><a href="/"><h2>Clicky Game</h2></a></li>
        <li class="nav-item mt-3"><h4>Click on an Image to begin</h4></li>
        <li class="nav-item mt-3"><h4>Score: 0 | Top Score: 0</h4></li>
      </ul>
    </div>
  </div>
</nav>
);

export default Navbar;