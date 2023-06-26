import { Button, Form, Image } from "react-bootstrap"
import { useChatContext } from "@/contexts/chat"
import Historico from "./Historico"

function HistoricoBar(){
    const { openChat, openHistoricoBar, setOpenHistoricoBar } = useChatContext()

    return (<>{openChat && openHistoricoBar && <div className="d-flex flex-column border w-25 h-100 p-3">    
            {openChat.historicos?.map((historico,index) => (
                <Historico historico={historico} />
            ))}
        </div>
    }</>)
}

export default HistoricoBar