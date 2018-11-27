import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router';
import {Grid, Picker} from '../../components';
import tiles from '../../constants/tiles';
import styles from './styles.scss';

@withRouter
@inject('editor')
@observer
export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPicker: 'terrain'
    }
  }

  goBack = () => this.props.history.push('/home')

  selectPicker = picker => () => this.setState({selectedPicker: picker})

  renderPickerSelector = picker => (
    <div className={styles.pickerSelector} onClick={this.selectPicker(picker)}>
      {picker}
    </div>
  )

  render() {
    const {map, grid, handleClick, handleDrag, saveMap, selectAction, place, setName, setWidth, setHeight} = this.props.editor;
    const {selectedPicker} = this.state;
    return (
      <div>
        <div onClick={this.goBack}>Back</div>
        <div className={styles.pickerSelectors}>{Object.keys(tiles).map(this.renderPickerSelector)}</div>
        <Picker items={tiles[selectedPicker]} onSelect={selectAction(selectedPicker)}/>
        <input value={map.name} onChange={setName}/>
        <input value={map.width} onChange={setWidth}/>  
        <input value={map.height} onChange={setHeight}/>
        <div onClick={saveMap}>Save</div>
        <Grid dm grid={grid} onClick={handleClick} onDrag={handleDrag} range={5} perspective={[5,5]}/>
      </div>
    );
  }
}
