import {times, constant} from 'lodash-es';

const createGrid = (width, height) => {
  const column = times(height, constant({}));
  const rows = times(width, () => column);
  return rows;
};

export default {
  createGrid
};
