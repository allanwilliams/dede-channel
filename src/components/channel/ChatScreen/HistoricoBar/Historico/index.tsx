import { Historico } from "@/interfaces/chat"

type props = {
    historico: Historico
}

function Historico({ historico }: props){
    return <fieldset className="form-group border p-2 rounded">
            <legend className="text-center w-auto">{historico.protocolo}</legend>
            <div className="d-flex gap-1">
                <label>Anotação: </label>
                {historico.anotacao}
            </div>
            <div className="d-flex gap-1">
                <label>Data: </label>
                {historico.criado_em}
            </div>
        </fieldset>
}

export default Historico