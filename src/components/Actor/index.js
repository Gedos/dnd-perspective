import React from 'react';
import {actor} from '../../constants/tiles';
import styles from './styles.scss';

export default ({type}) => <img className={styles.container} src={actor[type].src}/>;
