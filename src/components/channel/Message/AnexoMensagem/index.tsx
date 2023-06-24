import { useChatContext } from "@/contexts/chat"
import { Anexo } from "@/interfaces/chat"
import { Image } from "react-bootstrap"

type props = {
    anexo: Anexo
}
function AnexoMensagem({anexo}:props){
    const { setModalAnexoOpen, setAnexoOpen } = useChatContext()

    const getAnexoComponente = function(anexo: Anexo){
        if (anexo.tipo == 1) return <Image role="button" onClick={()=>handleOpenAnexo(anexo)} width={170} height={150} src={`${anexo?.file}`} />
        if (anexo.tipo == 2) return <Image role="button" onClick={()=>handleOpenAnexo(anexo)} width={170} height={150} src='/dist/img/pdf-icon.png' />
    }

    const handleOpenAnexo = function(anexo: Anexo|undefined){
        setModalAnexoOpen(true)
        setAnexoOpen(anexo)
    }

    return  <>{getAnexoComponente(anexo)}</>
}

export default AnexoMensagem