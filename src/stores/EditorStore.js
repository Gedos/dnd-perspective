import {observable, action} from 'mobx';
import {gridService} from '../utils';
import {saveMap, updateMap} from '../services/maps';
import {omit, isEqual} from 'lodash-es';

export class EditorStore {
    @observable map = null
    @observable grid = null
    @observable currentAction = null

    @action createMap = (width, height) => {
      this.map = {width, height, name: 'Untitled'};
      this.grid = gridService.createGrid(width, height);
    }

    @action loadMap = map => {
      this.map = omit(map, 'grid');
      this.grid = map.grid;
    }

    @action saveMap = () => {
      this.map._id
        ? updateMap({...this.map, grid: this.grid})
        : saveMap({...this.map, grid: this.grid});
    }

    @action setName = e => {
      this.map = {...this.map, name: e.target.value};
    }

    @action setWidth = e => {
      this.map = {...this.map, width: e.target.value};
    }

    @action setHeight = e => {
      this.map = {...this.map, height: e.target.value};
    }

    @action mutateCell = (x, y, mutation) => {
      this.grid = this.grid.map((q, i) =>
        i !== x
          ? q
          : q.map((r, j) => j !== y
            ? r
            : {...r, ...mutation}
          )
      );
    }

    @action handleClick = (x, y) => () => this.mutateCell(x, y, this.currentAction)

    @action handleDrag = (x, y) => e => {
      e.preventDefault();
      if(e.buttons === 1 && !isEqual(this.grid[x][y], {...this.grid[x][y], ...this.currentAction})) {
        this.mutateCell(x, y, this.currentAction);
      }
    }

    @action selectAction = action => value => () => {
      console.log('selected action: ', action, value);
      this.currentAction = {[action]: value};
    }

}

export default EditorStore;
