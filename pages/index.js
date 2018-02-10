import React from "react";
import Defs from "../components/Defs";
import smile from "./smile";
export default class extends React.Component {
  shadow = null
  smile = null
  time = null
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }
  handleMouseOver = (e) => {
    if (e.target === this.shadow && this.time) {
      clearTimeout(this.time)
    }
    this.setState({ hovering: true });
  };
  handleMouseOut = (e) => {
    if (e.target === this.smile) {
      this.time = setTimeout(() => {
        this.setState({ hovering: false })
      }, 100);
    } else {
      this.setState({ hovering: false })
    }
  };
  render() {
    return (
      <div>
        <svg
          id="chart"
          onClick={this.handleClick}
          ref={svg => (this.svg = svg)}
        >
          <Defs />
          {this.state.hovering && <circle
              id="path-1"
              cx="75"
              cy="79"
              r="73"
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              fill="transparent"
              ref={(shadow) => this.shadow = shadow}
          />}
          {this.state.hovering && (
            <circle
              id="path-1"
              cx="75"
              cy="79"
              r="50"
              filter="url(#filter-2)"
            />
          )}
          <circle id="path-1" fill="#FFFFFF" cx="75" cy="79" r="50" />
          <g dangerouslySetInnerHTML={{ __html: smile }} />
          <circle
            id="path-1"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            fill="transparent"
            cx="75"
            cy="79"
            r="50"
            ref={(smile) => this.smile = smile}
          />
        </svg>
      </div>
    );
  }
}
