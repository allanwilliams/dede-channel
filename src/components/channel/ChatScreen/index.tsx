import Message from "../Message";
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useChatContext } from "@/contexts/chat";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Mensagem } from "@/interfaces/chat";
import { NavDropdown } from "react-bootstrap";

function ChatScreen() {
    const formRef = useRef<HTMLFormElement>(null)
    const [anexosFile, setAnexosFile] = useState<Array<File>>()
    const {
        openChat, setOpenChat,
        selectConfig, setSelectConfig,
        selectCanal,
        openInfoBar, setOpenInfoBar,
        sendMessage,
    } = useChatContext()

    useEffect(() => {
        if(!selectConfig || openChat?.configuracoes_chat.map(config => {if (config.id && config.canal.id == selectCanal.id) return config.id}).indexOf(selectConfig.id) == -1 ){
            const firstConfig = openChat?.configuracoes_chat.filter(config => config.canal.id == selectCanal.id)[0]
            setSelectConfig(firstConfig)
        }
    }, [selectCanal,openChat])
    

    const chatsPerChannel = function(channel_id: number){
        if (openChat) return openChat.configuracoes_chat.filter(config => config.canal.id == channel_id).length
    }

    const handleSendMessage = function(e: any){
        e.preventDefault();
        sendMessage(e)
        if (formRef && formRef.current ) formRef.current.reset()
        // setAnexosFile(undefined)

    }

    const handleOpenInfoBar = function(){
        if (openChat) setOpenInfoBar(!openInfoBar)
    }
    
    function handleFileChange(e: any){
        e.preventDefault()
        if(e.target){
            setAnexosFile(e.target.files)
        }
    }

    const showMessages = openChat?.mensagens.filter(mensagem => mensagem.chat_config_id == selectConfig?.id )


    return (
        <div className="d-flex flex-column border w-75 h-100">
            <div className="d-flex justify-content-between p-3">
                <div role='button' onClick={handleOpenInfoBar} className="d-flex align-items-center">
                    <Image className="mr-2" roundedCircle thumbnail width={45} src='dist/img/avatar.png' />
                    <div>{openChat?.assistido.nome}</div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <NavDropdown title={<span><i className='fa fa-ellipsis-h fa-rotate-90' /></span>} id="collasible-nav-dropdown-notificacao">
                        <NavDropdown.Item href="#action/3.1">Notificação 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Notificação 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Notificação 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Marcar todas como lida
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
            <div style={{'overflow': 'scroll',  'backgroundImage': `url(/dist/img/background-chat.png/)` }} className="d-flex bg-secondary flex-column h-100 p-3">
                { showMessages?.map((mensagem,index) => (
                    <Message key={index} mensagem={mensagem} />
                ))}
            </div>
            <Form ref={formRef} onSubmit={handleSendMessage}>
                <div className="d-flex w-100 align-items-center justify-content-between p-3 gap-1 bg-secondary border-top">
                    <label className="btn btn-primary" role='button' htmlFor='inputFile'><i className='fa fa-paperclip' /></label>
                    <input multiple id='inputFile' name='inputFile' style={{'display':'none'}} type='file' />
                    <textarea name='messageText' style={{'resize': 'none'}} className="form-control w-100" rows={2} />
                    <label><button className="btn btn-primary"><i className='fa fa-paper-plane' /></button></label>
                </div>
            </Form>
        </div>
    )
}

export default ChatScreen;