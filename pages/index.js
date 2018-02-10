import React from "react";
import Defs from '../components/Defs'
import smile from './smile'
export default class extends React.Component {
  render() {
    return (
      <div>
        <svg id="chart" onClick={this.handleClick} ref={svg => this.svg = svg}>
        <Defs />
        <g className={this.nodeClassName} dangerouslySetInnerHTML={{__html: smile}} />
        </svg> 
      </div>
    )
  }
}
