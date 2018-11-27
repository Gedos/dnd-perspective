import db from '.';

export const authenticate = (name, password) => db.post('/_session', {name, password});

export const getUser = token => db.get('/_session', {headers: {Authorization: token}});

