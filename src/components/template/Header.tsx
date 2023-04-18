import { useBase } from '../../contexts/base';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { format } from 'date-fns';

export default function Header(){

    const {menuOpen, setMenuOpen} = useBase();
    const dateFns = format(new Date(), 'dd/MM/yyyy')

    function gerenciaLayout(){
      setMenuOpen(!menuOpen);
      const size = menuOpen ? '0px' : '250px'; 
      document.documentElement.style.setProperty('--margin-content-size', size);
    }

    return (
      <Nav
        activeKey=""
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="main-header navbar navbar-expand navbar-white navbar-light"
      >
        <Nav.Item  className="nav-item">
          <Nav.Link onClick={() => gerenciaLayout()}>
            <i className='fa fa-bars pointer text-success' />
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="justify-content-end">
          {dateFns}
        </Nav.Item>
      </Nav>
    )
}
