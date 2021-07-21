import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return     <nav
  class="
    navbar
    sticky-top
    navbar-light
    bg-success
    navbar navbar-expand-lg navbar-light
  "
>
  <div class="container-fluid">
    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link to="/selfDevelopment" class="nav-link fs-1 text-white"
          >||Self Development||</Link>
      </li>
      <li class="nav-item">
        <Link to="/dataScience"
        class="nav-link fs-1 text-white" 
          >||Data Science||</Link>
      </li>

      <li class="nav-item">
        <Link to="softwareEngineering"
          class="nav-link fs-1 text-white"
          aria-current="page"
          >||Software Engineering||</Link>
      </li>
    </ul>
  </div>
</nav>;
};

export default NavBar;
