import React, { createContext, useState, useEffect, useContext } from 'react';

interface BaseContextData {
  modalOpen: boolean;
  alertOpen: boolean;
  modalText: string;
  alertText: string;
  setModalOpen: Function;
  setModalText: Function;
  setAlertOpen: Function;
  setAlertText: Function;
};

const BaseContext = createContext<BaseContextData>({} as BaseContextData);
type Props = { children: JSX.Element};

export const BaseProvider: React.FC<Props> = ({ children }) => {

  const [ modalOpen, setModalOpen ] = useState<boolean>(false)
  const [ modalText, setModalText ] = useState<string>('')

  const [ alertOpen, setAlertOpen ] = useState<boolean>(false)
  const [ alertText, setAlertText ] = useState<string>('')
  
    useEffect(() => {
    }, [])

  return (
    <BaseContext.Provider 
      value={{ 
          modalOpen,
          modalText,
          alertOpen,
          alertText,
          setModalOpen,
          setModalText,
          setAlertOpen,
          setAlertText
      }}>
        {children}
    </BaseContext.Provider>
  );
}

export function useBase() {
  const context = useContext(BaseContext)
  return context;
};
