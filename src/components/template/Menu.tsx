import { useBase } from '../../contexts/base';
import React from 'react';
import 'animate.css';
import ListaMenu from './ListaMenu';
import Link from 'next/link';

export default function Menu() {

    const {menuOpen} = useBase();
    let classMenuEffect = menuOpen ? "animate__slideInLeft" : "animate__slideOutLeft";
    
    return (
        <div className={`main-sidebar background-principal elevation-4 animate__animated animate__faster ${classMenuEffect}`} id="menu-lateral">
                
                <Link href="/" className="brand-link">
                    <img src="dist/img/logo_nossa_menu.png" alt="Nossa Defensoria" className="brand-image" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light"> &nbsp; </span>
                </Link>
                
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">                            
                            <ListaMenu />
                        </ul>
                    </nav>
                </div>
        </div>
    )

}
