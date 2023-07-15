interface DefaultFields {
    id?: string|undefined,
    criado_em?: string,
    modificado_em?: string,
    criado_por_id?: string,
    modificado_por_id?: string;
}

interface DefaultSimpleClass extends DefaultFields {
    nome: string
}


export interface TipoContato extends DefaultSimpleClass { }

export interface ChatConfig extends DefaultFields {
    canal: Canal,
    chave_cliente_canal: string,
    tipo_contato_id: string,
}

export interface Chat extends DefaultFields {
    Assistido?: Assistido,
    Mensagem: Array<Mensagem>,
    ChatConfig: Array<ChatConfig>,
    status_id: string,
    usuario_id?: string, //alterar para modelo
    ultima_interacao_assistido?: string,
    ultima_interacao_usuario?: string,
    em_fila?: boolean,
    Historico?: Array<Historico>,
}

export interface Assistido extends DefaultFields {
    nome: string,
    cpf?: string,
    chat_id: string,
}

export interface Mensagem extends DefaultFields {
    mensagem: string,
    chat_config_id?: string,
    chat_id?: string,
    canal_id?: string,
    lida: boolean,
    from_assistido: boolean,
    from_bot?: boolean,
    usuario_id?: string,
    ack: number,
    anexo?: Anexo,
    oculta?: boolean,
}

export interface Canal extends DefaultSimpleClass {}

export interface Anexo extends DefaultFields {
    mensagem_id: string,
    file: string,
    tipo: number
}

export interface Status extends DefaultSimpleClass { }

export interface Historico extends DefaultFields {
    chat_id: string,
    usuario_id: string,
    status_id: string,
    finalizacao_id: string,
    anotacao: string,
    protocolo: string,
    chat_config_id: number
}

export interface Finalizacao extends DefaultSimpleClass { }

export interface Usuario extends DefaultFields {
    nome: string;
    cpf?: string;
    matricula?: string;
}