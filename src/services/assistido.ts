import apiWs from './api_ws';

const namespace = 'atendimento/assistido'

function atualizarAssistido(id: string,data: any) {
  return apiWs.patch(`${namespace}/${id}`,data);
};

export default { atualizarAssistido }