import { useBase } from '../../contexts/base';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Header(){

    const {menuOpen, setMenuOpen} = useBase();

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
          <Nav.Link onClick={() => gerenciaLayout()}><i className='pointer fa fa-bars' /></Nav.Link>
        </Nav.Item>
      </Nav>
    )
}
