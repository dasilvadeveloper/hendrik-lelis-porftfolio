import React from 'react'
import './Project.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCoffee, faDownload, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Project(props) {

  return (
    <div className='ProjectContainer'>
      <div className='ProjectName'>{props.name}</div>
      <img className="ProjectHighlightImage" src={props.highlightImg} alt="" />
      <div className="ProjectDescription">
        {props.description && <p> {props.description}</p>}
        {props.credits && <p> {props.credits}</p>}
      </div>
      <div className="PlatformsAvailability">
        {props.descktopAvailable && <img src="assets/img/desktop.png" alt="" />}
        {props.mobileAvailable && <img src="assets/img/web.png" alt="" />}
        {props.webAvailable && <img src="assets/img/web.png" alt="" />}
      </div>
      {
        props.download &&
        <button class="checkout-btn">
          <a href={props.download}>
          <FontAwesomeIcon icon={faDownload} /> download 
          </a>
        </button>
      }
      {
        props.url &&
        <button class="checkout-btn">
          <a href={props.url}>
          <FontAwesomeIcon icon={faLink} /> see project
          </a>
        </button>
      }

    </div>
  )
}
