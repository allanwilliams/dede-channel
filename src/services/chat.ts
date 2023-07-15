import { Chat, ChatConfig } from '@/interfaces/chat';
import apiWs from './api_ws';

const namespace = 'atendimento'

interface ChatUpdateDto {
  id?: string;
  criado_em?: string;
  modificado_em?: string;
  criado_por_id?: string;
  modificado_por_id?: string
  status_id?: string;
  ultima_interacao_assistido?: string
  ultima_interacao_usuario?: string;
  usuario_id?: string;
  em_fila?: boolean;
}

export interface ChatConfigCreateDto {
  chat_id: string;
  canal_id: string;
  chave_cliente_canal: string;
  tipo_contato_id: string;
}

function atualizarChat(id: string,chat: ChatUpdateDto) {
  return apiWs.patch(`${namespace}/chat/${id}`,chat);
};

function addContato(newContato: ChatConfigCreateDto){
  return apiWs.post(`${namespace}/chat-config`,newContato);
}

export default { atualizarChat, addContato }