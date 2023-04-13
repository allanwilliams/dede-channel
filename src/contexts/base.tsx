import React, { createContext, useState, useEffect, useContext } from 'react';

interface BaseContextData {
  modalOpen: boolean;
  alertOpen: boolean;
  modalText: string;
  alertText: string;
  alertVariant: string;
  setModalOpen: Function;
  setModalText: Function;
  setAlertOpen: Function;
  setAlertText: Function;
  setAlertVariant: Function;
};

const BaseContext = createContext<BaseContextData>({} as BaseContextData);
type Props = { children: JSX.Element};

export const BaseProvider: React.FC<Props> = ({ children }) => {

  const [ modalOpen, setModalOpen ] = useState<boolean>(false)
  const [ modalText, setModalText ] = useState<string>('')
  const [ alertOpen, setAlertOpen ] = useState<boolean>(false)
  const [ alertText, setAlertText ] = useState<string>('')
  const [ alertVariant, setAlertVariant ] = useState<string>('')
  
  
    useEffect(() => {
    }, [])

  return (
    <BaseContext.Provider 
      value={{ 
          modalOpen,
          modalText,
          alertOpen,
          alertText,
          alertVariant,
          setModalOpen,
          setModalText,
          setAlertOpen,
          setAlertText,
          setAlertVariant
      }}>
        {children}
    </BaseContext.Provider>
  );
}

export function useBase() {
  const context = useContext(BaseContext)
  return context;
};
