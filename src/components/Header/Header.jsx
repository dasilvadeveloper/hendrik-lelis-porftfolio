import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <div class="description">
          <p>Hello! Welcome to my personal page</p>
          <img src="assets/img/logo.svg" width={250} alt="logo" />
          <h2>Full-Stack developer</h2>
          <p class="mb-5">Here you can see all about me! See my story, experiences and goals.</p>
          <button
            onclick="window.location.hash = 'footer';"
            id="click-me"
            class="checkout-btn animate__animated animate__bounce"
          >
            check out
          </button>
        </div>
        <img id="hendrik_lelis__img" src="assets/img/dasilva.png" alt="" />
      </header>
    );
  }
}
