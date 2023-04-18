import api from './api';

export function getToken(username:string, password:string) {
  return api.post('/api/token/', {username, password});
};
