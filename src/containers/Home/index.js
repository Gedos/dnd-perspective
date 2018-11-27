import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router';
import {getMaps} from '../../services/maps';
import classNames from 'classnames';
import styles from './styles.scss';

@withRouter
@inject('game')
@inject('editor')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [],
      selected: null
    };
  }

  componentWillMount() {
    getMaps()
    .then(maps => this.setState({maps}));
  }

  selectMap = id => () => this.setState({selected: id})

  playMap = () => {
    this.props.game.loadMap(this.state.maps.find(map => map._id === this.state.selected));
    this.props.history.push('/play');  
  }

  editMap = () => {
    this.props.editor.loadMap(this.state.maps.find(map => map._id === this.state.selected));
    this.props.history.push('/editor');
  }

  createMap = () => {
    this.props.editor.createMap(30, 30);
    this.props.history.push('/editor');
  }

  renderMap = map => (
    <div className={classNames(styles.map, this.state.selected === map._id && styles.selected)} onClick={this.selectMap(map._id)}>
      {map.name}
    </div>
  )

  render() {
    const {maps} = this.state;
    return (
      <div className={styles.container}>
        <div onClick={this.playMap}>Play selected</div>
        <div onClick={this.editMap}>Edit selected</div>
        <div onClick={this.createMap}>Create new</div>
        <div className={styles.maps}>
        <div className={styles.header}>Your Maps</div>
          {maps.map(this.renderMap)}
        </div>
      </div>
    );
  }
}
