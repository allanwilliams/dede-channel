
import React from 'react';
import dadosMenu from '../../menu_itens.json'

export default function ListaMenu() {

    
    const itensMenu = dadosMenu.itensMenu;
    const lista = itensMenu.map((item: IMenu, index: number) => {
        return (<>            
            {
                item.separador ? <hr/> : 
                <li className="nav-item" key={index}>
                    <a href={item.link} className="nav-link">
                        <i className={`nav-icon fas ${item.icone}`} />
                        <p> {item.nome} </p>
                        {item.novo && <span className="right badge badge-primary">Novo</span>}                    
                    </a>
                </li>   
            }                
        </>)
    })

    return (
        <> {lista} </>
    );
}
