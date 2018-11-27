import actorTiles from './actors';
import terrainTiles from './terrain';

const actorMan = {
  name: 'actorMan',
  src: actorTiles.actor
};

export const actor = {
  actorMan
};

const dirt = {
  name: 'dirt',
  src: terrainTiles.dirt
};

const grass = {
  name: 'grass',
  src: terrainTiles.grass
};

const water = {
  name: 'water',
  src: terrainTiles.water
};

export const terrain = {
  dirt,
  grass,
  water
};

export default {
  actor,
  terrain
};

