/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Arrow extends Component {
  static propTypes = {
    rotate: PropTypes.string.isRequired,
    strokeWidth: PropTypes.string.isRequired,
    stroke: PropTypes.string.isRequired
  };

  render() {
    const { rotate, strokeWidth, stroke } = this.props;
    return (
      <svg id="arrow" viewBox="0 0 32 32" x="0.00000000" y="0.00000000">
        <g
          transform={`translate(16.000000, 16.000000) rotate(${rotate}) translate(-16.000000, -16.000000) translate(11.000000, 6.000000)`}
        >
          <polygon
            className="Stroke-52"
            points="9.86363636 10 0.196969697 0"
            style={{
              stroke,
              strokeWidth,
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            }}
          />
          <path
            d="M9.86363636,10 L0.196969697,20"
            className="Stroke-56"
            style={{
              stroke,
              strokeWidth,
              strokeLinecap: 'round',
              strokeLinejoin: 'round'
            }}
          />
        </g>
      </svg>
    );
  }
}
