import React, { useEffect } from 'react';
import { useBase } from '../../contexts/base'
import ModalSistema from '../../components/modal/Modal';
import BoxInfo from '@/components/box/BoxInfo';

export default function Inicial() {
    const { setModalText, setAlertOpen, setAlertText, setAlertVariant } = useBase();

    useEffect(() => {
        setAlertOpen(true);
        setAlertVariant('primary');
        setAlertText('Olá, sou um alert contextualizado!')
        setModalText('asasssdsdaas');
    }, [])

    return (
        <div>

            <section className="content">
                            
                <BoxInfo/>

                <hr/>

                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <ModalSistema/>
                    </div>
                </div>
                

            </section>
        </div>
    )
  }
