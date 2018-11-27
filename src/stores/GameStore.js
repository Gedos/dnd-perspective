import {observable, action} from 'mobx';
import {gridService} from '../utils';

export class GameStore {
  @observable map = null
  @observable grid = null
  @observable localPlayer = {
    position: [15, 15],
    vision: 7
  }

  @action loadMap = map => {
    this.map = map;
    this.grid = map.grid;
  }

    handleClick = () => null

    movePlayer = (deltaX, deltaY) => () => {
      const [currentX, currentY] = this.localPlayer.position;
      this.localPlayer = {...this.localPlayer, position: [currentX + deltaX, currentY + deltaY]};
    }
}

export default GameStore;
