
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Chat, Canal, ChatConfig, Anexo, Status, Mensagem, Assistido, TipoContato } from '@/interfaces/chat';
import { chatsMock, canaisMock, statusMock } from '@/mocks/chatsMocks'
import assistidoService from '@/services/assistido'
import chatService, { ChatConfigCreateDto } from '@/services/chat'
import moment from 'moment';
import io, { Socket } from 'socket.io-client'
import crypto from 'crypto';
import { useBase } from './base';

interface ChatContextData {
  chats: Array<Chat>;
  setChats: Function;
  openChat?: Chat;
  setOpenChat: Function;
  canais: Array<Canal>;
  setCanais: Function;
  tiposContato: Array<TipoContato>;
  setTiposContato: Function;
  selectConfig: ChatConfig|undefined;
  setSelectConfig: Function;
  selectCanal: Canal;
  setSelectCanal: Function;
  modalAnexoOpen: boolean;
  setModalAnexoOpen: Function;
  anexoOpen: Anexo|undefined;
  setAnexoOpen: Function;
  status: Array<Status>;
  setStatus:Function;
  openInfoBar: boolean;
  setOpenInfoBar: Function;
  sendMessage: Function;
  saveChat: Function;
  openHistoricoBar: boolean;
  setOpenHistoricoBar: Function;
  socketInitializer: Function;
  addContato: Function;
};

const ChatContext = createContext<ChatContextData>({} as ChatContextData);
type Props = { children: JSX.Element};

export const ChatProvider: React.FC<Props> = ({ children }) => {
  const { setAlertOpen, setAlertText, setAlertVariant } = useBase();

  const [ socket , setSocket ] = useState<Socket>({} as Socket);
  const [ chats , setChats ] = useState<Array<Chat>>([]);
  const [ canais , setCanais ] = useState<Array<Canal>>(canaisMock);
  const [ tiposContato , setTiposContato ] = useState<Array<TipoContato>>([]);
  const [ openChat , setOpenChat ] = useState<Chat|undefined>();
  const [ selectCanal , setSelectCanal ] = useState<Canal>(canais[0]);
  const [ selectConfig , setSelectConfig ] = useState<ChatConfig|undefined>();
  const [ modalAnexoOpen , setModalAnexoOpen ] = useState<boolean>(false);
  const [ anexoOpen , setAnexoOpen ] = useState<Anexo|undefined>();
  const [ status, setStatus ] = useState<Array<Status>>([])
  const [ openInfoBar, setOpenInfoBar ] = useState<boolean>(false)
  const [ openHistoricoBar, setOpenHistoricoBar ] = useState<boolean>(false)

  useEffect(() => {
    socketInitializer()
  }, [])
  

  const sendMessage = function (e: any) {
    if (selectConfig && openChat) {
      const newOpenChat = { ...openChat }

      const newMsgId = getNewId()
      const newMessage: Mensagem = {
        id: newMsgId,
        mensagem: e.target.messageText.value,
        chat_config_id: selectConfig.id,
        chat_id: openChat.id,
        lida: false,
        from_assistido: false,
        criado_em: moment().toISOString(),
        ack: 2
      }

      if (e.target.inputFile.files.length > 0) {
        getBase64(e.target.inputFile.files[0], (result: any) => {
          const anx = {
            id: getNewId(),
            mensagem_id: newMsgId,
            tipo: getFileType(result),
            file: result
          }
          newMessage.anexo = anx
          newOpenChat.Mensagem.push(newMessage)
          setOpenChat(newOpenChat)
          saveChat(newOpenChat)
        })
      } else {
        newOpenChat.Mensagem.push(newMessage)
        setOpenChat(newOpenChat)
        saveChat(newOpenChat)
      }
      socket.emit('sendMessage',newMessage)
    }
  }

  const saveChat = function(newChat: Chat, update = false){
    if(newChat){
      const newChats = [...chats]
      const chatIndex = newChats.findIndex(chat => chat.id == openChat?.id)
      
      newChats.splice(chatIndex, 1, newChat);
      setChats(newChats)
      if(update){
        atualizarChat(newChat)
        if (newChat.Assistido) atualizarAssistido(newChat.Assistido)
      }
    }
    
  }

  const atualizarChat = function (chat: Chat) {
    const chatId = chat.id
    if (chatId) chatService.atualizarChat(chatId, {
      modificado_em: chat.modificado_em,
      criado_em: chat.criado_em,
      criado_por_id: chat.criado_por_id,
      em_fila: chat.em_fila,
      id: chat.id,
      modificado_por_id: chat.modificado_por_id,
      status_id: chat.status_id,
      ultima_interacao_assistido: chat.ultima_interacao_assistido,
      ultima_interacao_usuario: chat.ultima_interacao_usuario,
      usuario_id: chat.usuario_id,
    })
  }

  const atualizarAssistido = function(assistido: Assistido){
    const assistidoId = assistido.id
    if (assistidoId) assistidoService.atualizarAssistido(assistidoId, {
      modificado_em: assistido.modificado_em,
      chat_id: assistido.chat_id,
      cpf: assistido.cpf,
      criado_em: assistido.criado_em,
      criado_por_id: assistido.criado_por_id,
      id: assistido.id,
      modificado_por_id: assistido.modificado_por_id,
      nome: assistido.nome,
    })
  }

  const addContato = function(contato: ChatConfigCreateDto){
    chatService.addContato(contato).then(result => {
      setAlertOpen(true);
      setAlertVariant('primary');
      setAlertText('Contato cadastrado com sucesso')
      setTimeout(()=>{setAlertOpen(false);},1000)
      openChat?.ChatConfig.push(result.data)
      if(openChat) saveChat(openChat)
    })
  }

  const getBase64 = function (file: File, cb: Function) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const getFileType = function (base64: string) {
    if (base64.includes('image')) return 1
    if (base64.includes('pdf')) return 2
    return 1
  }

  const getNewId = function(){
    return crypto.randomBytes(16).toString('hex')
  }

  const socketInitializer = async () => {
    const socket = io('http://127.0.0.1:3000/atendimento');
      socket.on('connect', function() {
        console.log('Connected');

        socket.emit('getAllChats', 0, (response: any) =>{
          console.log('getAllChats:', response),
          setChats(response)
        });

        socket.emit('getAllCanais', 0, (response: any) =>{
          console.log('getAllCanais:', response),
          setCanais(response)
        });
        
        socket.emit('getAllStatus', 0, (response: any) =>{
          console.log('getAllStatus:', response),
          setStatus(response)
        });

        socket.emit('getAllTipoContato', 0, (response: any) =>{
          console.log('getAllTipoContato:', response),
          setTiposContato(response)
        });
      });
      socket.on('chat:add', function(data) {
        console.log('event', data);
      });
      socket.on('assistido', function(data) {
        console.log('event', data);
      });
      socket.on('disconnect', function() {
        console.log('Disconnected');
      });

    setSocket(socket)
  }

  return (
    <ChatContext.Provider 
      value={{ 
          chats,setChats,
          openChat, setOpenChat,
          canais, setCanais,
          tiposContato , setTiposContato,
          selectConfig, setSelectConfig,
          selectCanal, setSelectCanal,
          modalAnexoOpen , setModalAnexoOpen,
          anexoOpen , setAnexoOpen,
          status, setStatus,
          openInfoBar, setOpenInfoBar,
          sendMessage,saveChat,
          openHistoricoBar, setOpenHistoricoBar,
          socketInitializer,
          addContato
      }}>
        {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext)
  return context;
};
