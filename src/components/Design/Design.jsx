import React from 'react'
import './Design.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCoffee, faDownload, faLink } from "@fortawesome/free-solid-svg-icons";

export default function Design(props) {

  return (
    <div className='DesignContainer'>
      <img src={props.highlightImg} alt="" />
       
    </div>
  )
}
