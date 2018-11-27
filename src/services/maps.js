import db from '.';

export const getMaps = () => db.get('/maps/_all_docs?include_docs=true')
.then(res => res.rows.map(row => row.doc));

export const saveMap = map => db.post('/maps', {...map});

export const updateMap = map => db.put(`/maps/${map._id}`, {...map});

