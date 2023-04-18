import React from 'react';
import { useBase } from '../../contexts/base';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalBootstrap() {
  const {
    modalOpen, 
    setModalOpen, 
    modalText, 
    setModalText
  } = useBase();
  
  const FecharModal = () => setModalOpen(false);
  const AbrirModal = () => setModalOpen(true);

  return (
    <>
      <Button variant="primary" onClick={AbrirModal}>
        <i className='fa fa-eye' /> Ver mais
      </Button>

      <Modal 
        show={modalOpen} 
        onHide={FecharModal} 
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          
        <Modal.Header closeButton>
          <Modal.Title>SISTEMAS</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={FecharModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={FecharModal}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

