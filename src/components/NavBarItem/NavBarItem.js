import React from 'react'
import './NavBarItem.css'

const NavBarItem = (props) => {

    return(
        <li onClick={() => props.changePage(props.name)} className={props.currentPage===props.name ? 'currentPage' : ''}><a href={props.link}>{props.name}<i className={props.icon} /></a></li>
    );
}

export default NavBarItem;