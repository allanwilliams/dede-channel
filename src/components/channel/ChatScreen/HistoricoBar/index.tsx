import { Button, Form, Image } from "react-bootstrap"
import { useChatContext } from "@/contexts/chat"
import Historico from "./Historico"

function HistoricoBar(){
    const { openChat, openHistoricoBar, setOpenHistoricoBar } = useChatContext()

    return (<>
            {openChat && openHistoricoBar && <div className="d-flex flex-column border w-25 h-100 p-3">
                <h1 className="text-center">Históricos <i onClick={()=> setOpenHistoricoBar(false)} className="fa fa-times fa-xs"></i></h1>
                <div className="overflow-auto">
                    {openChat.Historico?.map((historico,index) => (
                        <Historico key={index} historico={historico} />
                    ))}
                </div>
            </div>
            }</>)
}

export default HistoricoBar