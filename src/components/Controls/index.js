import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {noop} from 'lodash-es';
import classNames from 'classnames';
import styles from './styles.scss';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => this.setState({isOpen: !this.state.isOpen})

  navigation = [
    [
      {icon: 'caret-up', rotate: -45, func: this.props.onMove(-1, -1)},
      {icon: 'caret-up', func: this.props.onMove(0, -1)},
      {icon: 'caret-up', rotate: 45, func: this.props.onMove(1, -1)}
    ],
    [
      {icon: 'caret-left', func: this.props.onMove(-1, 0)},
      {icon: 'circle', func: this.props.onMove(0, 0)},
      {icon: 'caret-right', func: this.props.onMove(1, 0)}
    ],
    [
      {icon: 'caret-down', rotate: 45, func: this.props.onMove(-1, 1)},
      {icon: 'caret-down', func: this.props.onMove(0, 1)},
      {icon: 'caret-down', rotate: -45, func: this.props.onMove(1, 1)}
    ]
  ]

    renderNavButton = ({func, icon, rotate}) => (
      <div className={styles.button} onClick={func}>
        <FontAwesomeIcon icon={icon} transform={rotate ? {rotate} : {}}/>
      </div>
    )

    renderNavRow = row => (
      <div>
        {row.map(this.renderNavButton)}
      </div>
    )

    render() {
      const {className} = this.props;
      const {isOpen} = this.state;
      return (
        <div className={classNames(styles.container, isOpen && styles.open, className)}>
          <div className={styles.notch} onClick={this.toggleOpen}>
            <FontAwesomeIcon icon="caret-up"/>
          </div>
          <div className={styles.controls}>
            {this.navigation.map(this.renderNavRow)}
          </div>
        </div>
      );
    }
}

