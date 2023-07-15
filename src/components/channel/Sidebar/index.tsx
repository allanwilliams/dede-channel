import Chat from "../Chat";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useChatContext } from "@/contexts/chat";
import { useState } from "react";

function Sidebar() {
    const { chats } = useChatContext()

    const [filterChat, setFilterChat] = useState<string>('')

    const filteredChats = chats.filter(chat => { 
        if (filterChat) return chat.Assistido?.nome.toLocaleLowerCase().includes(filterChat.toLocaleLowerCase())
        return chat
    })
    

    return (
        <div className="d-flex flex-column w-25 h-100">
            <div className="d-flex w-100 justify-content-between p-3">
                <div className="d-flex align-items-center">
                    <Image className="mr-2" roundedCircle thumbnail width={45} src='dist/img/avatar.png' />
                    <span>Allan Williams</span>
                </div>
                <span><i className='fa fa-ellipsis-h fa-rotate-90' /></span>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className='fa fa-search' /></span>
                </div>
                <input className="form-control mr-2" value={filterChat} onChange={(e)=>{setFilterChat(e.target.value)}} type="text" placeholder="Pesquisar uma conversa" />
            </div>
            <div style={{'overflow': 'scroll'}} className="border mr-2 h-100">
                {filteredChats.map(chat =>(
                    <Chat key={chat.id} chat={chat} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;