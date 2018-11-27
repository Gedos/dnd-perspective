import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router} from 'react-router';
import {EditorStore, GameStore} from './stores';
import App from './containers/App';
import fontAwesome from './constants/fontAwesome';
import './scss/main.scss';

export const history = createBrowserHistory();

fontAwesome();

const editor = new EditorStore;
const game = new GameStore;

const stores = {
  editor,
  game
};

const renderApp = () =>
  ReactDOM.render(
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  );

renderApp();
