import React, { Component } from 'react'
import './Section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC, faCircle } from '@fortawesome/free-solid-svg-icons'
import Divider from '../Divider/Divider'
export default class Section extends Component {
  render(props) {
    return (
      <section>
        <Divider icon={faCircle} title={this.props.title} />
        <div className={this.props.inlineSroll ? "inlineSroll" : ""}>
          {this.props.children}
        </div>
      </section>
    )
  }
}
