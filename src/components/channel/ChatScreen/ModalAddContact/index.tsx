import React, { useState } from 'react';
import { useChatContext } from '@/contexts/chat'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

export default function ModalAddContact() {
  const {
    setChats, selectCanal, tiposContato, openChat, addContato
  } = useChatContext();
  
  const [modalOpen, setModalOpen] = useState(false)

  const FecharModal = () => setModalOpen(false);
  const AbrirModal = () => setModalOpen(true);

  const handleSubmitNewContato = (e: any) => {
    e.preventDefault()
    const newContato = {
      chat_id: openChat?.id,
      canal_id: selectCanal.id,
      chave_cliente_canal: e.target.chave_cliente_canal.value,
      tipo_contato_id: e.target.tipoContato.value
    }
    console.log('aquiuui')
    addContato(newContato)
  }

  return (
    <>
      <Button className='float-right mt-2' variant="primary" onClick={AbrirModal}>
        <i className='fa fa-plus' /> Novo contato
      </Button>

      <Modal 
        show={modalOpen} 
        onHide={FecharModal} 
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          
        <Modal.Header closeButton>
          <Modal.Title>Novo contato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id='form-create-contato' name='form-create-contato' onSubmit={handleSubmitNewContato}>
            Canal: {selectCanal?.nome.toUpperCase()}<br/>
            <Form.Label>Contato</Form.Label>
            <Form.Control name='chave_cliente_canal' type={`${selectCanal?.nome.toLocaleUpperCase() == 'EMAIL' ? 'email' : 'text'}`} className="form-control"  />
            <Form.Label>Tipo contato</Form.Label>
            <Form.Select name='tipoContato' className="form-control">
              <option>Selecione o tipo de contato</option>
              {tiposContato.map((tp,index) => (
                <option key={index} value={tp.id}>{tp.nome}</option>
              ))}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={FecharModal}>
            Fechar
          </Button>
          <Button type='submit' form='form-create-contato' variant="primary">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

