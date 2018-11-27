import React, {Component} from 'react';
import styles from './styles.scss';

export default class Picker extends Component {

    renderItem = ({name, src}) => (
      <div className={styles.item} onClick={this.props.onSelect(name)}>
        <img src={src}/>
        <div className={styles.label}>{name}</div>
      </div>
    )

    render() {
      const {items} = this.props;
      return (
        <div className={styles.container}>
          {Object.values(items).map(this.renderItem)}
        </div>
      );
    }
}
