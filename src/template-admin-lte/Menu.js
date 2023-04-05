import React, { Component } from 'react'
import Link from 'next/link';
export default class Menu extends Component {
  render() {
    return (
        <div>
            <aside className="main-sidebar background-principal elevation-4">
                <a href="" className="brand-link">
                    <img src="dist/img/logo_nossa_menu.png" alt="Nossa Defensoria" className="brand-image elevation-1" style={{ opacity: '.8' }} />
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
            </aside>
        </div>

    )
  }
}
