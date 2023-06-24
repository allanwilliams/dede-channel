
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Chat, Canal, ChatConfig, Anexo, Status, Mensagem } from '@/interfaces/chat';
import { chatsMock, canaisMock, statusMock } from '@/mocks/chats';
import moment from 'moment';

interface ChatContextData {
  chats: Array<Chat>;
  setChats: Function;
  openChat?: Chat;
  setOpenChat: Function;
  canais: Array<Canal>;
  setCanais: Function;
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
};

const ChatContext = createContext<ChatContextData>({} as ChatContextData);
type Props = { children: JSX.Element};

export const ChatProvider: React.FC<Props> = ({ children }) => {
  
  const [ chats , setChats ] = useState<Array<Chat>>(chatsMock);
  const [ canais , setCanais ] = useState<Array<Canal>>(canaisMock);
  const [ openChat , setOpenChat ] = useState<Chat|undefined>();
  const [ selectCanal , setSelectCanal ] = useState<Canal>({id: 1, nome: 'whatsapp'});
  const [ selectConfig , setSelectConfig ] = useState<ChatConfig|undefined>();
  const [ modalAnexoOpen , setModalAnexoOpen ] = useState<boolean>(false);
  const [ anexoOpen , setAnexoOpen ] = useState<Anexo|undefined>();
  const [ status, setStatus ] = useState<Array<Status>>(statusMock)
  const [ openInfoBar, setOpenInfoBar ] = useState<boolean>(false)

  const sendMessage = function (e: any) {
    if (selectConfig && openChat) {
      const newOpenChat = { ...openChat }

      const newMessage: Mensagem = {
        id: getNewId(),
        mensagem: e.target.messageText.value,
        chat_config_id: selectConfig.id,
        chat_id: openChat.id,
        lida: false,
        from_assistido: false,
        data_hora: moment().format('YYYY-MM-DD HH:mm:ss'),
        ack: 2
      }

      if (e.target.inputFile.files.length > 0) {
        getBase64(e.target.inputFile.files[0], (result: any) => {
          const anx = {
            id: 999,
            mensagem_id: 999,
            tipo: getFileType(result),
            file: result
          }
          newMessage.anexo = anx
          newOpenChat.mensagens.push(newMessage)
          setOpenChat(newOpenChat)
          saveChat(newOpenChat)
        })
      } else {
        newOpenChat.mensagens.push(newMessage)
        setOpenChat(newOpenChat)
        saveChat(newOpenChat)
      }
    }
  }

  const saveChat = function(newChat: Chat){
    if(newChat){
      const newChats = [...chats]
      const chatIndex = newChats.findIndex(chat => chat.id == openChat?.id)
      
      newChats.splice(chatIndex, 1, newChat);
      setChats(newChats)
    }
    
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
    return openChat?.mensagens.reduce((max, obj) => {
      return obj.id > max ? obj.id : max;
    }, -Infinity) ?? 999;
  }

  return (
    <ChatContext.Provider 
      value={{ 
          chats,setChats,
          openChat, setOpenChat,
          canais, setCanais,
          selectConfig, setSelectConfig,
          selectCanal, setSelectCanal,
          modalAnexoOpen , setModalAnexoOpen,
          anexoOpen , setAnexoOpen,
          status, setStatus,
          openInfoBar, setOpenInfoBar,
          sendMessage,saveChat,
      }}>
        {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext)
  return context;
};
