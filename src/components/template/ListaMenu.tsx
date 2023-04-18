
import React from 'react';
import dadosMenu from '../../menu_itens.json'
import Link from 'next/link';

export default function ListaMenu() {

    
    const itensMenu = dadosMenu.itensMenu;
    const lista = itensMenu.map((item: IMenu, index: number) => {
        return (<>            
 
                <li className="nav-item" key={index}>
                    {
                        item.separador ? <hr/> : 

                        <Link href={`${item.link}`} className="nav-link" key={index}>
                            <i className={`nav-icon fas ${item.icone}`} />
                            <p> {item.nome} </p>
                            {item.novo && <span className="right badge badge-primary">Novo</span>}                    
                        </Link>
                    }                
                </li>   
        </>)
    })

    return (
        <> {lista} </>
    );
}
