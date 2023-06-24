export interface ChatConfig {
    id: number,
    canal: Canal,
    chave_cliente_canal: string
}

export interface Chat {
    id: number,
    assistido: Assistido,
    mensagens: Array<Mensagem>,
    configuracoes_chat: Array<ChatConfig>,
    status_id: number
}

export interface Assistido {
    id: number,
    nome: string
}

export interface Mensagem {
    id: number,
    mensagem: string,
    chat_config_id: number,
    chat_id: number,
    lida: boolean,
    from_assistido: boolean,
    data_hora: string,
    ack: number,
    anexo?: Anexo
}

export interface Canal {
    id: number,
    nome: String
}

export interface Anexo {
    id: number,
    mensagem_id: number,
    file: string,
    tipo: number
}

export interface Status {
    id: number,
    nome: string
}