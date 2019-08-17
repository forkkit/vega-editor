import { range } from 'd3-array';
import { scaleBand } from 'd3-scale';
import stringify from 'json-stringify-pretty-compact';
import React, { Component } from 'react';

export default class TimelineRow extends Component<
  {
    data: any[];
    width: number;
    xCount: number;
    onHoverInit: (hoverValue: any) => void;
    onHoverEnd: () => void;
    onClickInit: (hoverValue: any) => void;
    isClicked: boolean;
    clickedValue: any;
  },
  any
> {
  public render() {
    const { data, width, xCount, clickedValue } = this.props;
    const scale = scaleBand(range(0, xCount), [0, width]);

    const row = data.map(d => {
      return (
        <rect
          key={d}
          onMouseOver={() => this.props.onHoverInit(d)}
          onClick={() => this.props.onClickInit(d)}
          onMouseLeave={() => this.props.onHoverEnd()}
          className="svg-rect"
          height={20}
          style={{
            cursor: 'pointer',
            fill: clickedValue === d.xCount ? 'green' : '#b7b7b7',
            pointerEvents: 'all',
            stroke: 'white',
            strokeWidth: '0.5px',
          }}
          width={scale.bandwidth()}
          x={scale(d.xCount)}
        >
          {stringify(d)}
        </rect>
      );
    });

    return <svg width={window.innerWidth * 0.4}>{row}</svg>;
  }
}