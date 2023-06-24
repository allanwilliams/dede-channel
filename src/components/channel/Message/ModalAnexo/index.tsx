import { Anexo } from '@/interfaces/chat';
import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useChatContext } from '@/contexts/chat';

export default function ModalAnexo() {
  const {
    modalAnexoOpen, setModalAnexoOpen,
    anexoOpen
 } = useChatContext()

  const FecharModal = () => setModalAnexoOpen(false);
  const AbrirModal = () => setModalAnexoOpen(true);

  return (
    <>
        <Modal 
            className='modalChatAnexo'
            show={modalAnexoOpen} 
            onHide={FecharModal} 
            animation={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen={true}
        >   
            <embed height={'100%'} src={`${anexoOpen?.file}`} />
        </Modal>
    </>
  );
}

