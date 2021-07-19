import React from "react";

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
        <a class="nav-link fs-1 text-white" href="./SD.html"
          >||Self Development||</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link fs-1 text-white" href="./DS.html"
          >||Data Science||</a
        >
      </li>

      <li class="nav-item">
        <a
          class="nav-link fs-1 text-white"
          aria-current="page"
          href="./index.html"
          >||Software Engineering||</a
        >
      </li>
    </ul>
  </div>
</nav>;
};

export default NavBar;
