import React, { Component } from "react";

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faArrowDown, faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <header id="home" >
        <div class="description">
          <p>Hello! Welcome to my personal page</p>
          <img src="assets/img/logo.svg" width={250} alt="logo" class="logo-img" />
          <img src="assets/img/logo.svg" alt="logo" width="300px" />
          <h5><strong>Front-end developer</strong></h5>
          <p class="mb-5">Here you can see all about me! See my story, experiences and goals.</p>
        </div>
        <img id="hendrik_lelis__img" src="assets/img/dasilva.png" alt="" />
        <div class="scrollButton">
          <p class="scrollIcon"><FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon></p>
          <a href="#about">Scroll down</a>
        </div>
      </header>
    );
  }
}
