import React, { useRef, useState } from 'react';
import { useChatContext } from '@/contexts/chat'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form as FormBS, NavDropdown } from 'react-bootstrap';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form as Unform } from '@unform/web'
import TextArea from '@/components/forms/TextArea';
import getValidationErrors from '@/utils/getValidationErrors'

export default function ModalGravarAtendimento() {
  const {
    setChats, selectCanal, tiposContato, openChat, addContato, status
  } = useChatContext();

  const formRef = useRef<FormHandles>(null);

  const [modalOpen, setModalOpen] = useState(false)

  const FecharModal = () => setModalOpen(false);
  const AbrirModal = () => setModalOpen(true);

  const handleSubmitFinalizarAtendimento = async (e: any) => {
    try {
      formRef.current?.setErrors({});
      interface objectShape {
        [key: string]: any
      }
      const obj: objectShape = {}

      obj.status_id = Yup.string().required('Campo obrigatório')

      const schema = Yup.object().shape(obj);
      await schema.validate(e, { abortEarly: false, });

      const newContato = {
        chat_id: openChat?.id,
        canal_id: selectCanal.id,
        chave_cliente_canal: e.target.chave_cliente_canal.value,
        tipo_contato_id: e.target.tipoContato.value
      }
      addContato(newContato)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
    }
  }

  return (
    <>
      <NavDropdown.Item onClick={()=>{AbrirModal()}}>Gravar atendimento</NavDropdown.Item>
      <Modal
        show={modalOpen}
        onHide={FecharModal}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
          <Modal.Title>Finalizar Atendimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Unform ref={formRef} id='form-finalizar-atendimento' name='form-finalizar-atendimento' onSubmit={handleSubmitFinalizarAtendimento}>
            Canal: {selectCanal?.nome.toUpperCase()}<br />
            <FormBS.Label>Status</FormBS.Label>
            <FormBS.Select name='status_id' className="form-control">
              <option>Selecione o status do atendimento</option>
              {status.map((s, index) => (
                <option key={index} value={s.id}>{s.nome}</option>
                ))}
            </FormBS.Select>
            <FormBS.Label>Anotação</FormBS.Label>
            <TextArea name='anotacao' />
          </Unform>
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

