import {Auth, Editor, Home, PlayerView} from '../containers';

const auth = {
  path: '/auth',
  component: Auth
};

const editor = {
  path: '/editor',
  component: Editor
};

const home = {
  path: '/home',
  component: Home
};

const playerView = {
  path: '/play',
  component: PlayerView
};

const allRoutes = [auth, editor, home, playerView];
export default allRoutes;
