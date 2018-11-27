import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {authenticate} from '../../services/auth';
import styles from './styles.scss';

@withRouter
export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  setName = e => this.setState({name: e.target.value})

  setPassword = e => this.setState({password: e.target.value})

  authenticate = () => authenticate(this.state.name, this.state.password)
  .then(() => this.props.history.push('/home'))

  render() {
    const {name, password} = this.state;
    return (
      <div className={styles.container}>
        <input value={name} onChange={this.setName}/>
        <input value={password} onChange={this.setPassword} type="password"/>
        <div onClick={this.authenticate}>Submit</div>
      </div>
    );
  }
}
