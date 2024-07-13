import React, { Component } from "react";
import "./InfoStrip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class InfoStrip extends Component {
  render() {
    return (
      <div className="dasilva-projects-info">
        <div className="content">
          {this.props.data.map((infoStripData, index) => {
            return (
              <div class="item" key={index}>
                <span>{infoStripData}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
