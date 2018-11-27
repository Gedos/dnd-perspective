import React, {Component} from 'react';
import {Actor, Terrain} from '..';
import classNames from 'classnames';
import styles from './styles.scss';

const isInvisible = (x, y, [xPos, yPos], vision) => (
  (Math.abs(x - xPos) + Math.abs(y - yPos) > vision)
);

export default class Grid extends Component {

  renderCell = x => (cell, y) => {
    if (!this.props.dm && isInvisible(x, y, this.props.perspective, this.props.vision)) {
      return <div className={classNames(styles.cell, styles.fog)}/>;
    }
    return (
      <div
        className={styles.cell}
        onClick={this.props.onClick(x, y)}
        onMouseMove={this.props.onDrag(x, y)}
      >
        {cell.terrain && <Terrain type={cell.terrain}/>}
        {cell.actor && <Actor type={cell.actor}/>}
      </div>
    );

  }

  renderColumn = (column, x) => (
    <div className={styles.column}>
      {column.map(this.renderCell(x))}
    </div>
  )

  render() {
    const {grid} = this.props;
    return (
      <div className={styles.container}>
        {grid.map(this.renderColumn)}
      </div>
    );
  }
}
