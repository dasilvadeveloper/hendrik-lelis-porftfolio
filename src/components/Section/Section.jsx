import React, { Component } from 'react'
import './Section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faCircle } from '@fortawesome/free-solid-svg-icons'
import Divider from '../Divider/Divider'
export default class Section extends Component {
  render() {
    return (
      <section> 
        <Divider icon={faCircle} title={this.props.title} />
        {this.props.children}
      </section>
    )
  }
}
