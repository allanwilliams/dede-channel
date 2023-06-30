interface DefaultFields {
    id: number,
    criado_em?: string,
    atualizado_em?: string,
    criado_por_id?: number,
    atualizado_por_id?: number
}

interface DefaultSimpleClass extends DefaultFields {
    nome: string
}

export interface ChatConfig extends DefaultFields {
    canal: Canal,
    chave_cliente_canal: string
}

export interface Chat extends DefaultFields {
    assistido: Assistido,
    mensagens: Array<Mensagem>,
    configuracoes_chat: Array<ChatConfig>,
    status_id: number,
    usuario_id?: number, //alterar para modelo
    ultima_interacao_assistido?: string,
    ultima_interacao_usuario?: string,
    em_fila?: boolean,
    historicos?: Array<Historico>,
}

export interface Assistido extends DefaultFields {
    nome: string,
    cpf?: string,
}

export interface Mensagem extends DefaultFields {
    mensagem: string,
    chat_config_id: number,
    chat_id: number,
    canal_id?: number,
    lida: boolean,
    from_assistido: boolean,
    from_bot?: boolean,
    usuario_id?: number,
    data_hora: string,
    ack: number,
    anexo?: Anexo,
    oculta?: boolean,
}

export interface Canal extends DefaultSimpleClass {}

export interface Anexo extends DefaultFields {
    mensagem_id: number,
    file: string,
    tipo: number
}

export interface Status extends DefaultSimpleClass { }

export interface Historico extends DefaultFields {
    chat_id: number,
    usuario_id: number,
    status_id: number,
    finalizacao_id: number,
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