import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router';
import routes from '../../constants/routes';
import {getUser} from '../../services/auth';
import styles from './styles.scss';

@withRouter
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirected: false
    }
  }

  componentDidMount() {
    this.props.history.push('/auth');
    this.setState({redirected: true})
  }

    renderRoute = ({path, component}) => <Route key={path} path={path} component={component}/>

    render() {
      const {redirected} = this.state;
      return (
        <div className={styles.container}>
          {redirected && <Switch>
            {routes.map(this.renderRoute)}
          </Switch>}
        </div>
      );
    }
}
