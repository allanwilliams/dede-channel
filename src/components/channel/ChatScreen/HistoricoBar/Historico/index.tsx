import { Historico } from "@/interfaces/chat"

type props = {
    historico: Historico
}

function Historico({ historico }: props){
    return <div>
            {historico.comentario}
        </div>

}

export default Historico