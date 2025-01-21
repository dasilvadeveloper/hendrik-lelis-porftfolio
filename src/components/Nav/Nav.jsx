import React, { Component } from 'react'
import  './Nav.css'

export default class Nav extends Component {



  render() {
    return (
      <nav>
        <img src="assets/img/logo.svg" alt="logo" />
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contacts">CONTACTS</a>
          </li>
        </ul> 
      </nav>
    )
  }
}
