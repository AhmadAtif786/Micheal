import React from "react";

const Navtop = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-Transparent">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a class="navbar-brand" href="#">
              Hidden brand
            </a> */}
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <b> Home</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <b> Services</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <b>Technology</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <b> Pricing</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <b> About Us</b>
                </a>
              </li>
              <li class="nav-item ml-5">
                <a class="nav-link active" href="#">
                  <b> Log in</b>
                </a>
              </li>
              <li
                class="nav-item ml-5"
                style={{ backgroundColor: "orange", padding: "0px" }}
              >
                <a class="nav-link active" href="#">
                  <b> Sign up</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navtop;
