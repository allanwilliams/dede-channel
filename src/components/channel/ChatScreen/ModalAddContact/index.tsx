import React, { useRef, useState } from 'react';
import { useChatContext } from '@/contexts/chat'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form as FormBS } from 'react-bootstrap';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form as Unform } from '@unform/web'
import Input from "@/components/forms/Input"
import getValidationErrors from '@/utils/getValidationErrors'
import Select from '@/components/forms/Select';

export default function ModalAddContact() {
  const {
    setChats, selectCanal, tiposContato, openChat, addContato
  } = useChatContext();

  const formRef = useRef<FormHandles>(null);

  const [modalOpen, setModalOpen] = useState(false)

  const FecharModal = () => setModalOpen(false);
  const AbrirModal = () => setModalOpen(true);

  const handleSubmitNewContato = async (e: any) => {
    try {
      console.log(e)
      formRef.current?.setErrors({});
      interface objectShape {
        [key: string]: any
      }
      const obj: objectShape = {}

      obj.chave_cliente_canal = Yup.string().required('Campo obrigatório')
      obj.tipo_contato_id = Yup.string().required('Campo obrigatório')

      const schema = Yup.object().shape(obj);
      await schema.validate(e, { abortEarly: false, });

      const newContato = {
        chat_id: openChat?.id,
        canal_id: selectCanal.id,
        chave_cliente_canal: e.chave_cliente_canal,
        tipo_contato_id: e.tipo_contato_id
      }
      addContato(newContato)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err)
        const errors = getValidationErrors(err);
        console.log(errors)
        formRef.current?.setErrors(errors);
        return;
      }
    }
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
          <Unform ref={formRef} id='form-create-contato' name='form-create-contato' onSubmit={handleSubmitNewContato}>
            Canal: {selectCanal?.nome.toUpperCase()}<br />
            <Input labelText='Contato *' placeholder='Contato' name='chave_cliente_canal' type={`${selectCanal?.nome.toLocaleUpperCase() == 'EMAIL' ? 'email' : 'text'}`} />
            <FormBS.Label>Tipo contato *</FormBS.Label>
            <Select name='tipo_contato_id' options={tiposContato.map((a:any) =>{ return {'label': a.nome, 'value': a.id} })} />
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

