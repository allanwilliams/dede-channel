import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Chat } from "@/interfaces/chat";
import { useChatContext } from '@/contexts/chat';
type props = {
    chat: Chat
}

function Chat({chat}: props) {
    const { setOpenChat, setSelectCanal, canais, openChat } = useChatContext()

    const handleOpenChat = function(chat: Chat){
        if(!openChat ||  openChat.id != chat.id){
            const newChat = JSON.parse(JSON.stringify(chat))
            setOpenChat(newChat)
            setSelectCanal(canais[0])
        }
    }

    const getBadgeNum = function(chat: Chat){
        return chat.mensagens.filter(c => !c.lida).length
    }

    return (
        <div onClick={()=>{handleOpenChat(chat)}} role="button" className="d-flex align-items-center p-2 border-bottom border-white">
            <Col xs={2}>
                <Image roundedCircle thumbnail width={60} src='dist/img/avatar.png' />
            </Col>
            <div className="d-flex justify-content-between w-100">
                <div>{chat.assistido.nome}</div>
                <div><Badge pill>{getBadgeNum(chat)}</Badge></div>
            </div>
        </div>
    )
}

export default Chat;