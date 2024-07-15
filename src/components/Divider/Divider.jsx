import React, { Component } from "react";
import "./Divider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Divider extends Component {
  render() {
    return <div className="divider">
      <h1 class='title'> <FontAwesomeIcon icon={this.props.icon}/> {this.props.title || "Divider"}</h1>
      <div className="divider-line">
        <div className="shape"></div>
        {/* <div className="line"></div> */}
      </div>
    </div>;
  }
}
