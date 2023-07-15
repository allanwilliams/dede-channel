import { Button, Form, Image } from "react-bootstrap"
import ModalAddContact from "../ModalAddContact"
import { useChatContext } from "@/contexts/chat"

function InfoBar(){
    const { 
        selectCanal, canais,
        openChat, setOpenChat,
        setSelectCanal, setSelectConfig,
        status, openInfoBar,
        saveChat, tiposContato
    } = useChatContext()

    const handleChannelChange = function(value: any){
        setSelectCanal(canais.filter(c => c.id == value)[0])
    }

    const handleConfigChange = function(value: any){
        setSelectConfig(openChat?.ChatConfig.find(config => config.id == value))
    }

    const handleOnChangeFormOpenChat = (e: any)=>{
        const updateNestedProperty = (obj: any, string: string, value: any) => {
            const props = string.split('.');
            const lastProp = props.pop();
            const targetObj = props.reduce((acc, curr) => acc[curr], obj);
            if (targetObj && lastProp) targetObj[lastProp] = value;
        };
          
        const newOpenChat = JSON.parse(JSON.stringify(openChat))
        updateNestedProperty(newOpenChat, e.target.name, e.target.value);
        setOpenChat(newOpenChat)
    }

    const handleSaveChat = function(){
        saveChat(openChat,true)
    }

    const configsPerChannel = openChat?.ChatConfig.filter(config => config.canal.id == selectCanal?.id)

    const getTipoContato = (id: string) => tiposContato.filter(t => t.id == id)[0].nome


    return (<>{openChat && openInfoBar && <div className="d-flex flex-column border w-25 h-100 p-3">
        
            <>
                <div className="form-group">
                    <Form.Label>Canais</Form.Label>
                    <Form.Select
                        className="form-control"
                        value={selectCanal?.id}
                        onChange={(e)=>{handleChannelChange(e.target.value)}}
                    >
                        {canais.map(canal => (
                            <option key={canal.id} value={canal.id}>{canal.nome.toUpperCase()}</option>
                        ))}
                    </Form.Select>
                </div>
                <div className="form-group">
                    <Form.Label>Contatos</Form.Label>
                    <Form.Select className="form-control" onChange={(e)=>{handleConfigChange(e.target.value)}}>
                        {configsPerChannel?.map(config => (
                            <option key={config.id} value={config.id}>{config.chave_cliente_canal} - {getTipoContato(config.tipo_contato_id)} </option>
                        ))}
                    </Form.Select>
                    {['WHATSAPP','EMAIL'].includes(selectCanal.nome.toUpperCase()) && 
                        <ModalAddContact />
                    }
                </div>
                <hr/>
                <h2>Dados do assistido</h2>
                <div className="form-group">
                    <div className="d-flex justify-content-center">
                        <Image className="mr-2" roundedCircle thumbnail width={90} src='dist/img/avatar.png' />
                    </div>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name='Assistido.nome' className="form-control" value={openChat.Assistido?.nome} onChange={handleOnChangeFormOpenChat} />
                    <Form.Label>Status</Form.Label>
                    <Form.Select name='status_id' className="form-control" value={openChat.status_id} onChange={handleOnChangeFormOpenChat}>
                        {status?.map(state => (
                            <option key={state.id} value={state.id}>{state.nome} </option>
                        ))}
                    </Form.Select>
                </div>
                <Button onClick={handleSaveChat} className="btn-block btn-success">Gravar</Button>
            </>
        </div>
    }</>)
}

export default InfoBar