import React, { Component } from "react";
import "./Timeline.css";
import {
  faArrowRightLong,
  faCode,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Timeline extends Component {
  render() {
    return (
      <>
        <div class="timeline--container">
          <ul class="timeline">
            {this.props.items.map((item, index) => {
              return (
                <li key={index}>
                  <div class="timeline-item-right">
                    <span class={"tag"}></span>
                    <div class="info">
                      <div class="title"><FontAwesomeIcon icon={faCode} /> {item.title}</div>
                      <span class="date">
                        <span class="from">{item.dateFrom}</span>{" "}
                        <FontAwesomeIcon icon={faRightLong} />{" "}
                        <span class="to">{item.dateTo}</span>
                      </span>
                      <span class="location"><FontAwesomeIcon icon={faLocationDot} /> {item.location}</span>
                      <ul class="description">
                        {item.description.split("|").map((item2, index2) => {
                          return (
                            <li key={index2}>
                              {item2}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
