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
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Tela Inicial </h1>                            
                        </div>
                    </div>
                </div>
            </div>

            <section className="content">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <ModalSistema/>
                    </div>
                </div>
                            
                <BoxInfo/>
                                 
            </section>
        </div>
    )
  }
