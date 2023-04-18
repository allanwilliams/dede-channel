import api from './api';

function obterFeriados() {
  return api.get(`/contrib/api/general/contrib/Feriado/`);
};

export default { obterFeriados }