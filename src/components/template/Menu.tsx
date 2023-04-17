import { useBase } from '../../contexts/base';
import React from 'react';
import 'animate.css';


export default function Menu() {

    const {menuOpen} = useBase();

    let classeAnimada = 'main-sidebar background-principal elevation-4 animate__animated '
    if (menuOpen){
        classeAnimada += ' animate__slideInLeft'
    }else{ 
        classeAnimada += ' animate__slideOutLeft'
    }

    return (
        <div className={classeAnimada}>
                <a href="" className="brand-link">
                    <img src="dist/img/logo_nossa_menu.png" alt="Nossa Defensoria" className="brand-image" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light"> -  </span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">                            
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Item Novo
                                        <span className="right badge badge-primary">Novo</span>
                                    </p>
                                </a>
                            </li>
                            <li><hr/></li>
                            <li className="nav-header">Gestão de Pessoas</li>
                            <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>Recursos Humanos</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>Processo Digital</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>Portal</p>
                                </a>
                            </li>
                            <li><hr/></li>
                            <li className="nav-header">Financeiro</li>
                            <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>DAES</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h" />
                                    <p>SIA</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
    )

    // return (
    //     <>
    
        
    //     {/* <Offcanvas show={menuOpen} responsive="lg">
    //         <Offcanvas.Header closeButton>
    //             <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
    //         </Offcanvas.Header>
    //         <Offcanvas.Body>
                
    //         </Offcanvas.Body>
    //     </Offcanvas> */}

            
    //     {/* <Offcanvas show={menuOpen} 
    //         backdrop="static">
    //         <Offcanvas.Header closeButton>
    //             <Offcanvas.Title>Menu</Offcanvas.Title>
    //         </Offcanvas.Header>
    //         <Offcanvas.Body>
                
    //         </Offcanvas.Body>
    //     </Offcanvas> */}
    //   </>

    // )
}
