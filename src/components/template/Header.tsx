import React, { Component, useEffect } from 'react';
import { useBase } from '../../contexts/base';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { format } from 'date-fns';

export default function Header(){

    const {menuOpen, setMenuOpen} = useBase();
    const dateFns = format(new Date(), 'dd/MM/yyyy')
    const navDropdownNotificacao = (<i className='fa fa-bell text-success pointer animate__animated animate__infinite animate__tada' />);
    const navDropdownPerfil = (<i className='fa fa-user text-success pointer' />);


    useEffect(() => {
      if (window.innerWidth <= 770) {
        gerenciaLayout()
      }
    }, []);

    function gerenciaLayout(){
      setMenuOpen(!menuOpen);
      const size = menuOpen ? '0px' : '250px'; 

      if (window.innerWidth <= 770) {
        const sizeMenu = menuOpen ? '-250px' : '0px'; 
        let menuLateral =  document.getElementsByClassName('main-sidebar') as HTMLCollectionOf<HTMLElement>
        menuLateral[0].style.setProperty("margin-left", sizeMenu);

      }

      
      document.documentElement.style.setProperty('--margin-content-size', size);
    }

    return (<>
      <Nav
        activeKey=""
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="main-header navbar navbar-expand background-secundario"
      >
        <Nav.Item  className="nav-item">
          <Nav.Link onClick={() => gerenciaLayout()}>
            <i className='fa fa-bars pointer text-success' />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="justify-content-end">
          {dateFns}
        </Nav.Item>

        <NavDropdown title={navDropdownNotificacao} id="collasible-nav-dropdown-notificacao">
              <NavDropdown.Item href="#action/3.1">Notificação 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Notificação 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Notificação 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Marcar todas como lida
              </NavDropdown.Item>
        </NavDropdown>


        <NavDropdown title={navDropdownPerfil} id="collasible-nav-dropdown-perfil">
              <NavDropdown.Item href="/">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
        </NavDropdown>


        {/* <Nav.Item className="float-right justify-content-end">
          <i className='fa fa-power-off pointer text-success' />
        </Nav.Item> */}
      </Nav>
      </>)
}
