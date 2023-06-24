import { getToken } from '@/services/auth';
import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api'
import feriadoService from '../services/feriado'
import {IEvento} from '../interfaces/IEvento'
import { IFeriado } from '@/interfaces/IFeriado';
import debounce from 'lodash.debounce';

interface BaseContextData {
  modalOpen: boolean;
  alertOpen: boolean;
  menuOpen: boolean;
  weekendsVisible: boolean;
  modalText: string;
  alertText: string;
  currentEvents: Array<IEvento>;
  alertVariant: string;
  setModalOpen: Function;
  setModalText: Function;
  setAlertOpen: Function;
  setAlertText: Function;
  setAlertVariant: Function;
  setMenuOpen: Function;
  obterFeriados: Function;
  setWeekendsVisible: Function;
  setCurrentEvents: Function;
};

const BaseContext = createContext<BaseContextData>({} as BaseContextData);
type Props = { children: JSX.Element};

export const BaseProvider: React.FC<Props> = ({ children }) => {

  const [ modalOpen, setModalOpen ] = useState<boolean>(false)
  const [ modalText, setModalText ] = useState<string>('')
  const [ alertOpen, setAlertOpen ] = useState<boolean>(false)
  const [ menuOpen,  setMenuOpen  ] = useState<boolean>(true)
  const [ alertText, setAlertText ] = useState<string>('')
  const [ alertVariant, setAlertVariant ] = useState<string>('')
  const [ weekendsVisible , setWeekendsVisible] = useState<boolean>(true);
  const [ currentEvents , setCurrentEvents] = useState<Array<IEvento>>([]);

  useEffect(
    debounce(() => {
      // getNewToken()
    }, 300), 
    []
  );


  function getNewToken(){
    getToken('dona.dede','dpgeceti')
    .then((response) => {
      const { access } = response.data
      api.defaults.headers.common.Authorization = `Bearer ${access}`
      setModalOpen(false)
      obterFeriados()
    })
    .catch((erro) => {
      setModalText('Sistema temporariamente indisponivel')  
      setModalOpen(true)
    })
  }

  function obterFeriados(){
    return feriadoService.obterFeriados()
    .then(response => {
      const {data: { results }} = response
      if(results) {

          results.map((feriado: IFeriado) => {
            setCurrentEvents(events => [...events, {
              id: feriado.id,
              title: feriado.descricao,
              start: ajustarData(feriado.dia, feriado.mes)
            }]);
          });
        
      }


    })
    .catch(err => console.log(err))
  }

  function ajustarData(dia: number, mes: number){
    let ano_atual = new Date().getFullYear();
    let mes_fix = mes.toString().padStart(2, '0');
    let dia_fix = dia.toString().padStart(2, '0');
    let dataAjustada = ano_atual+"-"+mes_fix+"-"+dia_fix;
    return  dataAjustada;
  }


  return (
    <BaseContext.Provider 
      value={{ 
          modalOpen,
          modalText,
          alertOpen,
          menuOpen,
          alertText,
          alertVariant,
          weekendsVisible,
          currentEvents,
          setModalOpen,
          setModalText,
          setAlertOpen,
          setAlertText,
          setAlertVariant,
          setMenuOpen,
          obterFeriados,
          setWeekendsVisible,
          setCurrentEvents
      }}>
        {children}
    </BaseContext.Provider>
  );
}

export function useBase() {
  const context = useContext(BaseContext)
  return context;
};
