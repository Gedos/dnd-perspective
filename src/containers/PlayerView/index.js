import React, {Component} from 'react';
import {Grid, Controls} from '../../components';
import {inject, observer} from 'mobx-react';
import {noop} from 'lodash-es';
import styles from './styles.scss';

@inject('game')
@observer
export default class PlayerView extends Component {
  render() {
    const {grid, localPlayer, handleClick, movePlayer} = this.props.game;
    return (
      <div className={styles.container}>
        <Grid grid={grid} perspective={localPlayer.position} vision={localPlayer.vision} onClick={handleClick} onDrag={noop}/>
        <Controls className={styles.controls} onMove={movePlayer}/>
      </div>
    );
  }
}
