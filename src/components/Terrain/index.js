import React from 'react';
import {terrain} from '../../constants/tiles';
import styles from './styles.scss';

export default ({type}) => <img className={styles.container} src={terrain[type].src}/>;

