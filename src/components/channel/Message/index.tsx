import { Mensagem } from "@/interfaces/chat";
import moment from "moment";
import AnexoMensagem from "./AnexoMensagem";

type props = {
    mensagem: Mensagem
}

function Message({ mensagem }: props) {
    const getSender = function(mensagem: Mensagem) {
        return mensagem.from_assistido ? 'align-self-start' : 'align-self-end'
    }

    const getTime = function(mensagem: Mensagem) {
        const hoje = moment()
        const hr = moment(mensagem.criado_em, 'YYYY-MM-DD HH:mm:ss')
        const format = hoje.isSame(hr,'day') ? 'HH:mm' : 'DD/MM/YYYY HH:mm'
        return hr.format(format)
    }

    const getAckFlag = function(ack: number){
        if(ack == 0) return <span><i className="fa fa-check"></i></span>
        if(ack == 1) return <span><i className="fa fa-check-double"></i></span>
        if(ack == 2) return <span><i style={{"color": "#53bdeb"}} className="fa fa-check-double"></i></span>
        if(ack == 3) return <span><i className="fa fa-xmark"></i></span>
    }

    

    return (
        <div style={{'backgroundColor': '#005c4b'}} className={`d-flex flex-column border justify-content-around w-25 mw-100 border-radius rounded p-2 m-1 ${getSender(mensagem)}`}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {mensagem.anexo && 
                    <AnexoMensagem anexo={mensagem.anexo} />
                }
            </div>
            <div>
                {mensagem.mensagem}
            </div>
            <div className="align-self-end">
                <small>{getTime(mensagem)} {getAckFlag(mensagem.ack)}</small>
                
            </div>
        </div>
    )
}

export default Message;
